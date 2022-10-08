//Create Objects

//6.2.1 Object literals
let empty = {};
let point = { x: 0, y: 0 };
let p2 = { x: point.x, y: point.y };
let book = {
    "main title": "JavaScript",
    "sub-title": "The Definitive Guide",
    for: "All audiences",
    autor: {
        firstname: "David",
        surname: "Flanagan"
    }
}

//6.2.2 Creating Objects with new

let o = new Object();
let a = new Array();
let d = new Date();
let r = new Map();


//6.2.3 Prototypes

//6.2.4 Object.create()

let o1 = Object.create({ x: 1, y: 2 });
console.log(o1.x + o1.y);

let o2 = Object.create(null);


let o3 = Object.create(Object.prototype);

let o4 = { x: "Don't change this value" };
// library.function(Object.create(o4));
