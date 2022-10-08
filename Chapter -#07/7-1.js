/**
 * 7.1 Creating Arrays
 */
//7.1.1 Array Literals

let empty = []; // An array with no elements
let primis = [2, 3, 5, 7, 11]; //An Array with 5 numeric elements
let misc = [1.1, true, "a"]; // 3 elements of various types + trailing comma
let base = 1024;
let table = [base, base + 1, base + 2, base + 3];

//Array literals can contains object literals or other array literals
let b = [[1, { x: 1, y: 2 }], [2, { x: 3, y: 4 }]];

let count = [1, , 3]; //Elements at indexes 0 and 2. No element at index 1
let undefs = [, ,] // An array with no elements but a length of 2

//7.1.2 The Spread Operator
let a = [1, 2, 3];
let bb = [0, ...a, 4]; //
for (let v of bb) {
    console.log(v);
}

let original = [1, 2, 3];
let copy = [...original];
copy[0] = 0;
console.log(original[0]);

let digits = [..."0123456789ABCDEF"];
console.log(digits);

let letters = [..."hello world"];
letters = [...new Set(letters)];
console.log(letters);

//7.13 The Array() constructor

let aa = new Array();
let aaa = new Array(10);
let aaaa = new Array(5, 4, 3, 2, 1, "testing, testing");
for (let v of aaaa) {
    console.log(v);
}
//7.1.4 Array.of()

let c = Array.of();
console.log(c);
let cc = Array.of(10);
console.log(cc);
let ccc = Array.of(1, 2, 3);
console.log(ccc);

//7.1.5 Array.from()
let copyCCC = Array.from(ccc);
console.log(copyCCC);
