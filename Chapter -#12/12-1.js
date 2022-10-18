/**
 * Iterators and Generators
 */
let sum = 0;
for (let i of [1, 2, 3]) {
    sum += 1;
}
console.log(sum);

let chars = [..."abcd"];
let data = [1, 2, 3, 4, 5];
console.log(Math.max(...data));

let prupleHaze = Uint16Array.of(225, 0, 255, 128);
let [r, g, b, a] = prupleHaze;
console.log(r);
console.log(g);
console.log(b);
console.log(a);



let m = new Map([["one", 1], ["two", 2]]);
for (let [k, v] of m) {
    console.log(k, v);
}

console.log(new Set('abc'));

/**
 * 12.1 How Iterators Work
 */

let itarable = [99];
let iterator = itarable[Symbol.iterator]();
for (let result = iterator.next(); !result.done; result = iterator.next()) {
    console.log(result.value)
}
let list = [1, 2, 3, 4, 5];
let iter = list[Symbol.iterator]();
let head = iter.next().value;
let tail = [...iter];
console.log(head);
console.log(tail);

