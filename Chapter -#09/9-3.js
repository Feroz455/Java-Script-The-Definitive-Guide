/**
 * 9.3 Classes with the class keyword
 */
class Range {
    constructor(_from, _to) {
        this.from = _from;
        this.to = _to;
    }
    include(x) {
        return this.from <= x && x <= this.to;
    }
    *[Symbol.iterator]() {
        for (let x = Math.ceil(this.from); x <= this.to; x++) {
            yield x;
        }
    }
    toString() {
        return `${this.from}...${this.to}`;
    }
};
let r = new Range(1, 3);
console.log(r.include());
console.log(r.toString());
console.log([...r]);
let s = new Range();

class Span extends Range {
    constructor(start, lenght) {
        if (lenght >= 0) {
            super(start, start + lenght);
        }
        else {
            super(start + lenght, start);
        }
    }
}
//9.3.1 Static Methods
//9.3.2 Getters, Setters, and Other Method Forms

//9.3.3 Public, Private and Static Fields
// class Buffer{
//     constructor()
//     {
//         this.size = 0;
//         this.capacity = 4096;
//         this.buffer = new Uint8Array(this.capacity);
//     }
// }
class BUffer {
    #size = 0;
    get size() { return this.#size; }
}
//9.3.4 Example: A Complex Number class 



/**
 * Example 9.4 Complex.js a complex number class
 */

/**
 * Instances of this complex class represent complex number s
 * recall that a complex number is the sum of a real number and an 
 * imaginary number and that the imaginary number i is the square root -1
 */
class Complex {
    constructor(real, imaginary) {
        this.r = real;
        this.i = imaginary;
    }
    plus(that) {
        return new Complex(this.r + that.r, this.i + that.i);
    }
    times(that) {
        return new Complex(this.r * that.r - this.i * that.i,
            this.r * that.i + this.i * that.r);
    }
    static sum(c, d) {
        return c.plus(d);
    }
    static product(c, d) {
        return c.times(d);
    }
    get real() {
        return this.r;
    }
    get imaginary() {
        return this.i;
    }
    get magnitude() {
        return Math.hypot(this.r, this.i);
    }
    toString() {
        return `{${this.r},${this.i}}`;
    }
    equals(that) {
        return that instanceof Complex && this.r === that.r && this.i == that.i;
    }
}
Complex.Zero = new Complex(0, 0);
Complex.One = new Complex(1, 0);
Complex.I = new Complex(0, 1);


let c = new Complex(2, 3);
let d = new Complex(c.i, c.r);
console.log(c.plus(d).toString());
console.log(c.magnitude);
console.log(Complex.product(c, d));
console.log(Complex.Zero.toString());

