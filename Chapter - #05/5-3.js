//5.3 Conditionals

//5.3.1 if 

// if(Expression)
// statement;

let userName; //= "Firoz Mahmud";
if (!userName) {
    userName = "John Doe";
}
console.log(userName);


let i, j, sum = 0;
for (i = 0, j = 0; i < 10; i++, j--) {
    sum += i * j;
}
console.log(sum);

//5.4.4 for/of
sum = 0;
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let value of array) {
    sum += value;
}
console.log(sum);

//for/of with objects

let o = { x: 1, y: 2, z: 3 };
let keys = "";
for (let [name, value] in o) {
    console.log(name + " " + value);
}
sum = 0;
for (let k of Object.keys(o)) {
    console.log(o[k]);
    sum += o[k];
    keys += k;
}
console.log(sum)
console.log(keys);
sum = 0;
for (let v of Object.values(o)) {
    sum += v;
}
console.log(sum);
let pairs = "";
for (let [k, v] of Object.entries(o)) {
    pairs += k + " : " + v;
}
console.log(pairs);

//for/of with strings

let frequency = {};
for (let letter of "mississippi") {
    if (frequency[letter]) {
        frequency[letter]++;
    }
    else {
        frequency[letter] = 1;
    }
}
console.log(frequency);

let text = "Na na na na na na na na na Batman!";
let wordSet = new Set(text.split(" "));
let unique = [];
for (let word of wordSet) {
    unique.push(word);
}
console.log(unique);

let m = new Map([[1, "one"]]);
for (let [key, value] of m) {
    console.log(key);
    console.log(value);
}

// async function printStream(stream){
//     for await(let chunk of stream)
//     {
//         console.log(chunk);
//     }
// }
//5.4.1 for / in


for (let p in o) {
    console.log(o[p]);
}

let a = [];
i = 0;
for (a[i++] in o) {
    console.log(a[1 - i]);
}