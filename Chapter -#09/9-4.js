/**
 * 9.4 Adding Methods to Existing Classes
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
Complex.prototype.conj = function () {
    return new Complex(this.r, - this.i);
}
let a = new Complex(2, 3);
console.log(a.conj().toString());


//If the new String Method stratsWith() is not already defined
if (!String.prototype.startsWith) {
    //...then defined it like this using the older indexOf() method
    String.prototype.startsWith = function (s) {
        return this.indexOf(s) === 0;
    };
}
Number.prototype.times = function (f, context) {
    let n = this.valueOf();
    for (let i = 0; i < n; i++) {
        f.call(context.i);
    }
}