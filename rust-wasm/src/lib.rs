use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}

#[wasm_bindgen]
pub fn fib(n: u32) -> f64 {
    let mut a: f64 = 0.0;
    let mut b: f64 = 1.0;
    for _ in 0..n {
        let tmp: f64 = a;
        a = b;
        b = tmp + b;
    }
    a
}

#[wasm_bindgen]
pub fn multiply_matrices(size: usize, a: &[f64], b: &[f64], result: &mut [f64]) {
    // Loop over each row of matrix A
    for i in 0..size {
        // Loop over each element in the row of A and corresponding row in B (column-wise access)
        for k in 0..size {
            // Get the element at row i, column k from matrix A
            let a_ik = a[i * size + k];
            // Loop over each column of matrix B
            for j in 0..size {
                // Multiply A[i][k] * B[k][j] and accumulate the result into C[i][j]
                result[i * size + j] += a_ik * b[k * size + j];
                // The resulting array is directly mutated to avoid copying a large array again
            }
        }
    }
}
