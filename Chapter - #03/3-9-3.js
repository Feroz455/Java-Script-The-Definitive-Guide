/*
3.9.3 Object to Primitive Conversios
*/

//Prefer-string

//Prefer-Number

//no-Preference

//Object to boolean conversions

//Object to string conversions
//Object to number conversions

//Special case operator conversions

//The toString() and valueOf() methods

console.log(({ x: 1, y: 2 }).toString());
console.log([1, 2, 3].toString());
console.log((function (x) { false(x); }).toString());
console.log((/\d+/g).toString());

let d = new Date(2020, 0, 1);
console.log(d.toString());
console.log(d.toDateString());
console.log(d.valueOf());

//Object to Primitive conversion algorithms

console.log(Number([]));
console.log(Number[99]);