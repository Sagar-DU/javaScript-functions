const myString = "Hello how are you?";

function stringReverse(x) {
    let reverse = "";
    for (const char of x){
        reverse = char + reverse;
    }
    return reverse;
}

console.log(stringReverse(myString));