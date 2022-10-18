/**
 * 9. Subclasses
 */
//9.5.1 Subclasses and Prototupes

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
//9.5.2 Subclass with extends and super
class EZArray extends Array {
    get first() {
        return this[0];
    }
    get last() { return this[this.length - 1]; }
    get length() { return this.length };
}
let a = new EZArray()
console.log(a instanceof EZArray);
console.log(a instanceof Array);
a.push(1, 2, 3, 4);
console.log(a.lenght);
console.log(a.pop());
console.log(a.first);
console.log(a.last);

//9.5.3 Delegation Instead of Inheritance


