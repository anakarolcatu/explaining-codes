//create a function that creates an object from an array, using id as the key, and array itens as values

function groupById(arr) {
    //it will return an object using the id as the key and add the value of the array item as the value of this object
    return arr.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

console.log(groupById(users))
//this function is handy when working with server data