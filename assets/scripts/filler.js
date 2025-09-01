// random filler phrases
const fillers = [
    "Bad code only.",
    "Truly a thing of all time.",
    "I don't think therefore I'm not.",
    "Hatted it wast of Monet.",
    '"i\'m honored to be a pigeon" - a pigeon',
    "Some clouds are worth yelling at.",
    "Pink is famously a color.",
    "you snooze you win because sleep is an important part of a healthy lifestyle",
    "Despite the constant negative press covfefe",
    "The thirteenth T of web development is conTent.",
    "etaoin shrdlu",
    "Is that a glucose reference?",
];

export function randomPhrase() {
    return fillers[Math.floor(Math.random() * fillers.length)];
}

// weird closure shit
function createIterator(list) {
    // shuffle list
    const shuffled = list.sort(() => Math.random() - 0.5);
    let index = 0;
    return function () {
        const item = shuffled[index];
        index = (index + 1) % shuffled.length; // wrap around
        return item;
    };
}

export const fillerWord = createIterator(fillers);