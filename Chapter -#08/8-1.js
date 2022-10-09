/**
 * 8.1 Defining Function
 */
//8.1.1 Function Declarations
let o = {
    FirstName: "Firoz",
    LastName: "Mahmud",
}
function printProps(o) {
    for (let p in o) {
        console.log(`${p}: ${o[p]}\n`);
    }

}
printProps(o);

function distance(x1, y1, x, y2) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}



let value = 9;
// console.log(`Fatorial of  is ${value}! ` + factorial(9));
//8.1.3 Function Expressions
const squre = function (x) {
    return x * x;
}
console.log(squre(5));

const f = function factorial(x) {
    if (x <= 1) {
        return 1;
    }
    else {
        return x * factorial(x - 1);
    }
}
console.log(`Fatorial of  is ${value}! ` + f(9));
console.log([3, 2, 1].sort(function (a, b) {
    return a - b;
}))

let tensqured = (function (x) { return x * x; }(10));
console.log(tensqured);
//8.1.3 Arrow Functions

const sum = (x, y) => {
    return x + y;
}
console.log(sum(45, 42));
const sum2 = (x, y) => x + y;
console.log(sum2(45, 42));

const fun = x => { return { value: x }; };
let filtered = [1, null, 2, 3].filter(x => x !== null);


//8.1.4 Nested Functions
let fun1 = function hypotenuse(a, b) {
    function squre(x) {
        return x * x;
    }
    return Math.sqrt(squre(a) + squre(b));
}
console.log(fun1(5, 6));