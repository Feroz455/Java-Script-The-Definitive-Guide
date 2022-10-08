/**
 * 7.3 Sparse Arrays
 */
let a = new Array(5);
console.log(a.length);
let aa = [];
console.log(aa.length);
a[1000] = 0;
console.log(a.length);
let a1 = [,];
let a2 = [undefined];
console.log(0 in a1);
console.log(0 in a2);