import { useEffect, useState } from 'react';
import {
    Badge,
    Button,
    Group,
    Loader,
    MantineSize,
    NumberFormatter,
    NumberInput,
    ScrollArea,
    Stack,
    Table,
    Text,
    Title,
} from '@mantine/core';
import { useStateHistory } from '@mantine/hooks';
import { Helmet } from '@dr.pogodin/react-helmet';

const workerJsBenchmark = new Worker(new URL('@/providers/wasm/benchmark-js-worker.ts', import.meta.url), {
    type: 'module',
});

const workerWasmBenchmark = new Worker(new URL('@/providers/wasm/benchmark-wasm-worker.ts', import.meta.url), {
    type: 'module',
});

function WasmExample() {
    // Input
    const [input, setInput] = useState<number>(2500);

    // Input
    const [timeJs, setTimeJs] = useState<number>();
    const [timeWasm, setTimeWasm] = useState<number>();

    // Status
    const [isJsLoading, setIsJsLoading] = useState<boolean>();
    const [isWasmLoading, setIsWasmLoading] = useState<boolean>();
    const [isLoading, setIsLoading] = useState<boolean>();
    const [isResultMatching, setIsResultMatching] = useState<boolean | null>(null);

    // Results
    const [wasmResult, setWasmResult] = useState<Float64Array | null>();
    const [jsResult, setJsResult] = useState<Float64Array | null>();
    const [, handlers, history] = useStateHistory<{
        wasm: number;
        js: number;
        input: number;
    } | null>(null);

    const runBenchmark = () => {
        setIsResultMatching(null);
        setJsResult(null);
        setJsResult(null);
        setIsJsLoading(true);
        setIsWasmLoading(true);
        setIsLoading(true);
        try {
            // Setup benchmarks
            const length = input * input;
            const a = new Array(length).fill(0).map(() => Math.random());
            const b = new Array(length).fill(0).map(() => Math.random());

            // Benchmark Wasm
            workerWasmBenchmark.postMessage({ size: input, a, b });
            const handleWasmMessage = (e: MessageEvent) => {
                setIsWasmLoading(false);
                setTimeWasm(e.data.duration);
                setWasmResult(new Float64Array(e.data.result));
                workerWasmBenchmark.removeEventListener('message', handleWasmMessage);
            };
            workerWasmBenchmark.addEventListener('message', handleWasmMessage);

            // Benchmark JS
            const jsResult = new Array(length).fill(0);
            workerJsBenchmark.postMessage({ size: input, a, b, result: jsResult });
            const handleJsMessage = (e: MessageEvent) => {
                setIsJsLoading(false);
                setTimeJs(e.data.duration);
                setJsResult(new Float64Array(e.data.result));
                workerJsBenchmark.removeEventListener('message', handleJsMessage);
            };
            workerJsBenchmark.addEventListener('message', handleJsMessage);
        } catch (error) {
            console.error('Crash', error);
        }
    };

    useEffect(() => {
        if (jsResult && wasmResult && timeJs && timeWasm && isLoading) {
            handlers.set({ input, js: timeJs ?? null, wasm: timeWasm ?? null });
            const equal = areArraysEqual(wasmResult, jsResult);
            setIsResultMatching(equal);
            setIsLoading(false);
        }
    }, [timeJs, timeWasm, handlers, input, wasmResult, jsResult, isLoading]);

    return (
        <>
            <Helmet title='Wasm Example' />
            <Stack h={'100%'}>
                <ScrollArea>
                    <Stack>
                        <Title>Wasm Example / Benchmark</Title>
                        <Text>
                            This benchmark measures the performance of matrix multiplication of two large square
                            matrices — a computationally intensive task involving many floating-point
                            multiplications and additions. Each element in the output matrix is calculated as the
                            sum of products of corresponding elements from a row of the first matrix and a column
                            of the second matrix.
                        </Text>
                        <Text>
                            To ensure accurate and fair comparison between the JavaScript and Rust (compiled to
                            WebAssembly) implementations, both computations are offloaded to Web Workers. This
                            design prevents blocking the main UI thread, keeping the application responsive during
                            heavy calculations. The main thread sends input matrices to the workers, which perform
                            the multiplication independently and send back the results along with the computation
                            time.
                        </Text>
                        <Text>
                            Using Web Workers isolates the benchmarking workload and allows measurement of raw
                            computation speed without UI interference. This setup highlights the performance
                            benefits of WebAssembly over JavaScript for numeric-heavy tasks while maintaining
                            smooth user experience.
                        </Text>
                        <Title order={2}>Run benchmark</Title>
                        <Text>
                            When the user inputs a value like <strong>{input}</strong>, it means the benchmark will
                            multiply two {input}x{input} matrices—performing{' '}
                            <strong>{(input ** 2).toLocaleString()}</strong> element calculations—which determines
                            the workload size and directly impacts the computation time.
                        </Text>
                        <div>
                            <Text id='benchmark-input-label' size='sm'>
                                Matrix dimension
                            </Text>
                            <Group>
                                <NumberInput
                                    disabled={isJsLoading || isWasmLoading}
                                    min={100}
                                    max={5000}
                                    value={input}
                                    onChange={(v) => setInput(Number(v))}
                                    stepHoldDelay={150}
                                    stepHoldInterval={100}
                                    step={100}
                                    aria-labelledby='benchmark-input-label'
                                />
                                <Button loading={isJsLoading || isWasmLoading} onClick={() => runBenchmark()}>
                                    Run Benchmark
                                </Button>
                                {input >= 3000 && (
                                    <Text c={'red'}>
                                        Values of 3000 and above might take a long time or run out of memory
                                        depending on your system.
                                    </Text>
                                )}
                            </Group>
                        </div>

                        <Table>
                            <Table.Thead>
                                <Table.Tr>
                                    <Table.Th>Process</Table.Th>
                                    <Table.Th>Time</Table.Th>
                                    <Table.Th>Performance</Table.Th>
                                    <Table.Th>Result</Table.Th>
                                </Table.Tr>
                            </Table.Thead>
                            <Table.Tbody>
                                <Table.Tr>
                                    <Table.Td>Wasm</Table.Td>
                                    <Table.Td>
                                        {isWasmLoading ? (
                                            <Loader size={'xs'} />
                                        ) : (
                                            <NumberFormatter
                                                suffix=' ms'
                                                value={timeWasm}
                                                thousandSeparator=' '
                                                decimalScale={2}
                                            />
                                        )}
                                    </Table.Td>
                                    <Table.Td>
                                        {isWasmLoading || isLoading ? (
                                            <Loader size={'xs'} />
                                        ) : (
                                            timeWasm && timeJs && getPercentageString(timeWasm, timeJs)
                                        )}
                                    </Table.Td>
                                    <Table.Td>
                                        {isResultMatching === null
                                            ? ''
                                            : isResultMatching
                                              ? '✅ Match'
                                              : '❌ Mismatch'}
                                    </Table.Td>
                                </Table.Tr>
                                <Table.Tr>
                                    <Table.Td>JavaScript</Table.Td>
                                    <Table.Td>
                                        {isJsLoading ? (
                                            <Loader size={'xs'} />
                                        ) : (
                                            <NumberFormatter
                                                suffix=' ms'
                                                value={timeJs}
                                                thousandSeparator=' '
                                                decimalScale={2}
                                            />
                                        )}
                                    </Table.Td>
                                    <Table.Td>
                                        {isWasmLoading || isLoading ? (
                                            <Loader size={'xs'} />
                                        ) : (
                                            timeWasm && timeJs && getPercentageString(timeJs, timeWasm)
                                        )}
                                    </Table.Td>
                                    <Table.Td>
                                        {isResultMatching === null
                                            ? ''
                                            : isResultMatching
                                              ? '✅ Match'
                                              : '❌ Mismatch'}
                                    </Table.Td>
                                </Table.Tr>
                            </Table.Tbody>
                        </Table>

                        <Title order={2}>History</Title>
                        <Table w={600}>
                            <Table.Thead>
                                <Table.Tr>
                                    <Table.Th w={100}>Dimension</Table.Th>
                                    <Table.Th w={150}>Wasm Time</Table.Th>
                                    <Table.Th w={150}>Wasm Performance</Table.Th>
                                    <Table.Th w={150}>JS Time</Table.Th>
                                    <Table.Th w={150}>JS Performance</Table.Th>
                                    <Table.Th></Table.Th>
                                </Table.Tr>
                            </Table.Thead>
                            <Table.Tbody>
                                {history.history
                                    .slice()
                                    .reverse()
                                    .filter((i) => i !== null)
                                    .map((item, i) => (
                                        <Table.Tr key={i}>
                                            <Table.Td>{item.input} x {item.input}</Table.Td>
                                            <Table.Td>
                                                <NumberFormatter
                                                    suffix=' ms'
                                                    value={item.wasm}
                                                    thousandSeparator=' '
                                                    decimalScale={2}
                                                />
                                            </Table.Td>
                                            <Table.Td>{getPercentageString(item.wasm, item.js, 'md')}</Table.Td>
                                            <Table.Td>
                                                <NumberFormatter
                                                    suffix=' ms'
                                                    value={item.js}
                                                    thousandSeparator=' '
                                                    decimalScale={2}
                                                />
                                            </Table.Td>
                                            <Table.Td>{getPercentageString(item.js, item.wasm, 'md')}</Table.Td>
                                        </Table.Tr>
                                    ))}
                            </Table.Tbody>
                        </Table>
                        <div></div>
                    </Stack>
                </ScrollArea>
            </Stack>
        </>
    );
}

export default WasmExample;

const epsilon = 1e-6;

function areArraysEqual(a: Float64Array, b: Float64Array): boolean {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (Math.abs(a[i] - b[i]) > epsilon) {
            console.error(`Mismatch at index ${i}: ${a[i]} vs ${b[i]}`);
            return false;
        }
    }
    return true;
}

function getPercentageString(timeA: number = 0, timeB: number = 0, size: MantineSize = 'lg') {
    if (timeA === timeB) {
        return (
            <Badge size={size} color='yellow'>
                Equal
            </Badge>
        );
    }
    if (timeA < timeB) {
        return (
            <Badge size={size} color='green'>
                Best
            </Badge>
        );
    }
    if (timeB === 0) return 0;

    const speedup = (timeA / timeB) * 100.0;
    return (
        <Badge size={size} color='red'>
            {Math.max(0, Math.round(speedup))}% slower
        </Badge>
    );
}
