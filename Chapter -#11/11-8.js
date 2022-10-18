/**
 * 11.8 The console API
 */

let a = ["abc", "mno", "pqr", "xyz"];
let ban = "bangladesh";
console.table(a);
//console.log()

console.log(a);


console.debug(a);
console.info(a);
console.warn(a);
console.error(a);


// let age =

// console.assert()

// const prompt = require("prompt-sync")({ sigint: true });
// const age = prompt("How old are you? ");

// console.assert(age > 0 && age < 120, "Thats not posible");

// console.log(`You are ${age} years old.`);

// console.clear();

console.trace(ban);

// console.countReset(a);
console.group();
console.log(a);
console.log(a);
console.groupEnd();


//11.8.1 Formatted Output with Console

console.log("%s is", a);
let number = 123.214;
let strNumber = "123.321";
console.log("%i ", number);
console.log("%i", strNumber);
let obj = {
    x: 0,
    y: 7
}
console.log("%o", obj);
console.log("%o", a);


let url = new URL("ftp://admin:1337!@ftp.example.com/");

//11.9.1 Legacy URL Functions
