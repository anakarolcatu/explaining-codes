// -- MAP TO NAMES -- 

// -- Convert an object into an array --
//you have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
let john = { name: "John", surname: "Smith", id: 1, age: 25 };
let pete = { name: "Pete", surname: "Hunt", id: 2, age: 30 };
let mary = { name: "Mary", surname: "Key", id: 3, age: 28 };

let users = [john, pete, mary];
//we will use the map method to create a new array with the names of the users. It will take for each user, the property name and put in the new array.
let names = users.map(user => user.name);
console.log(names); // John, Pete, Mary

// -- MAP TO OBJECTS --

//you have an array of user objects, each one has a name, surname and id. Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname

//in this case, we are creating a new object for each user, with the properties fullName and id
let usersMapped = users.map(user => ({ //if we put only the curly braces, it will be interpreted as a function body, so we need to put the parentheses
    //we will use the template string to concatenate the name and surname
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));
console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // John Smith