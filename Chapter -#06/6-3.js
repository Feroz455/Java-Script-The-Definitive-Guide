/**
 * 6.3 Querying and setting Properties
 */
// let author = book.author;
// let name = author.surname;
// let title = book["main title"];
/**
 * 6.3.1 Objects as Associative Array
 */

let customer = {
    address1: "Delpara",
    address2: "Narayanganj",
    address3: "Dhaka",
    address4: "Saddam"
}
// console.log(customer.address1)
// console.log(customer['address${1}']);
// console.log('address${1}');

let addr = "";
for (let i = 1; i <= 4; i++) {
    addr += customer[`address${i}`] + "\n";
}
console.log(addr);


let protfolio = {

}
/**
 * 6.3.2 Inheritance
 */

let o = {};
o.x = 1;
console.log(o.x);
let p = Object.create(o);
console.log(p.x);
p.y = 2;
for (let value in p) {
    console.log(value + " -> " + p[`${value}`]);
}
console.log("\nq\n");
let q = Object.create(p);
q.z = 3;
for (let value in q) {
    console.log(value + " -> " + q[`${value}`]);
}

let f = q.toString();
console.log(f);

let unitcircle = { r: 1 };
let c = Object.create(unitcircle);
c.x = 1;
c.y = 1;
c.r = 2;
for (let value in c) {
    console.log(value + " -> " + c[`${value}`]);
}

/**
 * 6.3.3 Property Access Errors
 */
