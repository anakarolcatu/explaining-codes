//the goal is to have a function to transform a string using the given rules
//in this case, we take strings written-like-this and transform them to writtenLikeThis

function camelize(str) {
    return str
        //we use the split method to split the string into an array of words
        .split('-') //using the '-' as the separator
        //what was 'written-like-this' is now ['written', 'like', 'this']
        //with the map, we iterate over the array of words
        .map(
            //then we capitalize first letter of all words except the first one
            //we use the index to check if it's the first word
            //if it is, we return the word as is
            //if it's not, we capitalize the first letter and concatenate it with the rest of the word
            //we use the slice method to get the rest of the word
            //and the toUpperCase method to capitalize the first letter
            //then we join the words back
            //and return the transformed string
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join(''); // join them back
}