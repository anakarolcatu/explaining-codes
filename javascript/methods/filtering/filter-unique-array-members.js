//create a function that should return an array with unique itens of array.

function unique(arr) {
    let result = [];
    //for each item, we'll check if the result array already has it
    //if it is so, then ignore, otherwise, add it to the result array
    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

console.log(unique(strings));

//IMPORTANT: this solution only works for small arrays, later on, we will see how to make it work for larger ones