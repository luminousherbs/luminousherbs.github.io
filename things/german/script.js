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

function flipObject(object) {
    const flippedObject = {};
    for (const [key, value] of Object.entries(object)) {
        flippedObject[value] = key;
    }
    return flippedObject;
}

function substitute(string, object) {
    for (const [key, value] of Object.entries(object)) {
        string = string.replaceAll(key, value);
    }
    return string;
}

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
