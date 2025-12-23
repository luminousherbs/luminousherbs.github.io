import { flipObject } from "/assets/scripts/object.js";
import { ensureHorizontalSpace } from "/assets/scripts/resize.js";

console.log(location.pathname);

const numberField = document.querySelector("#number-field");
const wordField = document.querySelector("#word-field");

const magpieConversion = {
    1: "sorrow",
    2: "joy",
    3: "a girl",
    4: "a boy",
    5: "silver",
    6: "gold",
    7: "a secret never to be told",
    8: "a wish",
    9: "a kiss",
    10: "a surprise you should be careful not to miss",
    11: "health",
    12: "wealth",
    13: "beware it's the devil himself",
};

const numberConversion = flipObject(magpieConversion);

function getPhrase(number) {
    const modulus = number % 1;

    // quick exit for integers
    if (!modulus) return magpieConversion[number] ?? "";

    const floor = Math.floor(number);
    const ceiling = Math.ceil(number);

    if (modulus >= 6 / 12 && modulus <= 7 / 12 && floor === 3) {
        return "a boy";
    }

    const lowerPhrase = magpieConversion[floor];
    const upperPhrase = magpieConversion[ceiling];

    if (!lowerPhrase || !upperPhrase) return;

    // calculate how many characters are needed from each bound phrase
    const lowerCharCount = Math.round(lowerPhrase.length * (1 - modulus));
    const upperCharCount = Math.round(upperPhrase.length * (1 - modulus));

    const lowerChars = lowerPhrase.slice(0, lowerCharCount);
    const higherChars = upperPhrase.slice(upperCharCount);

    const phrase = lowerChars + higherChars;

    return phrase ?? "";
}

function onNumberInput() {
    const number = +numberField.value;
    wordField.value = getPhrase(number);
    ensureHorizontalSpace(wordField);
}

function onWordInput() {
    numberField.value = numberConversion[wordField.value] ?? "";
    ensureHorizontalSpace(wordField);
}

// listen for inputs
numberField.addEventListener("input", onNumberInput);
wordField.addEventListener("input", onWordInput);
