console.log("Hello world!");
let forward = true;

const pageLocation = "things/cipher/";

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

// very silly solution
const shiftReference = "abcdefghijklmnopqrstuvwxyzaABCDEFGHIJKLMNOPQRSTUVWXYZA";

function shiftOne(str) {
    let newstr = "";
    for (let s of str) {
        if (shiftReference.includes(s)) {
            newstr += shiftReference[shiftReference.indexOf(s) + 1]
        } else {
            newstr += s
        }
    }
    return newstr;
}

function shiftMinusOne(str) {
    let newstr = "";
    for (let s of str) {
        if (shiftReference.includes(s)) {
            newstr += shiftReference[shiftReference.lastIndexOf(s) - 1]
        } else {
            newstr += s
        }
    }
    return newstr;
}

function caesarShift(str, shift) {
    shift %= 26; // save some time
    for (let i = 0; i < Math.abs(shift); i++) {
        str = (Math.abs(shift) === shift ? shiftOne: shiftMinusOne)(str)
    }
    return str;
}


function onSlideInput() {
    amountField.innerText = shiftField.value;
    if (forward) {
        onForwardInput()
    } else {
        onBackwardInput()
    }
}

function onForwardInput() {
    forward = true;
    encodedField.value = caesarShift(decodedField.value, +shiftField.value);
}

function onBackwardInput() {
    forward = false;
    decodedField.value = caesarShift(encodedField.value, -+shiftField.value);
}

function onLoad() {
    console.log("Page loaded!");

    // define elements
    const decodedField = document.getElementById("decodedField");
    const encodedField = document.getElementById("encodedField");
    const shiftField   = document.getElementById("shiftField"  );

    decodedField.addEventListener("input", onForwardInput);
    encodedField.addEventListener("input", onBackwardInput);
    shiftField  .addEventListener("input", onSlideInput);
}

document.addEventListener("DOMContentLoaded", onLoad);
