/**
 * 8.3 Function Arguments and Parameters
 */
//8.3.1 Optional Parameters and Defaults

function getPropertyNames(o, a) {
    if (a === undefined) a = [];
    for (let property in o) {
        a.push(property);
    }
    return a;
}
let o = { x: 1 }, p = { y: 2, z: 3 };
let a = getPropertyNames(o);
console.log(a);
getPropertyNames(p, a);
console.log(a);
//8.3.2 Rest Parameters and variable-length Argument lists
function max(first = -Infinity, ...rest) {
    let maxValue = first;
    for (let n of rest) {
        if (n > maxValue) {
            maxValue = n;
        }
    }
    return maxValue;
}
let l = max(1, 10, 100, 2, 3, 1000, 4, 0, 5, 6);
console.log(l);
/**
 * 8.3.3 The Arguments object
 */
//8.3.4 The spread Operator for Function Calls
// This function takes a function and returns a wrapped version
function timed(f) {
    return function (...args) { // Collect args into a rest parameter array
        console.log(`Entering function ${f.name}`);
        let startTime = Date.now();
        try {
            // Pass all of our arguments to the wrapped function
            return f(...args); // Spread the args back out again
        }
        finally {
            // Before we return the wrapped return value, print elapsed time.
            console.log(`Exiting ${f.name} after ${Date.now() - startTime}ms`);
        }
    };
}
// Compute the sum of the numbers between 1 and n by brute force
function benchmark(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) sum += i;
    return sum;
}
// Now invoke the timed version of that test function
timed(benchmark)(1000000) // => 500000500000; this is the sum of the numbers