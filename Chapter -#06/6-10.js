/**
 * 6.10 Extended Object literal syntax
 */
let x = 1, y = 2;
let o = {
    x, y
}
console.log(o);
/**
 * 6.10.2 Computed Property Names
 */
const PROPERTY_NAME = "P1";
function computerPropertyName() {
    return "p" + 2;
}
let p = {};
o[PROPERTY_NAME] = 1;
o[computerPropertyName()] = 2;



/**
 * 6.10.3 Symbols as Property Names
 */
// const extension = Symbol("My extension symbol");
// let q = {
//     [extension] : 
// }
/**
 * 6.10.4 Spread Operator
 */

let position = {
    x: 0,
    y: 0
}
let dimensions = { width: 100, height: 75 };

let rect = { ...position, ...dimensions };
console.log(rect.x + rect.y + rect.width + rect.height); //

let r = { x: 1 };
let s = { x: 0, ...o };
console.log(s.x);
let t = { ...o, x: 2 };
console.log(t.x);
/**
 * 6.10.5 Shorthand Methods
 */
// let square = {
//     area: function () { return this.side * this.side },
//     side: 10
// }
let square = {
    area() { return this.side * this.side },
    side: 10
}
console.log(square.area());

const METHOD_NAME = "M";
const symbol = Symbol();
let weirdMethods = {
    "Method with Space"(x) {
        return x + 1;
    },
    [METHOD_NAME](x) {
        return x + 1;
    },
    [symbol](x) {
        return x + 3;
    }
}

console.log(weirdMethods["Method with Space"](1));
console.log(weirdMethods[METHOD_NAME](0));
console.log(weirdMethods[symbol](1))

/**
 * 6.10.6 Property Getters and Setters
 */
// let u = {
//     data: value,
//     get acceessorProp() { return this.dataProp; },
//     set acceessorProp(value) { this.dataProp = value; }
// }

// u.acceessorProp(5);


let v = {
    x: 1.0,
    y: 1.0,
    get r() {
        return Math.hypot(this.x, this.y);
    },
    set r(newValue) {
        let oldValue = Math.hypot(this.x, this.y);
        let ratio = newValue / oldValue;
        this.x *= ratio;
        this.y *= ratio;
    },
    get theta() {
        return Math.atan2(this.y, this.x);
    }
}
console.log(v.r);
// v.r = 2;
console.log(v.r);
console.log(v.theta);
let w = Object.create(v);
v.x = 3;
v.y = 4;

console.log(v.r);
const serialnum = {
    _n: 0,

    get next() {
        return this._n++;
    },
    set next(n) {
        if (n > this._n)
            this._n = n;
        else {
            throw new Error("Serial number can only be set to a larger value");
        }
    }
};
serialnum.next = 20;
console.log(serialnum.next);
console.log(serialnum.next);