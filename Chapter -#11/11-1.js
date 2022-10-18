/**
 * The JavaScript Standard Library
 */
/**
 * 11.1 Sets and Maps
 */
//11.1.1 The Set Class
// Create a Set object with the Set() constructor

//A new, Empty set
let s = new Set();
let t = new Set([1, s]);
// let t = new Set(s);
let unique = new Set("Mississippi");
console.log(unique);
console.log(t);

console.log(unique.size);
console.log("size of s Set" + s.size);
s.add(1);
console.log("size of s Set" + s.size);
s.add(1);
console.log("size of s Set" + s.size);
s.add(true);
console.log("size of s Set" + s.size);
s.add([1, 2, 3]);
console.log("size of s Set" + s.size);
s.delete(1);
console.log("size of s Set" + s.size);
s.clear();
console.log("size of s Set" + s.size);





let oneDigitPrimes = new Set([2, 3, 5, 7]);
console.log(oneDigitPrimes.has(2));
console.log(oneDigitPrimes.has(3));
console.log(oneDigitPrimes.has(4));
console.log(oneDigitPrimes.has("5"));

let sum = 0;
for (let p of oneDigitPrimes) {
    sum += p;
}
console.log(sum);
let a = [...oneDigitPrimes];
console.log(a);
console.log(Math.max.apply(null, a));
oneDigitPrimes.forEach(n => { console.log(n) });

//11.1.2 The Map class

//Create a new Map with map() constructor

let m = new Map();
let n = new Map([["one", 1], ["two", 2]]);
console.log(n);
let copy = new Map(n);
let o = { x: 1, y: 2 }; // An object with two properties
let p = new Map(Object.entries(o));
console.log(copy);
console.log(o);
console.log(p);


let mm = new Map();
console.log(mm.size);
mm.set("one", 1);
console.log(mm.size);
mm.set("two", 2);
console.log(mm.get("two"));
console.log(mm.get("three"));
mm.set("one", true);
console.log(mm.get("one"));
mm.delete("one");
console.log(mm.size);
mm.set("one", 1).set("three", 3).set("four", 4);
console.log(mm.get("four"));

for (let [key, value] of mm) {
    console.log(key + " ->  " + value)
}
console.log(mm.entries());
console.log(mm.values());

mm.forEach((k, v) => console.log(k + " ->  " + v))

//11.1.3 WeakMap and WeakSet
