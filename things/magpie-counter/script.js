import { flipObject } from "/assets/scripts/object.js";

console.log(location.pathname);

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

let lancashireMode = false;

function onNumberInput() {
    const value = +numberField.value;

    const floor = Math.floor(value);
    const ceiling = Math.ceil(value);
    const modulus = value % 1;

    if (modulus >= 6 / 12 && modulus <= 7 / 12 && floor === 3) {
        wordField.value = "a boy";
        return;
    }

    const lowerValue = magpieConversion[floor];
    const higherValue = magpieConversion[ceiling];

    if (!lowerValue || !higherValue) return;

    const lowerCharCount = Math.round(lowerValue.length * (1 - modulus));
    const higherCharCount = Math.round(higherValue.length * (1 - modulus));

    const lowerChars = lowerValue.slice(0, lowerCharCount);
    const higherChars = higherValue.slice(higherCharCount);

    wordField.value = lowerChars + higherChars ?? "";

    // wordField.style.width = wordField.value.length * (34/48) + 1 + "ch";
}

function onWordInput() {
    numberField.value = numberConversion[wordField.value ?? ""];
    // wordField.style.width = wordField.value.length * (34/48) + 1 + "ch";
}

function onToggle() {
    lancashireMode = !lancashireMode;
    (numberField.value ? onNumberInput : onWordInput)();
}

// listen for inputs
numberField.addEventListener("input", onNumberInput);
wordField.addEventListener("input", onWordInput);
lancashireModeField.addEventListener("input", onToggle);

// update width
// wordField.style.width = wordField.value.length + 1 + "ch";
