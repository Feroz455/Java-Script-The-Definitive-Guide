/**
 * 6.8 Serializing Objects
 */
let o = { x: 1, y: { z: [false, null, ""] } };
let s = JSON.stringify(o);
let p = JSON.parse(s);
console.log(s);
console.log(p);
let d = new Date();
console.log(d);
let e = d.toJSON();
console.log(e);
