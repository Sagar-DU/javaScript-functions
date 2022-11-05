// Factorial
let number = 5;
let factorial = 1;

for (let i = 1; i <= number; i++){
    factorial = factorial * i;
}

// console.log(factorial);

//Factorial With Function
function factorialFunC (x){
    let n = 1;
    for (let i = 1; i <= x; i++) {
        n = n*i;
    }

    return n;
}

//Factorial with funciton calling
let x = 5;
console.log(factorialFunC(x));