/**
 * 7.8 Array Methods
 */
//7.8.1 Array Iterator Methods
/**forEach */
let data = [1, 2, 3, 4, 5], sum = 0;
data.forEach(value => { sum += value; });
console.log(sum);
data.forEach(function (v, i, a) {
    a[i] = v + 1;
})
console.log(data);

//Map
let a = [1, 2, 3];
a.map(x => x * x);
console.log(a.map(x => x * x));
//filter()
let aa = [5, 4, 3, 2, 1];
aa = aa.filter(x => x < 3);
console.log(aa);


//find() and findIndex()

let aaa = [1, 2, 3, 4, 5, 6];
console.log(aaa.find(x => x % 5 === 0));
console.log(aaa.findIndex(x => x > 0));


//every() and some()

console.log(a.every(x => x > 0));
console.log(a.every(x => x % 2 === 0));

console.log(a.some(x => x > 0));
console.log(a.some(x => x % 2 === 0));
//reduce() and reduceRight()

console.log(a.reduce((x, y) => x + y, 0));
console.log(a.reduce((x, y) => x * y, 1));
console.log(a.reduce((x, y) => x > y ? x : y));


let b = [2, 3, 4];
console.log(b.reduceRight((acc, val) => Math.pow(val, acc)));
console.log(b.reduceRight((acc, val) => acc + val, 0));
console.log(b.reduce((x, y) => x + y, 0));

//7.8.2 Flattening arrays with flat() and flatMap()

let bb = [1, [2, [3, [4]]]];
console.log(bb.flat(1));
console.log(bb.flat(4));

let phrases = ["hello world", "the definitive guide"];
let words = phrases.flatMap(phrases => phrases.split(" "));
console.log(words);

//7.8.3 Adding arrays with concal()
console.log("Array concatenat");
console.log(a.concat(b));

//7.8.4 Stacks and queues with push(), pop(), shift(), and unshift()

let q = [];
q.push(1, 2, 3);
console.log(q);
// console.log(q.pop());
q.push(4);
console.log(q);
console.log(q.pop());

//7.8.5 Subarrays with slice(), splice(), fill(), and copyWithin()
//slice()

let a1 = a.slice(0, 1);
console.log(a);
console.log(a1);

let c = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(c.splice(4));
console.log(c);
c.splice(2, 0, "a", "b");
console.log(c);
c.splice(2, 2, [1, 2], 3);
console.log(c);

let d = new Array(5);
d.fill(0);
console.log(d);
d.fill(9, 1);
console.log(d);
d.fill(8, 2, -1);
console.log(d);

let c1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(c1.copyWithin(1));
// console.log(c1);

console.log(c1.copyWithin(2, 3, 5));
//INCLUDE   
let fruits = ["banana", "cherry", "apple"];
fruits.sort();
console.log(fruits);

let c2 = [1, 4, 7, 8, 5, 2, 11, 22, 33, 66, 14, 45, 26, 34];
console.log(c2);
c2.sort((a, b) => {
    return a - b;
});
console.log(c2);
let animal = ["ant", "Bug", "cat", "Dog"];
animal.sort();
console.log(animal);
animal.sort((s, t) => {
    let a = s.toLowerCase();
    let b = t.toLowerCase();
    if (a < b) return -1;
    else if (a > b) return 1;
    else
        return 0;
})
console.log(animal);

//7.8.7 Array to String Conversions

//join method
let array87 = [1, 2, 3];
console.log(array87.join("+"));

let Array89_1 = new Array(10);

console.log(Array89_1.join("_"));

//7.8.8 Static Array Functions
