// Factorial
let number = 5;
let factorial = 1;

//Factorial with for loop 
// for (let i = 1; i <= number; i++){
//     factorial = factorial * i;
// }

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
// console.log(factorialFunC(x));

//Factorial with while loop
let i = 1;
while (true) {
    factorial = factorial*i;
    i++;
    if (i > number){
        break;
    }
}

//Output
// console.log (factorial);

//Factorial with while loop in Function
function factFuncWhil (x){
    let i = 1;
    let n = 1;
    while(true){
        n=n*i;
        i++;
        if (i > x){
            return n;
        }
    }
}

console.log(factFuncWhil(5));