function plus1(x) {
    return x + 1;
}
let y = 4;
y = plus1(y);
console.log(y);
const plus2 = x => x + 1;
let square = x => x * x;
console.log(plus2(y));
console.log(square(plus1(y)));


let a = [];
a.push(1, 2, 3);
a.reverse();

let points = [
    { x: 0, y: 0 },
    { x: 1, y: 2 }
];

points.dist = function () {
    let p1 = this[0];
    let p2 = this[1];

    let a = p2.x - p1.x;
    let b = p2.y - p1.y;

    return Math.sqrt(a * a + b * b);
};

console.log(points.dist());


function abs(x) {
    if (x >= 0)
        return x
    else
        return -x;
}
console.log(abs(-10) === abs(10));

Array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sum(array) {
    let product = 0;
    for (let x of array) {
        product += x;
    }
    return product;
}
console.log(sum(Array));


function factorial(n) {
    let product = 1;
    while (n > 1) {
        product *= n;
        n--;
    }
    return product;
}
console.log(factorial(6));
//page 9