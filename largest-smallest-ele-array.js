//Find the largest and smallest element of an array
function largeNumber(numbers) {
    let Lnumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > Lnumber){
            Lnumber = element;
        }
    }
    return Lnumber;
}

function smallNumber(numbers) {
    let Snumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < Snumber) {
            Snumber = element;
        }
    }
    return Snumber;
}

let array = [23, 43, 5, 53, 29, 84];

console.log("Smallest number in the array is:", smallNumber(array));
console.log("Largest number in the array is:", largeNumber(array));