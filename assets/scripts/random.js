export function randomInteger(lower, upper) {
    return Math.floor(randomFloat(lower, upper));
}

export function randomFloat(lower, upper) {
    return Math.random() * (upper - lower) + lower;
}

export function randomItem(array) {
    return array[randomInteger(0, array.length)];
}

export function randomChance(odds) {
    return Math.random() < odds;
}
