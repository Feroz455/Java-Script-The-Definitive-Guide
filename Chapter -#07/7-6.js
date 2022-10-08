/*
7.6 Iterating Arrays
*/
let letters = [..."hello World!"];
let string = "";
for (let lttter of letters) {
    string += lttter;
}
// delete letters[2];
console.log(string);

let everyother = "";
for (let [index, letter] of letters.entries()) {
    if (index % 2 == 0) {
        everyother += letter;
    }
}
console.log(everyother);

//foreEach
let uppercase = "";
letters.forEach(letter => {
    uppercase += letter.toUpperCase();
})
console.log(uppercase);
let vowels = "";
for (let i = 0; i < letters.length; i++) {      // For each index in the array
    let letter = letters[i];                    // Get the element at that index
    if (/[aeiou]/.test(letter)) {               // Use a regular expression test
        vowels += letter;                       // If it is a vowel, remember it
    }
}
console.log(vowels);