// Declaring Function 
function startFan(){
    console.log("go to the switch");
    console.log("and start the fan with the switch");
}

// Calling Function 
// startFan();

// Function with parameter
function bringShingara(taka){
    console.log("mama viya shingarar jonno tk dise", taka);
    console.log("tara tari gorom gorom shingara den!");
}

// Calling the Function 
// bringShingara(100);

// Function with return value
function bringShingara(taka){
    console.log("mama viya shingarar jonno tk dise", taka);
    console.log("tara tari gorom gorom shingara den!");
    var shingaraPrice = 10;
    var shingaraQuantity = taka/shingaraPrice;
    return shingaraQuantity;
}

// Viewing Function return
// console.log(bringShingara(200));

// Return value can be seen this way too 
// var treat = 250;
// var shingaraShobarJonno = bringShingara(treat);
// console.log(shingaraShobarJonno);

// Function with multiple parameter 
function summation (num1, num2) {
    return num1+num2;
}

var firstNumber = 32;
var secondNumber = 43;
var sum = summation (firstNumber, secondNumber);
// console.log("summation of the two number is", sum);

function substract (num1, num2) {
    return num1 - num2;
}
var substraction = substract(secondNumber, firstNumber);
// console.log("substraction of the two number is", substraction);

function multiple (x, y) {
    return x*y;
}
var number1 = 10;
var number2 = 34;
var multiplication = multiple(number1, number2);
// console.log("multiplication of the two number is", multiplication);

function divide (x,y){
    return y / x;
}
number2 = 5;
var division = divide (number2, number1);
console.log("Division of the two number is", division);