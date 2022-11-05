//Inch to Feet
function inchToFeet (inch){
    let feet = inch / 12;
    return feet;
}

//Output and calling the function
//console.log(inchToFeet(144));

// Feet to Inch 
function feetToInch (feet){
    let inch = feet * 12;
    return inch;
}

//Output and calling the funciton
// console.log(feetToInch(12));

// Mile to Kilometer
function mileToKilo (mile){
    let kilo = mile * 1.6;
    return kilo;
}

// Output and Calling the funciton 
console.log("Mile to Kilometer is", mileToKilo(12).toFixed(2));