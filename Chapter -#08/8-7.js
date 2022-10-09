/**
 * 8.7 Function Properties, Methods, and Constructor
 */
//8.7.1 The Length Property
//8.7.2 The name Property
//8.7.3 The prototype Property
//8.7.4 The call() and apply() Methods
function f(y) {
    return this.x + y;
}
let o = { x: 1 };
let g = f.bind(o);
console.log(g(2));
let p = { x: 10, g };
console.log(p.g(2));


let sum = (x, y) => x + y;
let succ = sum.bind(null, 1);
console.log(succ(2));

function f(y, z) {
    return this.x + y + z;
}
let gg = f.bind({ x: 1 }, 2);
console.log(gg(3));
/**
 * 8.7.6 The toString() Method
 */

//8.7.7 The Function() constructor

