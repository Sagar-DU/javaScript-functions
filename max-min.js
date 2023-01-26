let doctor = 234, engineer = 544, businessman = 451;

//With JavaScript Math
/* let outputMax = Math.max(doctor, engineer, businessman);
let outputMin = Math.min(doctor, engineer, businessman);

console.log("Minimum wage:",outputMin);
console.log("Maximum wage:",outputMax); */

//With Function
function maximum(a, b, c) {
    if (a > b && a > c){
        return a;
    }
    else if (b > a && b > c) {
        return b;
    }
    else{
        return c;
    }
}

let largest = maximum(doctor, engineer, businessman);
console.log("The largest:", largest);

function minimum(a, b, c){
    if (a < b && a < c) {
        return a;
    }
    else if (b < a && b < c) {
        return b;
    }
    else{
        return c;
    }
}

let smallest = minimum (doctor, engineer, businessman);
console.log("The smallest", smallest);