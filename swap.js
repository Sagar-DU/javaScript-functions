let firstNumber = 23, secondNumber = 29;

console.log(firstNumber, secondNumber);

//long way
let temp = firstNumber;

firstNumber = secondNumber;
secondNumber = temp;

console.log(firstNumber, secondNumber);

//short way
[firstNumber, secondNumber] = [secondNumber, firstNumber];

console.log(firstNumber, secondNumber);