// alert("Scripting Documents")

// function traverse(e, f) {
//     f(e);
//     for (let child of e.children) {
//         traverse(child, f);
//     }
// }
// function traverse2(e, f) {
//     f(e);
//     let child = e.firstElementChild;
//     while (child !== null) {
//         traverse2(child, f);
//         child = child.nextElementSibling;
//     }
// }
// document.body.innerHTML = "<h1>Oops</h1>";let paragraph = document.createElement("p"); // Create an empty <p> element
// let emphasis = document.createElement("em"); // Create an empty <em> element
// emphasis.append("World"); // Add text to the <em> element
// paragraph.append("Hello ", emphasis, "!"); // Add text and <em> to <p>
// paragraph.prepend("¡"); // Add more text at start of <p>
// paragraph.innerHTML
// Find the heading element with class="greetings"
let greetings = document.querySelector("h2.greetings");
// Now insert the new paragraph and a horizontal rule after that heading
greetings.after(paragraph, document.createElement("hr"));
greetings.before(paragraph);