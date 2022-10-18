//12.4 Advanced Generator Features 
//12.4.1 The returns Value of a Generator Function

function* smallNumbers() {
    console.log("next() invoked the first; argument discarded");
    let y1 = yield 1;
    console.log("next() invoked a second  time with  argument", y1);
    let y2 = yield 2;
    console.log("next() invoked a second  time with  argument", y2);
    let y3 = yield 3;
    console.log("next() invoked a second  time with  argument", y3);
    return 4;
}
let g = smallNumbers();
console.log("genetator created; no code runs yet");
let n1 = g.next("a")
console.log("genetator yielded", n1.value);
let n2 = g.next("b")
console.log("genetator yielded", n2.value);
let n3 = g.next("c")
console.log("genetator yielded", n3.value);
let n4 = g.next("d")
console.log("genetator yielded", n4.value);