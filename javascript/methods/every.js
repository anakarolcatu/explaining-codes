const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

// Array.prototype.every() // is everyone 19 or older?
    //the every works exactly the same as the some method, but will return true ONLY if ALL objects match the condition
    const allAdult = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
    console.log(allAdult);