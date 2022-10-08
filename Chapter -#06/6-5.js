/**
 * 6.5 Tsting Properties
 */
let o = { x: 1 };
console.log("x" in o);
console.log("y" in o);
console.log("toString" in o);

console.log(o.hasOwnProperty("x"));
console.log(o.hasOwnProperty("y"));
console.log(o.hasOwnProperty("toString"));

console.log(o.propertyIsEnumerable("x"));
console.log(o.propertyIsEnumerable("y"));
console.log(o.propertyIsEnumerable("toString"));
Object.prototype.propertyIsEnumerable("toString");

let n = { x: undefined };
console.log("x" in o);


