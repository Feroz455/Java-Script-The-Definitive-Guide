/**
 * 9.1 classes and Prototypes
 */
//Example 9-1. A simple javascript class

//This is a factory function that returns a new range object 
function range(from, to) {
    let r = Object.create(range.methods);
    r.from = from;
    r.to = to;
    return r;
}
range.methods = {
    includes(x) {
        return this.from <= x && x <= this.to
    },
    //A generator function that makes 
    *[Symbol.iterator]() {
        for (let x = Math.ceil(this.from); x <= this.to; x++) {
            yield x;
        }
    },
    toString() {
        return "(" + this.from + "..." + this.to + ")";
    },
    sayHello() {
        return "Say Hello";
    }
}

let r = range(1, 3);
console.log(r.includes(2));
console.log(r.toString());
console.log([...r]);
console.log(r.sayHello());