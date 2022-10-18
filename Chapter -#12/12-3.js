/*
12.3 Generators
*/
function* oneDigitPrimses() {
    yield 2;
    yield 3;
    yield 5;
    yield 7;
}
let primes = oneDigitPrimses();
console.log(primes.next().value);
console.log(primes.next().value);
console.log(primes.next().value);
console.log(primes.next().value);
console.log(primes.next().done);


///Genrators have a symbole.iterator method to make them iterable 
primes[Symbol.iterator]();
console.log([...oneDigitPrimses()]);
console.dir(Symbol);
let sum = 0;
for (let prime of oneDigitPrimses()) {
    sum += prime;
}
console.log(sum);


const seq = function* (from, to) {
    for (let i = from; i <= to; i++) {
        yield i;
    }
}
console.log([...seq(3, 5)]);

let o = {
    x: 1, y: 2, z: 3,
    *g() {
        for (let key of Object.keys(this)) {
            yield key;
        }
    }
};
console.log([...o.g()]);
// console.log([...o.next.g().value]);

// * [Symbol.iterator]()
// {
//     for (let x = Math.ceil(this.form); x <= this.to; x++)
//         yield x;
// }
function* fibonacciSequence() {
    let x = 0, y = 1;
    for (; ;) {
        yield y;
        [x, y] = [y, x + y];
    }
}
// console.log([...fibonacciSequence()]);
function fibonacci(n) {
    for (let f of fibonacciSequence()) {
        if (n-- <= 0)
            return f;
    }
}
console.log(fibonacci(20));
function* take(n, iterable) {
    let it = iterable[Symbol.iterator]();
    while (n-- > 0) {
        let next = it.next();
        if (next.done) return;
        else yield next.value;
    }
}
console.log(...take(5, fibonacciSequence()));

function* zip(...iterable) {
    // Get an iterator for each iterable
    let iterators = iterables.map(i => i[Symbol.iterator]());
    let index = 0;
    while (iterators.length > 0) { // While there are still some iterators
        if (index >= iterators.length) { // If we reached the last iterator
            index = 0; // go back to the first one.
        }
        let item = iterators[index].next(); // Get next item from next iterator.
        if (item.done) { // If that iterator is done
            iterators.splice(index, 1); // then remove it from the array.
        }
        else { // Otherwise,
            yield item.value; // yield the iterated value
            index++; // and move on to the next iterator.
        }
    }
}
// Interleave three iterable objects

console.log([...zip(oneDigitPrimes(), "ab", [0])]) // => [2,"a",0,3,"b",5,7]);