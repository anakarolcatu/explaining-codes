const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];
// Array.prototype.findIndex()

// -- FIND AND DELETE SOMETHING
    // Find the comment with this ID
    // delete the comment with the ID of 823423
    //this method is useful when you need to delete something in an array, in order to delete something, you need to know where it is, in what position
    const index = comments.findIndex(comment => comment.id === 823423);
    console.log(index);
    //to delete something there is 2 ways of doing it:
    //comments.splice(index, 1); //this we are hardcoding the position of what we want to delete
    //the other option is to build a copy of the array you want to delete and don't include the item you want to delete:
    const newComments = [
      ...comments.slice(0, index), //you spread all itens from the array and go from the first position(0), to the index(that is the item you want to delete)
      ...comments.slice(index + 1) //and then from the index to the last position, so you don't loose anything
    ];