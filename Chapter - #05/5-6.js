/*
5.6 Miscellaneous Statements
*/

//5.6.1 with 
/*
document.forms[0].address.value
//use with
with(document.forms[0])
{
    name.value = "";
    address.value= "";
    email.value= "";
}

//you can also write like this 

let f = document.forms[0];
f.name.value = "";
f.address.values = "";
*/

//5.6.2 debugger

function f(o) {
    if (o === undefined) debugger;
    // ... here is your statement
}
//5.6.3 use strict
