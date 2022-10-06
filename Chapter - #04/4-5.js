/*
4.5 Invocations Expressions
*/
let squre = function (x) {
    return x * x;
};
function qube(x) {
    return x * x * x;
}
console.log(squre(56));
console.log(qube(5));
let sum = () => {
    return 2 * 2;
}
console.log(sum());

//4.5.1 Conditional Invocation

let f = null, x = 0;
// try {
//     f(x++);
// }
// catch (e) {
//     console.log(x);
// }
f?.(x++);
console.log(x);