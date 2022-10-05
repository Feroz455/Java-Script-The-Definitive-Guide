//Infinity 
let N = Number.POSITIVE_INFINITY;
console.log(N);
console.log(1 / 0);
console.log(Number.MAX_VALUE * 2);

console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);
console.log(Infinity / Infinity);
/*
Infinity
Infinity
Infinity
-Infinity
NaN
NaN
*/

console.log(Number.MIN_VALUE / 2);
console.log(Number.MIN_VALUE / 2 - (1 / Infinity));
/*
Output
0
0
*/

//The following Number properties are defined in ES6

console.log(Number.parseInt());
console.log(Number.parseFloat());
console.log(Number.isNaN(12));
console.log(Number.isFinite(12));
console.log(Number.isInteger(12.5));
console.log(Number.isSafeInteger(12));
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.EPSILON);
/*
NaN
NaN
false
true
false
true
-9007199254740991
9007199254740991
2.220446049250313e-16
*/

console.log("Negative Zero");
let zero = 0;
let negx = -0;
console.log((zero === negx));

console.log(1 / (zero === 1 / negx));
/*
Negative Zero
true
Infinity
*/
