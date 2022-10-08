/**
 * 67 Extending Objects
 */
let target = { x: 1 }, source = { y: 2, z: 3 };
for (let key of Object.keys(source)) {
    target[key] = source[key];
}
console.log(target);
let o = {
    x: 1,
    y: 2,
    z: 3
}
let defa = {
    n: 5,
    m: 6
}
// for (let v of Object.keys(o)) {
//     console.log(v);
// }
Object.assign(o, defa);
for (let v of Object.keys(o)) {
    console.log(v);
}