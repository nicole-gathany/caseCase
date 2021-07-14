// given a string one or more words
// words can have mixed cases
//return a new string with the first letter uppercase in each word and no spaces

//"This table is cool" -> "ThisTableIsCool"

//"caMel cAse" -> "CamelCase"

//split string " "
// makes an array
//map it so that each word first letter of the word and changes it to Uppercase
// concats with the rest of the word which is changed to all lower case
//join the arry with ""

const camelCase = function(str){
  let arr = str.toLowerCase().split(" ");
  //console.log(arr);
     return arr.map(word => word[0].toUpperCase() + word.slice(1)).join("");
}

console.log(camelCase("This table is cool"), " should be ThisTableIsCool")
console.log(camelCase("caMel cAse"), " should be CamelCase")