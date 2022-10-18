/**
 * 11.3.1 Defining Regular Expressions
 */
let pattern = /s$/;
let pattern1 = new RegExp("s$");
let pattern2 = /s$/i;
//Literal character

//character classes
//Repetition

//Non-Greedy repetition

//Alternatin, grouping, and references

//Specifying match position 

//11.3.2 String Methods for pattern Matching 
//Search()
console.log("JavaScript".search(/script/ui));
console.log("Python".search(/script/ui));


let text = "JavaScript: The Definitive Guide, 7th Edition- Adobe Acrobat Reader DC";
console.log(text.replace(/JavaScript/gi, "The Scripting laguage JavaScript"));
// A quote is a quotation mark, followed by any number of
// nonquotation mark characters (which we capture), followed
// by another quotation mark.
// let quote = /"([^"]*)"/g;
let quote = /"(?<quotedText>[^"]*)"/;
// Replace the straight quotation marks with guillemets
// leaving the quoted text (stored in $1) unchanged.
console.log('He said "stop"'.replace(quote, '«$<quotedText>»')) // => 'He said «stop»'


let s = "15 times 15 is 225";
console.log(s.replace(/\d+/gu, n => parseInt(n).toString(16)))  // => "f times f is e1"

console.log("7 plus 8 equals 15".match(/\d+/g));

//A very simple URL Parsing RegExp 
let url = /(\w+):\/\/([\w.]+)\/(\S*)/;
let text1 = "Vsit my blog at http://www.example.com/~david";
let match = text1.match(url);
let fullurl, protocol, host, path;
if (match !== null) {
    fullurl = match[0];
    protocol = match[1];
    host = match[2];
    path = match[3];
}
console.log(fullurl + " " + protocol + " " + host + " " + path);


let vowel = /[aeiou]/y; // Sticky vowel match
"test".match(vowel) // => null: "test" does not begin with a vowel
vowel.lastIndex = 1; // Specify a different match position
"test".match(vowel)[0] // => "e": we found a vowel at position 1
vowel.lastIndex // => 2: lastIndex was automatically updated
"test".match(vowel) // => null: no vowel at position 2
vowel.lastIndex // => 0: lastIndex gets reset after failed match

// One or more Unicode alphabetic characters between word boundaries
const words = /\b\p{Alphabetic}+\b/gu; // \p is not supported in Firefox yet
const text2 = "This is a naïve test of the matchAll() method.";
for (let word of text2.matchAll(words)) {
    console.log(`Found '${word[0]}' at index ${word.index}.`);
}

console.log("123,456,789".split(","));

//11.3.3 The RegExp class 
let zipcode = new RegExp("\\d{5", "g");
//test()
let pattern3 = /Java/g;
let text3 = "JavaScript > Java";
let match2;
while ((match2 = pattern3.exec(text3)) !== null) {
    console.log(`Matched ${match2[0]} at ${match2.index}`);
    console.log(`Next search begins at ${pattern3.lastIndex}`);
}