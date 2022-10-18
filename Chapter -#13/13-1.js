// /**
//  * 13.1 Asynchronous Programming with Callbacks
//  */
// console.log("oh ho");
// setTimeout(() => { console.log("Ready..."); }, 1000);
// setTimeout(() => { console.log("set..."); }, 2000);
// setTimeout(() => { console.log("go!"); }, 3000);
// function checkForUpdates() {
//     // console.clear();
//     console.log("...........");
// }
// setTimeout(checkForUpdates, 4000);
// let updateIntervalId = setInterval(checkForUpdates, 2000);
// updateIntervalId;
// function stopCheckingForUpdates() {
//     clearInterval(updateIntervalId);
// }
// stopCheckingForUpdates();

// //13.1.2 Events
// //13.1.3 Networks Events
// function getCurrentVersionNumber(versionCallback) {
//     let request = new XMLHttpRequest();
//     request.open("Get", "https//:www.example.com/api/version");
//     request.send();

//     //Register a callback that will be invoked when the response arrives
//     request.onload = function () {
//         if (request.status === 200) {
//             let currentVersion = parseFloat(request.responseText);
//             versionCallback(null, currentVersion);
//         }
//         else {
//             versionCallback(this.response.statusText, null);
//         }

//     };
//     // Register another callback that will be invoked for network errors
//     request.onerror = request.ontimeout = function (e) {
//         versionCallback(e.type, null);
//     };
// }


//13.1.4 Callback and Events in Node

const fs = require("fs");
const { request } = require("http");
let options = {};
fs.readFile("config.json", "utf-8", (err, text) => {
    if (err) {
        console.warn("could not read config file", err);
    }
    else {
        Object.assign(options, JSON.parse(text));
    }
    startProgram(options);
})

const https = require("https");
//Read the text content of the URl and asynchronously pass it to thte callback
function getText(url, callback) {
    request = https.get(url);

    //Register a function to handle the responnse event
    request.on("response", Response => {
        let httpStatus = Response.statusCode;

        //The body of the HTTP response has not been recived yet
        //so we regster more evebt handlers to be called when it arrives
        Response.setEncodeing("utf-8");
        let body = "";
        Response.on("data", chunk => { body += chunk });

        //this event handler is called when the response is complete 
        Response.on("end", () => {
            if (httpStatus === 200) {
                callback(null, body);
            }
            else {
                callback(httpStatus, null);
            }
        });
    });
    request.on("error", (err) => {
        callback(err, null);
    })
}