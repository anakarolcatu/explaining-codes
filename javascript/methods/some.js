const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];
// Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    //the some method takes a function to check for something. We will need to check the actual year to calculate the age and then, it will return true if any of the objects match the condition
    const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);
    console.log(isAdult);