/**
 * 11.6 JSON serialization and Parsing
 */
let obj = { s: "", n: 0, a: [true, false, null] };
let s = JSON.stringify(obj, null, 2);
console.log(s);
let copy = JSON.parse(s);
console.log(copy.n);

//11.6.1 JSON Customizations

let text = JSON.stringify(address, ["city", "state", "counrty"]);
console.log(text);