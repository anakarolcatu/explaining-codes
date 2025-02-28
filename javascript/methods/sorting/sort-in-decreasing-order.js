//the sort() method sorts the elements of an array in place and returns the sorted array.
//using only the sort, without any sorting function, the elements are sorted as strings by default
//the default sort order is according to the string Unicode code points
//to use our own sorting order, we need to provide a function as an argument
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
console.log(arr); // 8, 5, 2, 1, -10

//the longer version of the code above:
function compareNumeric(a, b) {
    if (a < b) return 1;
    if (a > b) return -1;
}

//when we need to sort in increasing order, we can just swap the values, instead of b - a, use a - b

//-- SORTING OBJECTS --//
//we can use the same sort method to sort arrays of objects
//we just need to provide a function that compares objects instead of numbers
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];
//we will sort the users by age
function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
}
sortByAge(users);
console.log(users[0].name); // John
console.log(users[1].name); // Mary
console.log(users[2].name); // Pete
