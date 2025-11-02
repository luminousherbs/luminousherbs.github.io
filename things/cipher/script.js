console.log(location.pathname);

let forward = true;

// very silly solution
const shiftReference = "abcdefghijklmnopqrstuvwxyzaABCDEFGHIJKLMNOPQRSTUVWXYZA";

function shiftOne(str) {
    let newstr = "";
    for (let s of str) {
        if (shiftReference.includes(s)) {
            newstr += shiftReference[shiftReference.indexOf(s) + 1];
        } else {
            newstr += s;
        }
    }
    return newstr;
}

function shiftMinusOne(str) {
    let newstr = "";
    for (let s of str) {
        if (shiftReference.includes(s)) {
            newstr += shiftReference[shiftReference.lastIndexOf(s) - 1];
        } else {
            newstr += s;
        }
    }
    return newstr;
}

function caesarShift(str, shift) {
    shift %= 26; // save some time
    for (let i = 0; i < Math.abs(shift); i++) {
        str = (Math.abs(shift) === shift ? shiftOne : shiftMinusOne)(str);
    }
    return str;
}

function onSlideInput() {
    amountField.innerText = shiftField.value;
    if (forward) {
        onForwardInput();
    } else {
        onBackwardInput();
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

// listen for input
decodedField.addEventListener("input", onForwardInput);
encodedField.addEventListener("input", onBackwardInput);
shiftField.addEventListener("input", onSlideInput);
