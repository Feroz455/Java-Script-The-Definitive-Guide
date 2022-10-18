/**
 * 9.2 Classes and Constructors
 */
//Example 9.2 A range class using a constructor

function Range(_from, _to) {
    this.from = _from,
        this.to = _to;
}
Range.prototype = {
    includes: function (x) {
        return this.from <= x && x <= this.to;
    },
    [Symbol.iterator]: function* () {
        for (let x = 0; x <= this.to; x++)
            yield x;
    },
    toString: function () {
        return "(" + this.from + "..." + this.to + ")";
    }
};
let r = new Range(1, 3);
console.log(r.includes(2));
console.log(r.toString());
console.log([...r]);

/**
 * 9.2.1 Constructors, class identity, and instanceof
 */
function Strange() { };
Strange.prototype = Range.prototype;
let s = new Strange();
console.log(s instanceof Range);
/**
 * 9.2.2 The constructor Property
 */

let F = function () { };
let p = F.prototype;
let c = p.constructor;
console.log(c === F);
let o = new F();
console.log(o.constructor === F);