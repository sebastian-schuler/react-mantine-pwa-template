/// <reference lib="webworker" />

let wasm: typeof import('../../../rust-wasm/pkg/rust_wasm');

self.onmessage = async (e: MessageEvent) => {
    const { size, a, b } = e.data;

    if (!wasm) {
        // Dynamically import and init WASM
        wasm = await import('../../../rust-wasm/pkg/rust_wasm');
        await wasm.default(); // Init WASM module
    }

    const result = new Float64Array(size * size).fill(0.0);
    const aFloat = new Float64Array(a);
    const bFloat = new Float64Array(b);

    const start = performance.now();
    wasm.multiply_matrices(size, aFloat, bFloat, result);
    const end = performance.now();

    self.postMessage(
        {
            duration: end - start,
            result: result.buffer, // Send ArrayBuffer for transfer
        },
        [result.buffer],
    );
};
