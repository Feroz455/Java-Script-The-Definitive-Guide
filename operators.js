//operators act on values the operands to produce a new value
console.log(3 + 3);
console.log(3 - 3);
console.log(3 * 3);
console.log(3 / 3);
//Array and objects can hold other array and objects:
let points = [
    { x: 0, y: 0 },
    { x: 1, y: 2 }
];


console.log(points[1].x - points[0].x);
console.log("3" + "2");
let count = 0;


//increment operator
console.log(count++);
console.log(count--);
console.log(count += 2);
console.log(count *= 3);


//logical operator

let x = 2, y = 3;

console.log(x === x);
console.log(x !== x);
console.log(x < x);
console.log(x > x);
console.log(x <= x);
console.log(x >= x);

console.log("tow" === "three");
console.log("tow" > "three");


//logical operator
console.log((x === 2) && (y === 3));
console.log((x > 2) || (y < 3));

console.log(!(x === y));