console.log(location.pathname);

const transliterationToActual = new Map([
    ["ae", "ä"],
    ["oe", "ö"],
    ["ss", "ß"],
    ["ue", "ü"],
    ["AE", "Ä"],
    ["OE", "Ö"],
    ["UE", "Ü"],
]);

function flipMap(map) {
    const newMap = new Map();
    for (const [key, value] of map) {
        newMap.set(value, key);
    }
    return newMap;
}

function substitute(str, map) {
    for (const [key, value] of map) {
        str = str.replaceAll(key, value);
    }
    return str;
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
        flipMap(transliterationToActual)
    );
}

// listen for inputs
transliterationField.addEventListener("input", onTransliterationInput);
actualField.addEventListener("input", onActualInput);
