//we have an array of strings we'd like to have a sorted copy of it, but keep the array unchanged
let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    //we will return a new array using the slice method with no arguments, this will just copy the entire array
    //then we will sort the new array and return it. The sort method works with string without the need to put a sorting function
    return arr.slice().sort();
};

let sorted = copySorted(arr);
console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS