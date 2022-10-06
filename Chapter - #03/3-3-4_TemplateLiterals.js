let s = `hello World!`;
let Name = "Bill";
let greeting = `Hello ${Name}.`; //Gretings == "Hello Bill."
console.log(greeting);

// let errorMessage = `\
// \u2718 Test failure at &{filename}:&{linenumber}:
// ${exception.message}
// Stack trace
// ${exception.stack}`;
// console.log(errorMessage);


/*
Taggeed tamplate literals
*/

console.log(`\n`.length);
console.log("Hello".length);
console.log(String.raw`\n`.length);