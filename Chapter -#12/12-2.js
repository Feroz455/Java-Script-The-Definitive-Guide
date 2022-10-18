class Range {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
    // Make a Range act like a Set of numbers
    has(x) { return typeof x === "number" && this.from <= x && x <= this.to; }
    // Return string representation of the range using set notation
    toString() { return `{ x | ${this.from} ≤ x ≤ ${this.to} }`; }
    // Make a Range iterable by returning an iterator object.
    // Note that the name of this method is a special symbol, not a string.
    [Symbol.iterator]() {
        // Each iterator instance must iterate the range independently of
        // others. So we need a state variable to track our location in the
        // iteration. We start at the first integer >= from.
        let next = Math.ceil(this.from); // This is the next value we return
        let last = this.to; // We won't return anything > this
        return { // This is the iterator object
            // This next() method is what makes this an iterator object.
            // It must return an iterator result object.
            next() {
                return (next <= last) // If we haven't returned last value yet
                    ? { value: next++ } // return next value and increment it
                    : { done: true }; // otherwise indicate that we're done.
            },
            // As a convenience, we make the iterator itself iterable.
            [Symbol.iterator]() { return this; }
        };
    }
}
for (let x of new Range(1, 10)) console.log(x); // Logs numbers 1 to 10
[...new Range(-2, 2)] // => [-2, -1, 0, 1, 2]




// Return an iterable object that iterates the result of applying f()
// to each value from the source iterable
function map(iterable, f) {
    let iterator = iterable[Symbol.iterator]();
    return { // This object is both iterator and iterable
        [Symbol.iterator]() { return this; },
        next() {
            let v = iterator.next();
            if (v.done) {
                return v;
            } else {
                return { value: f(v.value) };
            }
        }
    };
}
// Map a range of integers to their squares and convert to an array
[...map(new Range(1, 4), x => x * x)] // => [1, 4, 9, 16]
// Return an iterable object that filters the specified iterable,
// iterating only those elements for which the predicate returns true
function filter(iterable, predicate) {
    let iterator = iterable[Symbol.iterator]();
    return { // This object is both iterator and iterable
        [Symbol.iterator]() { return this; },
        next() {
            for (; ;) {
                let v = iterator.next();
                if (v.done || predicate(v.value)) {
                    return v;
                }
            }
        }
    };
}
// Filter a range so we're left with only even numbers
[...filter(new Range(1, 10), x => x % 2 === 0)] // => [2,4,6,8,10]


//

function words(s) {
    var r = /\s+|$/g; // Match one or more spaces or end
    r.lastIndex = s.match(/[^ ]/).index; // Start matching at first nonspace
    return { // Return an iterable iterator object
        [Symbol.iterator]() { // This makes us iterable
            return this;
        },
        next() { // This makes us an iterator
            let start = r.lastIndex; // Resume where the last match ended
            if (start < s.length) { // If we're not done
                let match = r.exec(s); // Match the next word boundary
                if (match) { // If we found one, return the word
                    return { value: s.substring(start, match.index) };
                }
            }
            return { done: true }; // Otherwise, say that we're done
        }
    };
}

console.log([...words(" abc def ghi! ")]) // => ["abc", "def", "ghi!"]);


/**
 * 12.2.1 "Closing an iterator: The Return Method"
 */

