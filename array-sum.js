const array = [45, 4, 56, 45, 5, 54, 9]
let sum = 0;

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
    sum +=element;
}

console.log("Sum of the all element of the array is:", sum)