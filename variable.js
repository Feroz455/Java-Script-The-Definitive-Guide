//Anything folowing double slashes is an English-labguage comment.

//Read the comment carefully: they expline the javascripe code

//A a variable is a symblic name for a value
//variables are declared with the let keyword:
let x; // Declare a variable named x

//Values can be assigned to variables with an  = sign 
x = 0; //Now the variable x has the value 0

console.log(x);

//javascripts supparts several types of values
x = 1; console.log(x);  //Numbers
x = 0.01; console.log(x); //Numbers can be integers or reals
x = "Hello world"; console.log(x); //Strings of text in quotation marks
x = 'JavaScript'; console.log(x); // Single quate marks also delimite strings
x = true; console.log(x); // a Boolean value 
x = false; console.log(x); // The other Boolean value
x = null; console.log(x); // Null is a speacial value that means 'No value'
x = undefined; console.log(x); // Undefined is another special values that like null




//Object type
let book = {
    topic: "JavaScripe",
    edition: 7
}
book.author = "Flanagan";
console.log(book.topic);
console.log(book.edition);


console.log(book["topic"]);
console.log(book["edition"]);
console.log(book['author']);


book.contents = {};


let prime = [2, 3, 5, 7];
let max = prime.length;
for (let i = 0; i < max; i++) {
    console.log(prime[i]);
}


//Array and objects can hold other array and objects:
let points = [
    { x: 0, y: 0 },
    { x: 1, y: 2 }
];
console.log(points[1]['y']);

let data = {
    trail1: [[1, 2], [3, 4]],
    trail2: [[2, 3], [[3, 4]]]
}
console.log(data.trail1[0][1]);
//page 6 => 