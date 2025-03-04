// --- GENERAL SORTING---

// -- Create an object from an array --
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

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  // 4. How many years did all the inventors live all together?
  //in this case, we need to calculate how many years each one of them lived and then sum up. So we have the total, that is the accumulator and each person. We take every person death and birth date and add the value to the total. To make it work, we need to add the initial value as 0 in the end of the function.
  const livedYears = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0);
  console.log(livedYears);

  // -- GET AVERAGE VALUE FROM AN ARRAY --

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

// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
//we will use reduce to iterate over the array
const transportation = data.reduce(function(obj, item) {
  //then, we need to check if the object already have that item, if not, it will create it if the 0 count
  if (!obj[item]) {
    obj[item] = 0;
  }
  //and then it will add 1 to the counter
  obj[item]++;
  return obj;
  //we need to put the items in a object, we could hardcode every item of the array, but if you dont know each one of them, you can start with an empty object and the if loop will verify and create each on of them that needs to be created
}, {});

console.log(transportation);