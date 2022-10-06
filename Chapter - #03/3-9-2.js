/*
3.9.2 Explicit Conversions
*/
let n = Number("3");
console.log(typeof (n));
let m = String(false);
console.log(typeof (m));
let o = Boolean([]);
console.log(typeof (o));
let x = 9;
console.log(x + " ");
console.log(+x);
console.log(x - 0);
console.log(!!x);

let a = 17;
let binary = "0b" + a.toString(2);
console.log(binary);
let octal = "0o" + a.toString(8);
console.log(octal);
let hex = "0x" + a.toString(16);
console.log(hex);
let q = 12;
console.log(q.toString(8));
/*
0b10001
0o21
0x11
*/
let z = 123456.789;
console.log(z.toFixed(0));
console.log(z.toFixed(2));
console.log(z.toFixed(5));

console.log(z.toExponential(1));
console.log(z.toExponential(3));
console.log(z.toExponential(4));
console.log("\n");
console.log(z.toPrecision(4));
console.log(z.toPrecision(7));
console.log(z.toPrecision(10));


/*
123457
123456.79
123456.78900
1.2e+5
1.235e+5
1.2346e+5
*/
console.log(parseInt("3 blind mice"));
console.log(parseFloat("3.14 meters"));
console.log(parseInt("-12.34"));
console.log(parseInt("0xFF"));
console.log(parseInt("0xff"));
console.log(parseInt("-0xff"));
console.log(parseFloat(".1"));
console.log(parseInt(".1"));
console.log(parseFloat("$72.47"));

/*
3
3.14
-12
255
255
-255
0.1
NaN
NaN
*/

console.log(parseInt("11", 2));
console.log(parseInt("ff", 16));
console.log(parseInt("zz", 36));
console.log(parseInt("077", 8));
console.log(parseInt("077", 10));
/*
3
255
1295
63
77
*/