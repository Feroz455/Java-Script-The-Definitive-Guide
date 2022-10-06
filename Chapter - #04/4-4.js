//4.4 Property Access Expressions

let a = { x: 50, y: 100 };
console.log(a["x"]);
console.log(a.x);

let o = { x: 1, y: { z: 3 } };
console.log(o.y.z);
let c = [o, 4, [3, 5]];
console.log(c[2][1]);
console.log(c[0].y.z);
//4.4.1 Conditional Property Access

let d = {
    b: null
}
console.log(d?.c);
console.log(a.b?.c);
let e;
let index = 0;
try {
    e[index++]; //Throws TypeError
} catch (e) {
    console.log(index);
}
console.log(a?.[index++]);