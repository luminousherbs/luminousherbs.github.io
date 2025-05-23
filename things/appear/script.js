console.log("Hello world!");

const pageLocation = "things/appear/";

function downloadFile(filepath) {
    const a = document.createElement("a");
    a.href = filepath;
    a.download = "";
    a.hidden = true;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function edit() {
    window.location.href = `https://github.com/luminousherbs/luminousherbs.github.io/tree/main/${pageLocation}`;
}

function share() {
    navigator.share({url: window.location.href});
}

function downloadHTML() {
    downloadFile("./index.html");
}

function downloadJavaScript() {
    downloadFile("./script.js");
}

let index = 0;
let words;
let intervalSpeed = 200;
let intervalId;

async function getText(url) {
    const response = await fetch(url);
    const data = await response.text();
    return data;
}

// i wanted to include a speed slider but html sucks :(
// function slide() {
//     intervalSpeed = slider.value;
//     clearInterval(intervalId);
//     setTimeout(function(){}, intervalSpeed);
//     intervalId = startRepeat(intervalSpeed);
// }

function startRepeat(speed) {
    let interval = setInterval(() => {addWord(main, interval)}, speed);
}

function addWord(container, interval) {
    if (index >= words.length) {
        clearInterval(interval);
        return;
    }
    container.innerHTML += "&#32;" + words[index];

    // slider = document.getElementById("slider")
    // if (slider) {
    //     slider.addEventListener("input", slide)
    // }

    index++;
}

function onLoad() {
    console.log("Page loaded!");
    getText("words.txt").then((result) => {
        words = result.split("\n");
    })

    // define elements
    const main = document.getElementById("main");
    intervalId = startRepeat(intervalSpeed)
}

document.addEventListener("DOMContentLoaded", onLoad);