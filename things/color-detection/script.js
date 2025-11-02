console.log(location.pathname);

const copyTexts = [
    "",
    "Copied!",
    "Copied again!",
    "Triple copied!",
    "Super copied!",
    "Incredibly copied!",
    "Copy rampage!",
    "Copy domination!",
    "Infinitely copied!",
];

let copyId = 0;

function getTextFromField() {
    const input = textField.value;
    let formattedInput = "";
    for (let w of input.split(" ")) {
        // <span style="color: red">red</span>
        w = `<span style="color: ${w}">${w}</span>`;

        // add back the space we lost by splitting on it
        formattedInput += w + " ";
    }
    outputField.innerHTML = formattedInput;
    copyId = 0;
    updateCopyAlert();
}

function copyHTML() {
    navigator.clipboard.writeText(outputField.innerHTML);
    copyId++;
    updateCopyAlert();
}
window.copyHTML = copyHTML;

function updateCopyAlert() {
    copyAlert.innerText = copyTexts[copyId] ?? copyTexts[copyTexts.length - 1];
}

// listen for inputs
textField.addEventListener("input", getTextFromField);
