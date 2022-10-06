//4.9 Relational Expressions

//4.9.2 Comparison Operators 

//4.9.3 The in Operator
let point = { x: 1, y: 1 };;
console.log("x" in point);
console.log("z" in point);
console.log("toString" in point);
let data = [7, 8, 9];
console.log("0" in data);
console.log(7 in data);

//4.9.4 The instanceof Operator
class books {
    constructor(title, publisure, date) {
        this.title = title;
        this.publisure = publisure;
        this.data = date;

    }
}
let b1 = new books("how to become reee", "Supersonic Punlication", "22-12-2022");
console.log(b1 instanceof books);

let d = new Date();

console.log(d instanceof Date);
console.log(d instanceof Number);
console.log(d instanceof Object);
console.log(d instanceof String);
