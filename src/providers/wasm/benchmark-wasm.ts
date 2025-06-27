import { useCallback, useEffect, useState } from 'react';
import init, { multiply_matrices } from '../../../rust-wasm/pkg/rust_wasm';

// Example of how a wasm function could be turned into a react hook

export function useWasmBenchmark() {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const loadWasm = async () => {
            await init();
            setIsReady(true);
        };

        loadWasm();
    }, []);

    const runWasmBenchmark = useCallback(
        (size: number, a: Float64Array, b: Float64Array, result: Float64Array) => {
            if (!isReady) return null;
            multiply_matrices(size, a, b, result);
        },
        [isReady],
    );

    return { isReady, runWasmBenchmark };
}
