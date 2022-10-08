/**
 * 7.2 Reading and writing Array Elements
 *
 */
let a = ["world"];
console.log(a);
let value = a[0];
console.log(value);
a[1] = 3.1416;
console.log(a);
let i = 2;
a[i] = 3;
a[i + 1] = "hello";
a[a[i]] = a[0];
console.log(a.length);

let o = {};
o[1] = "one";
console.log(o["1"]);
console.log(o[1]);

a[-1.23] = true;
a["1000"] = 0;
a[1.000] = 1;
a[2.5] = 2.5;
// for (let v in a) {
//     console.log(v);
// }
let aa = [true, false];
console.log(aa[2]);
console.log(aa[-1]);
