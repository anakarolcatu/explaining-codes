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
