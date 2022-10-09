//Example 8-1 Using Function as data
//We defin some simple functions here 

function add(x, y) {
    return (x + y);
}
function subStract(x, y) {
    return (x - y);
}
function muliply(x, y) {
    return (x * y);
}
function divide(x, y) {
    return (x / y);
}

//Here's a function that takes one of the preceding functions 
//as an argument and invokes it on two operands

function operate(operator, operator1, operator2) {
    return operator(operator1, operator2);
}
//we could invoke this function like this to compute the value (2+3) + (4*5);
//For the sake of the example, we implements the simple functions again,
//this time within on object literal

const operators = {
    add: (x, y) => x + y,
    subtact: (x, y) => x - y,
    multiply: (x, y) => x * y,
    devide: (x, y) => x / y,
    pow: Math.pow// this works for predefined functions too
}
function operate2(operation, operand1, operand2) {
    if (typeof operators[operation] === "function") {
        return operators[operation](operand1, operand2);
    }
    else throw "unknown operator";
}
console.log(operate2("add", "hello", operate2("add", " ", "world"))) // => "hello world"
operate2("pow", 10, 2) // => 100