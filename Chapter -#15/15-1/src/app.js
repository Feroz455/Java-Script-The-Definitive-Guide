// alert("15-1");
function displayTime() {
    let clock = document.querySelector("#clock");
    let now = new Date();
    clock.textContent = now.toLocaleTimeString();
}
//Display the time rigt away
displayTime();
//And then update it every second
setInterval(displayTime, 1000);

let Name = new URL(document.URL).searchParams.get("name");
document.querySelector("h3").innerHTML = "Hello " + Name;