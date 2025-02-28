//write a function that gets an array and removes from it all values except those that are between a and b. The function should only modify the array. It should not return anything.

function filterRangeInPlace(arr, a, b) {
    //we use the filter method to iterate over the array and return a new array with the elements that match the condition
    //the condition is that the element should be higher or equal to a and lower or equal to b
    //then we use the splice method to remove the elements that don't match the condition
    arr.filter(item => item < a || item > b).forEach(item => arr.splice(arr.indexOf(item), 1));
}

//another aproach:
// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {
//         let val = arr[i];
//         // remove if outside of the interval
//         if (val < a || val > b) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
// }    

//usage:
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
console.log(arr); // 3,1 (matching values)