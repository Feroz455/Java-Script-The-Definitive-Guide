/*
4.2 Object and Array Initializers
*/
let a = [];
let b = [1 + 2, 3 + 4];
// let [c, d] = b;
// console.log(c);
// console.log(d);
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(matrix[0][0]);

let c = [1, , , , 5];
console.log(c[3]);

//Object inititalizer
let d = { e: 2.3, f: -1.2 };
let q = {};
q.e = 2.3, q.f = -1.2;
console.log(d.e);
console.log(d.f);
console.log(q.e);
console.log(q.f);


let rectangle = {
    upperLeft: { x: 2, y: 2 },
    lowerRight: { x: 4, y: 5 }
}
console.log(rectangle.upperLeft.x);
console.log(rectangle.upperLeft.y);
console.log(rectangle.lowerRight.x);
console.log(rectangle.lowerRight.y);