/*
4.3 Function Definition Expressions
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