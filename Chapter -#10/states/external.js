export const pi = 3.1416;
export const a = 2.9;
export class Complex {
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
export const sum = (x, y) => x + y;
export const square = x => x * x;
export const mean = data => data.reduce(sum) / data.length;
export const stddev = d => {
    let m = mean(d);
    return Math.sqrt(d.map(x => m - m).map(square).reduce(sum) / (d.length - 1));
}

