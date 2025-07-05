console.log(location.pathname);

// this code is so bad, don't even try to fix it

function onInput() {
    saveValues();
    display.style.backgroundColor = `rgb(${slideRed.value}, ${slideGreen.value}, ${slideBlue.value})`;

    numberRed.innerText = slideRed.value;
    numberGreen.innerText = slideGreen.value;
    numberBlue.innerText = slideBlue.value;

    numberRed.style.backgroundColor = `rgb(${slideRed.value}, 0, 0)`;
    numberGreen.style.backgroundColor = `rgb(0, ${slideGreen.value}, 0)`;
    numberBlue.style.backgroundColor = `rgb(0, 0, ${slideBlue.value})`;
}

function saveValues() {
    localStorage.red = slideRed.value;
    localStorage.green = slideGreen.value;
    localStorage.blue = slideBlue.value;
}

function loadValues() {
    display.style.backgroundColor = `rgb(${localStorage.red}, ${localStorage.green}, ${localStorage.blue})`
    slideRed.value = numberRed.innerText = localStorage.red;
    slideGreen.value = numberGreen.innerText = localStorage.green;
    slideBlue.value = numberBlue.innerText = localStorage.blue;

    numberRed.style.backgroundColor = `rgb(${localStorage.red}, 0, 0)`;
    numberGreen.style.backgroundColor = `rgb(0, ${localStorage.green}, 0)`;
    numberBlue.style.backgroundColor = `rgb(0, 0, ${localStorage.blue})`;
}

function copy() {
    navigator.clipboard.writeText(display.style.backgroundColor)
}
window.copy = copy;

slideRed.addEventListener("input", onInput);
slideGreen.addEventListener("input", onInput);
slideBlue.addEventListener("input", onInput);

if (localStorage.red && localStorage.green && localStorage.blue) {
    loadValues();
} else {
    onInput();
}