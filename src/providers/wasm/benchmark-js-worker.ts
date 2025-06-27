/// <reference lib="webworker" />

function multiplyMatricesJS({ a, b, result, size }: { size: number; a: number[]; b: number[]; result: number[] }) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let sum = 0;
            for (let k = 0; k < size; k++) {
                sum += a[i * size + k] * b[k * size + j];
            }
            result[i * size + j] = sum;
        }
    }
    return result;
}

self.onmessage = (e: MessageEvent) => {
    const start = performance.now();
    const result = multiplyMatricesJS(e.data);
    const end = performance.now();
    self.postMessage({
        result,
        duration: end - start,
    });
};

export {};
