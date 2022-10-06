/*
3.8 Immutable primitive Values and Mutable object references
*/
let s = "hello";
console.log(s);
console.log(s.toUpperCase());
console.log(s);
s = s.toUpperCase();
console.log(s);

console.log("Obeject");
let o = { x: 1 }; // 
console.log(o.x);
o.x = 2;
console.log(o.x);
o.x = 3;
console.log(o.x);
let a = [1, 2, 3];
console.log(a);
a[0] = 0;
console.log(a);
a[3] = 4;
console.log(a);

/*
Object are not same if they have same values and properties
*/

let h = { x: 1 }, p = { x: 1 };
console.log(h === p);
let c = [], b = [];
console.log(c === b);

function equallArray(a, b) {
    if (a == b) return true;
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false
    }
    return true;
}

let x = [];
let y = x;
y[0] = 1;
console.log(x[0]);
console.log(x == y);

/*
hello
HELLO
hello
HELLO
Obeject
1
2
3
[ 1, 2, 3 ]
[ 0, 2, 3 ]
[ 0, 2, 3, 4 ]
false
false
1
true
*/

let n = ["a", "b", "c"];
let m = [];
for (let i = 0; i < a.length; i++) {
    m[i] = n[i];
}
let q = Array.from(m);
console.log(n);
console.log(m);
console.log(q);
/*
[ 'a', 'b', 'c' ]
[ 'a', 'b', 'c', undefined ]
[ 'a', 'b', 'c', undefined ]
*/
