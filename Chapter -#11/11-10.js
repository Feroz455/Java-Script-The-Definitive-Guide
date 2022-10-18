//11.10 Timers\
setTimeout(() => { console.log("Ready..."); }, 2);
setTimeout(() => { console.log("set..."); }, 3);
setTimeout(() => { console.log("Go!!"); }, 1000);

let clock = setInterval(() => {
    console.clear();
    console.log(new Date().toLocaleTimeString());
}, 1000)