/**
 * 8.8 Functional Programming
 */
//8.8.1 Processing Arrays with Functions
let data = [1, 2, 3, 4, 5];
let total = 0;
for (let i = 0; i < data.length; i++) {
    total += data[i];
}
let mean = total / data.length;
console.log(mean);

total = 0;
for (let i = 0; i < data.length; i++) {
    let deviation = data[i] - mean;
    total += deviation * deviation;
}
let stddev = Math.sqrt(total / (data.length - 1));
console.log(stddev);

const sum = (x, y) => x + y;
const square = x => x * x;
//Then use those functions with Array methods to compute mean and stddev

//8.8.2 Higher-Order Functions

function compose(f, g) {
    return function (...args) {
        return f.call(this, g.apply(this, args));
    };
}
const sum1 = (x, y) => x + y;
const square1 = x => x * x;
console.log(compose(square, sum)(2, 3));