/*
3.10 Variable Declaration and assignment
*/
/*
3.10.1 Declarations with let and const
*/

let aa, ab, abc;
let message = "hello";
let i = 0, j = 0, k = 0;
let x = 2, y = x * x;

const H0 = 74;
const C = 299792.458;
const AU = 1.496E8;

// for (let i = 0, len = data.length; i < len; i++) {
//     console.log(data[i]);
// }
// for (let datam of data)
//     console.log(datam);
// for (let property in object)
//     console.log(property);

// for (const datam of data)
//     console.log(datam);
// for (const property in object)
//     console.log(property);

//Varible and constant scope
const n = 1;
if (n == 1) {
    let n = 2;
    console.log(n);
}
console.log(n);
// let n = 3


//Declarations and types

let p = 10;
p = "ten";

//3.10.2 Variable Declarations with var
var q;
var data = [], count = data.length;
for (let i = 0; i < count; i++) {
    console.log(data[i]);
}
//3.10.3 Destructuring Assignment

console.log("Destructuring Assignment");
let [f, g] = [1, 2];
console.log(f);
console.log(g);
[f, g] = [f + 1, g + 1];
console.log(f);
console.log(g);
[f, g] = [g, f];
console.log(f);
console.log(g);


//Convert [f,g] cordinates to [r,theta] polar coordinates
function toPolar(x, y) {
    return [Math.sqrt(x * x + y * y), Math.atan2(y, x)];
}
function toCartesian(r, theta) {
    return [r * Math.cos(theta), r * Math.sin(theta)];
}
let [r, theta] = toPolar(1.0, 1.0);
console.log(r);
console.log(theta);

let [h, l] = toCartesian(r, theta);
console.log(h);
console.log(l);



let Value = { first: 1, second: 2 };
for (const [name, value] of Object.entries(Value)) {
    console.log(name, value);
}


let transparent = { r: 0.0, g: 0.0, b: 0.0, a: 1.0 };
let { v, s, b } = transparent;

let points = [{ px: 1, py: 2 }, { px: 3, py: 4 }];
let [{ px: x1, py: y1 }, { px: x2, py: y2 }] = points;
console.log(x1 === 1 && y1 == 2 && x2 === 3 && y2 === 4);
console.log(x1);
console.log(x2);
console.log(y1);
console.log(y2);
