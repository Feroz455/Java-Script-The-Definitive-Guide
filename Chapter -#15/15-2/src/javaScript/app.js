// alert("Chapter 15");

//Set the onload property of the Window object to a function.
//The function is the event handler. it is invoked when the dcoument loads 

// window.onload = function () {
//     //Look up a <from></from> element
//     let from = document.querySelector("form#shipping");
//     form.onsubmit = function (event) {
//         if (!isFormValid(this)) {
//             event.preventDefault();
//         }
//     };
// };

function hello(event) {
    with (document) {
        with (this.form || {}) {
            with (this) {
                /*
                my code
                */
            }
        }
    }
}

let b = document.querySelector("#myButton");
b.onclick = function () { console.log("Thanks for clicking me!"); };
b.addEventListener("click", () => { console.log("Thanks again!"); });

//type/ target/ currentTarget/ timeStamp/ isTrusted
// target.onclick = function () {/**Handler code */ };