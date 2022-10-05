//integer 
let i = 1000;

//Hex 
let h = 0x1000;
//binary
let b = 0b1000;
//ocatal
let o = 0o1000;
console.log(i);
console.log(h);
console.log(b);
console.log(o);
/*
Outout 
1000
4096
8
512
*/

//3.2.2 Floating-point literals
// let a = 3.14, bb = 345.6789;
// let  c = .333333333333, d = 6.02e23, e = 1.4738223E-32;
let a = [3.14, 345.6789, .333333333, 6.02e23, 1.4738222E-32];
for (let i = 0; i < 5; i++) {
    console.log(a[i]);
}
/*
Output
3.14
345.6789
0.333333333
6.02e+23
1.4738222e-32
*/

//separators in Numeric literals

let Seperator = [1_000_000_000, 0x89_AB_CD_EF, 0b0001_1101_0111, 0.123_456_789];
for (let i = 0; i < Seperator.length; i++) {
    console.log(Seperator[i]);
}
/*
output
1000000000
2309737967
471
0.123456789
*/