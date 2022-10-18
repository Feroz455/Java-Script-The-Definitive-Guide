/**
 * 11.2 Typed Arrays and Binary Data
 */
//11.2.1 Typed Array Types

//11.2.2 Creating Typed Arrays

let bytes = new Uint8Array(1024);
let Matrix = new Float32Array(9);
let point = new Int16Array(3);
let rgba = new Uint8ClampedArray(4);
let suduko = new Int8Array(81);

let white = Uint8ClampedArray.of(255, 255, 255, 0);
console.log(white);



let buffer = new ArrayBuffer(1024 * 1024);

console.log(buffer.byteLength)



let asBytes = new Uint16Array(buffer);
//11.2.3 Using Typed Arrays

function sieven(n) {
    let a = new Uint16Array(n + 1);
    let max = Math.floor(Math.sqrt(n));
    let p = 2;
    while (p <= max) {
        for (let i = 2 * p; i <= n; i++) {
            a[i] = 1;
        }
        while (a[++p]);
    }
    while (a[n]) n--;
    return n
}


let ints = new Int16Array(10);
ints.fill(3).map(x => x * x).join("");
console.log(ints);

let bytesArray = new Uint16Array(1024);
let PattenArray = new Uint16Array([0, 1, 2, 3]);
bytesArray.set(PattenArray);
console.log(bytesArray);
bytesArray.set(PattenArray, 4);
console.log(bytesArray);
//11.2.5 Data view and Endianness

