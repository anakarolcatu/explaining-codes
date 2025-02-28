//write a function that gets an array, looks for elements with values higher or equal to a and lower or equal to b and return a result as a array. The function should not modify the array, it should return a new array.

function filterRange(arr, a, b) {
    //we use the filter method to iterate over the array and return a new array with the elements that match the condition
    //the condition is that the element should be higher or equal to a and lower or equal to b
    return arr.filter(item => item >= a && item <= b);
}

//usage:
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered); // 3,1 (matching values)
console.log(arr); // 5,3,8,1 (not modified)