//13.2 Promises
//13.2.1 Using Promuses
// getJSON(ur)
// getJSON(url).then(jsonData => {
//     //This is a callback function that will be asynchronously
//     //invoked with the parsed JSON value when it becomes available
// });


// function displayProfile(profile) {
//     getJSON("/api/user/profile").then(displayUserProfile);
// }

// //Handiling errors with Promises

// getJSON("/api/user/profile").then(displayUserProfile, handleProfileError);
// getJSON("/api/user/profile").then(displayUserProfile).catch(handleProfileError);
/**
 * 13.2.2 Chaining Promises
 */
fetch(documentURL).then(response => response.json()).then(document => {
    return render(document);
}).then(rendered => {
    cacheInDatabase(rendered);
})
    .catch(error => handle(error));
fetch("/api/user/profile").then(response => {
    if (response.ok && response.headers.get("Content-Type") === "application/json") {
        //what can we do here, We don't actually have the response body yet
    }
});
fetch("/api/user/profile").then(response => {
    response.json().then(profile => {
        //Ask for the JSON-parsed body 
        //when the body of the response arrives, it will be autometically 
        //parsed as JSON and passed to this function.

        displayUserProfile(profile);
    })
});


fetch("/api/user/profile").then(response => {
    return response.json();
}).then(profile => {
    displayUserProfile(profile);
})
fetch(theURL)
    .then(callback1)
    .then(callback2);

//13.2.3 Resolving Promises

function c1(responnse) {
    let p4 = responnse.json();
    return p4;
}
function c2(profile) {
    displayUserProfile(profile);
}
let p1 = fetch("/api/user/profile");
let p2 = p1.then(c1);
let p3 = p2.then(c2);

// 13.2.4 More on Promises and Errors


p1.then(null, c);
p1.catch(c);

fetch("/api/user/profile")
    .then(response => {
        if (!response.ok) {
            return null;
        }
        let type = response.headers.get("constent-type");
        if (type !== "application/json") {
            throw new type(`Expected JSON, got ${type}`);
        }
        return response.json();

    })
    .then(profile => {
        if (profile) {
            displayUserProfile(profile);
        }
        else
            displaLoggedOutProfilePage();

    }).catch(e => {
        if (e instanceof NetworkError) {
            displayErrorMessage("Check your internet connection.");
        }
        else if (e instanceof TypeError) {
            displayErrorMessage("Something is wrong with our server!");
        }
        else {
            console.error(e);
        }
    });

startAsyncOperation()
    .then(doStageTwo)
    .catch(recoverFromStageTwoError)
    .then(doStageThree)
    .then(doStageFour)
    .catch(logStageThreeAndFourErrors);


//13.2.5 Promises in Parallel

//13.2.6 Making Promises

function getJSON(url) {
    return fetch(url).then(response => response.json());
}
function getHighScore() {
    return getJSON("/api/user/profile").then(profile => profile.highScore);
}


//Promises from scratch


function wait(duration) {
    return new Promise((resolve, reject) => {
        if (duation < 0) {
            reject(new Error("Time travel not yet implemented"));
        }
        setTimeout(resolve, duration);
    })
}



