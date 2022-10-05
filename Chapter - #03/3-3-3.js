/*
Working with Strings
page 35
*/
let Name = "Firoz";
let msg = "hello," + "world"; //Produces the string "Hello, World"
let greeting = "Wellcome to my blog, " + "Mr." + Name;
console.log(greeting + " length of the string " + greeting.length);
console.log(greeting.substring(1, 4));
console.log(greeting.slice(1, 4));
console.log(greeting.slice(-3));
console.log(greeting.split(","));

console.log(greeting.indexOf("hello"));
console.log(greeting.indexOf("l", 3));
console.log(greeting.lastIndexOf("l"));