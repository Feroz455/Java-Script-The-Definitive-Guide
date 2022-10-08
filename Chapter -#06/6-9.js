/**
 * 6.9 Object Methods
 */
//6.9.1 The toString() Method

// console.log(s.toString());
let point = {
    x: 1000,
    y: 2000,
    toString: function () { return `(${this.x}, ${this.y})`; },
    toLocaleString: function () {
        return `(${this.x.toLocaleString()}, ${this.y.toLocaleString()})`;
    }
};
console.log(point.toString());
console.log(point.toLocaleString());

/**
 * 6.9.1 The toLocaleString() Method
 */
/**
 * 6.9.3 The valueOf() Method
 */

let s = {
    x: 3,
    y: 4,
    valueOf: function () {
        return (Math.hypot(this.x, this.y));
    }
}
console.log(Number(s));
/**
 * 6.9.4 The toJSON Method
 */
