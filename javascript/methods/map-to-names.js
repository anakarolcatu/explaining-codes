//you have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];
//we will use the map method to create a new array with the names of the users. It will take for each user, the property name and put in the new array.
let names = users.map(user => user.name);
console.log(names); // John, Pete, Mary