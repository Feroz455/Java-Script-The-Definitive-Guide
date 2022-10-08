/**
 * 7.9 Array-Like Objects
 */
let a = {};
let i = 0;
while (i < 10) {
    a[i] = i * i;
    i++;
}
a.length = i;
let total = 0;
for (let j = 0; j < a.length; j++) {
    total += a[j];
}
console.log(total);

let a1 = { "0": "a", "1": "b", "2": "c", length: 3 };
let str = Array.prototype.join.call(a1, "+");
console.log(str);