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

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];

  // Sort the people alphabetically by last name
  //in this case, we first need to split the array to use the last name, otherwise, the full name will come up
  const lastName = people.sort((lastOne, nextOne) => {
    //we use the , and space to separate the two names and identify the first and last name. using the [] we are already creating a variable for each of the two names that each person has and storing in the variable
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
    return aLast > bLast ? 1 : -1;
  });
  console.log(lastName);