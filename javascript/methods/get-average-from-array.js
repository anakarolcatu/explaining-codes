//write a function that gets an array of objects with property age and returns the average age

let john = {name: 'John', age: 25};
let mary = {name: 'Mary', age: 30};
let peter = {name: 'Peter', age: 29};

let arr = [john, mary, peter];

function getAverageAge(users) {
    //the reduce method will sum all the items in each iteration through the array, in this case we are summing the age of each user
    //to make the average we divide the sum by the length of the array
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
};

console.log(getAverageAge(arr)); // 28