export function flipObject(object) {
    const flippedObject = {};
    for (const [key, value] of Object.entries(object)) {
        flippedObject[value] = key;
    }
    return flippedObject;
}

export function substitute(string, object) {
    for (const [key, value] of Object.entries(object)) {
        string = string.replaceAll(key, value);
    }
    return string;
}
