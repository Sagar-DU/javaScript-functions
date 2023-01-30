//Write a function for Fibonacci series
function fibonacci(n) {
    let x = [0, 1];
    if (n == 1) {
        return 0;
    }
    else if (n == 2) {
        return x;
    }
    else if (n > 2) {
        for (let i = 2; i < n; i++) {
            x[i] = x[i-2] + x[i-1]; 
        }
        return x;
    }
    return "Please enter a valid input."
}

console.log(fibonacci(100));