let strname = "string name";
let symname = Symbol("propname");
console.log(typeof (strname));
console.log(typeof (symname));
/*
output
*/
let o = {};
o[strname] = 1;
console.log(o[strname]);
o[strname] = 2;
console.log(o[strname]);

let s = Symbol("sym_x");
console.log(s.toString());

s = Symbol.for("Shared");
let t = Symbol.for("Shared");
console.log(s === t);
console.log(s.toString());
console.log(Symbol.keyFor(t));
const sym1 = Symbol();
const sym2 = Symbol('foo');
const sym3 = Symbol('foo');
console.log(sym1);
console.log(sym2);
console.log(sym3);
