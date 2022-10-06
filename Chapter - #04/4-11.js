eval("3+2");

//4.12.2 Global eval()

const geval = eval; // Using another name does a global eval
let x = "global", y = "global"; // Two global variables
function f() { // This function does a local eval
    let x = "local"; // Define a local variable
    eval("x += 'changed';"); // Direct eval sets local variable
    return x; // Return changed local variable
}
function g() { // This function does a global eval
    let y = "local"; // A local variable
    geval("y += 'changed';"); // Indirect eval sets global variable
    return y; // Return unchanged local variable
}
console.log(f(), x); // Local variable changed: prints "localchanged global":
console.log(g(), y); // Global variable changed: prints "local globalchanged":

