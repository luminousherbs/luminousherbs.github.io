import { flipObject } from "/assets/scripts/object.js";

console.log(location.pathname);

const wordToMath = {
    by: "",
    to: "",
    the: "",
    of: "",
    a: "",
    "": "",

    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
    ten: "10",
    eleven: "11",
    twelve: "12",
    thirteen: "13",
    fifteen: "15",
    eighteen: "18",
    twenty: "20",
    thirty: "30",
    forty: "40",
    fifty: "50",
    hundred: "100",

    half: "(1/2)",
    third: "(1/3)",
    quarter: "(1/4)",
    fifth: "(1/5)",
    eighth: "(1/8)",
    ninth: "(1/9)",
    twelfth: "(1/12)",

    and: "+",
    add: "+",
    plus: "+",
    negative: "-",
    minus: "-",
    subtract: "-",
    times: "*",
    double: "2 *",
    triple: "3 *",
    doubled: "* 2",
    tripled: "* 3",
    divided: "/",
    divide: "/",
    power: "**",
    "to the power of": "**",
    squared: "** 2",
    cubed: "** 3",
    percent: "/ 100",
};

function convertWordToMath(words) {
    let newWords = [];
    for (let w of words) {
        w = w.toLowerCase();

        // skip empty strings
        if (w === "") {
            newWords.push("");

            // if the word is in the map,
        } else if (wordToMath[w] !== undefined) {
            // push its entry.
            newWords.push(wordToMath[w]);

            // if it has a dash,
        } else if (w.includes("-")) {
            // break it into parts and add them.
            const parts = w.split("-");
            newWords.push(
                +convertWordToMath([parts[0]])[0] +
                    +convertWordToMath([parts[1]])[0] ?? "?",
            );

            // if it ends in teen,
        } else if (w.includes("teen")) {
            // get the entry for the base word and add ten.
            newWords.push(
                "" +
                    (+convertWordToMath([w.replace("teen", "")])[0] - -10 ??
                        "?"),
            );

            // if it ends in ty,
        } else if (w.includes("ty")) {
            // get the entry for the base word and multiply by ten.
            newWords.push(
                "" + (+convertWordToMath([w.replace("ty", "")])[0] * 10 ?? "?"),
            );

            // otherwise,
        } else {
            // fallback to "?".
            newWords.push("?");
        }
    }
    return newWords;
}

function convertMathToWord(math) {
    let words = [];
    const map = flipObject(wordToMath);
    for (let m of math) {
        // if the math is in the map,
        if (map["" + m]) {
            // push its entry.
            words.push(map["" + m]);

            // if it's more than 20 and doesn't divide by 10,
        } else if (+m > 20 && +m % 10 !== 0) {
            // break it into parts and hyphenate them.
            words.push(
                convertMathToWord(["" + Math.floor(m / 10) * 10])[0] +
                    "-" +
                    convertMathToWord(["" + (m % 10)])[0],
            );

            // if it's between 13 and 19,
        } else if (+m >= 13 && +m <= 19) {
            // get the entry for the number minus ten and join "teen".
            words.push(map["" + (m - 10)] + "teen");

            // if it divides by 10,
        } else if (m % 10 === 0) {
            // get the entry for the base number and join "ty".
            words.push(convertMathToWord(["" + m / 10])[0] + "ty");

            // otherwise,
        } else {
            // fallback to "?".
            words.push("?");
        }
    }
    words = words.map((x) => (x === "zeroty" ? "" : x));
    return words;
}

function onWordInput() {
    const wordValue = wordField.value.split(" ");
    const mathValue = convertWordToMath(wordValue).join(" ");
    mathField.value = mathValue;

    try {
        const answerValue = eval(mathValue);
        answerField.value = answerValue;
    } catch (err) {
        answerField.value = err.message;
    }
}

function onMathInput() {
    const mathValue = mathField.value.split(" ");
    const wordValue = convertMathToWord(mathValue).join(" ");
    wordField.value = wordValue;

    try {
        const answerValue = eval(mathValue.join(" "));
        answerField.value = answerValue;
    } catch (err) {
        // ignore errors
    }
}

function onAnswerInput() {
    const answerValue = answerField.value === "" ? NaN : answerField.value;

    const mathValue = `${answerValue - 1} + 1`;
    mathField.value = isNaN(+answerValue) ? "" : mathValue;

    const wordValue = convertMathToWord(
        isNaN(+answerValue) ? [] : mathValue.split(" "),
    ).join(" ");
    wordField.value = wordValue;
}

// listen for inputs
wordField.addEventListener("input", onWordInput);
mathField.addEventListener("input", onMathInput);
answerField.addEventListener("input", onAnswerInput);
