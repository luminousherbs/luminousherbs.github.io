import { flipObject, substitute } from "/assets/scripts/object.js";

console.log(location.pathname);

const transliterationToActual = {
    ae: "ä",
    oe: "ö",
    ue: "ü",
    ss: "ß",
    AE: "Ä",
    OE: "Ö",
    UE: "Ü",
};

function onTransliterationInput() {
    actualField.value = substitute(
        transliterationField.value,
        transliterationToActual
    );
}

function onActualInput() {
    transliterationField.value = substitute(
        actualField.value,
        flipObject(transliterationToActual)
    );
}

// listen for inputs
transliterationField.addEventListener("input", onTransliterationInput);
actualField.addEventListener("input", onActualInput);
