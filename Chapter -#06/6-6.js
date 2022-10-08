/**
 * 6.6 Enumerating Properties
 */

let o = {
    x: 1,
    y: 2,
    z: 3
}
console.log(o.propertyIsEnumerable("toString"));
for (let pp in o) {
    console.log(pp);
}
for (let p in o) {
    if (!o.hasOwnProperty(p)) continue;
    else
        console.log(p);
}

for (let p in o) {
    if (typeof o[p] == "function") continue;
    else
        console.log(p);
}
console.log("\n");
let oo = Reflect.ownKeys("o");
for (let i = 0; i < oo.length; i++) {
    console.log(oo[i]);
}
//6.6.1 Property Enumeration order





