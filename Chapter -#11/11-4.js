/**
 * 11.4 Dates and Times
 */
const { performance } = require("perf_hooks");
let now = new Date();
console.log(now.toDateString());


let century = new Date(2100, 0, 1, 2, 3, 4, 5,);
console.log(century);

let century1 = new Date(Date.UTC(2100, 0, 1));
console.log(century1);


let century2 = new Date("2100-01-01t00:00:00z");
console.log(century2);
let d = new Date();
d.setFullYear(d.getFullYear() + 1);
console.log(d);


//11.4.1 Timesstaps
d.setTime(d.getTime() + 30000);
console.log(d);


let startTime = Date.now();
for (let i = 0; i < 10000; i++);
let endTime = Date.now();
console.log(`Spline reticulation took ${endTime - startTime}ms`);

//11.4.2 Date Arithmatic

d.setMonth(d.getMonth() + 3, d.getDate() + 14);
console.log(d);

//11.4.3 Formatting and Parsing Date Strings

let d2 = new Date(2020, 0, 1, 17, 10, 30);

console.log(d.toString());
console.log(d.toUTCString());
console.log(d.toDateString());
console.log(d.toLocaleDateString());
console.log(d.toLocaleTimeString());
console.log(d.toISOString());