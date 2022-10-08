//5.5 Jumps
//5.5.1 Labeled Statements
// mainloop:
// while (token !== null) {
//     //code omitted
//     continue mainloop; // Jump to the next iteration of the named loop
//     //More code omitted..
// }
//5.5.3 continue
//5.5.4 return 
//5.5.5 yield 

function* range(from, to) {
    for (let i = from; i <= to; i++) {
        yield i;
    }
}
let gen = range(1, 10);
console.log(gen.next());

//5.5.6 Throw
function factorial(x) {
    // If the input argument is invalid, throw an exception!
    if (x < 0) throw new Error("x must not be negative");
    // Otherwise, compute a value and return normally
    let f;
    for (f = 1; x > 1; f *= x, x--) /* empty */;
    return f;
}
//5.5.7 try/ catch / finally

try {
    const prompt = require("prompt-sync")({ sigint: true });
    let n = prompt("Please Enter a pisitive integer ");
    //Compute the factorial fo the number, assuming the input is valid
    let f = factorial(n);
    //display the result
    console.log(n + "! = " + f);
}
catch (err) // if the user's input was not valid we end up here
{
    console.log(err.message);  //Tell the user what the error is
}