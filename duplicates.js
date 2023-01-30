//Remove the duplicate element from an array.

const array = [1, 124,124,142,14,14,451,1];

function removeDuplicates(x) {
    let unique = [];
    for (const element of x) {
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}

console.log(removeDuplicates(array));