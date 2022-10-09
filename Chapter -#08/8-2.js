/**
 * 8.2 Invoking Functions
 */
//8.2.1 Function Invocation

let printProps = function (o) {
    for (let v in o) {
        console.log(`${v}: ${o[v]}\n`);
    }
}
printProps({ FirstName: "Firoz Mahmud" });
function distance(x1, y1, x2, y2) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}
let total = distance(0, 0, 2, 1) + distance(2, 1, 3, 5);
console.log(total);
const strict = (function () { return !this; })
console.log(strict());
//8.2.2 Method Invocation

let calculator = {
    operand1: 1,
    operand2: 2,
    add() {
        this.result = this.operand1 + this.operand2;
    }
};
calculator.add();
console.log(calculator.result);
//
let obj = {
    m: function () {
        let self = this;
        console.log(this === obj);
        console.log(self === obj);
        f();
        function f() {
            console.log(this === obj);
            console.log(self === obj);
        }
    }
}
obj.m();

const f = () => {
    this === obj;
}

//8.2.3 Constructor Invocation
//8.2.4 Indirect Invocation
//8.2.5 Implicit Function Invocation

