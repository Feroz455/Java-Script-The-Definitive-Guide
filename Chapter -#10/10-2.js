/**
 * 10.2 Modules in node
 */
//10.2.1 Node Exports
// const sum = (x, y) => x + y;
import { pi, a, Complex } from "./states/external.js";
console.log(pi);
console.log(a);
let r = new Complex(1, 2);
console.log(r.toString());

//10.3.7 import.meta.url
