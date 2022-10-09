/**
 * 8.5 Functions as Namespaces 
 */
let scope = "Golobal scope";
function checkscope() {
    let scope = "Local scope"
    function f() {
        return scope;
    }
    return f;
}
console.log(checkscope());
console.log("from here");
console.log(checkscope()());

let uniqueInteger = (function () { // Define and invoke
    let counter = 0; // Private state of function below
    return function () { return counter++; };
}());
// uniqueInteger() // => 0
// uniqueInteger() // => 1
console.log(uniqueInteger());
console.log(uniqueInteger());

function counter() {
    let n = 0;
    return {
        count: function () {
            return n++;
        },
        reset: function () {
            n = 0;
        }
    }
}
let c = counter(), d = counter();
console.log(c.count());
console.log(d.count());
console.log(c.count());
console.log(d.count());

