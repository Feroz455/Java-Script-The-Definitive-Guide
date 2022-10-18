/**
 * 10.3 Modules in Es6
 */
//10.3.1 ES6 Exports
import { pi as PP, a, Complex } from "./states/external.js";
import { degreesToRadians, PI, ruby } from "./states/Module2.js";
console.log(PP);
console.log(a);
let r = new Complex(1, 2);
console.log(r.toString());
console.log(PI);
console.log(degreesToRadians(15));
//10.3.2 ES6 Imports
// 10.3.3 Imports and Exports with Renaming
ruby();
