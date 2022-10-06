/*
4.13 Miscellaneous Operators
*/

//4.13.1 The conditional Operator(?:)

let x = 0;
console.log(x > 0 ? x : -x);

let username;
console.log("hello " + (username ? username : "There"));

//4.13.2 First_Defined (??);

//4.13.3 The typeof Operator

//4.13.4 The delete Operator
let o = { x: 1, y: 2 };
delete o.x;
console.log("x" in o);

let a = [1, 2, 3];
delete a[2];
console.log(2 in a);
console.log(a.length);

//4.13.5 The await Operator
//4.13.6 The void Operator
let counter = 0;
const increment = () => void counter++;
increment();
console.log(counter);

// 4.13.7 The comma Operator (,);
