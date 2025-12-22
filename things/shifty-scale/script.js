import { randomInteger } from "/assets/scripts/random.js";
import { flipObject } from "/assets/scripts/object.js";
import { answers } from "./answers.js";

console.log(location.pathname);

const celsiusToDoneness = {
    46: "blue",
    52: "rare",
    55: "medium rare",
    60: "medium",
    65: "medium well",
    69: "well done",
    71: "overcooked",
};

let imageIndex;

function convertUsingLowerLimit(key, object) {
    key = Math.floor(key);
    while (true) {
        if (key < Math.min(Object.keys(object))) return undefined;
        let value = object[key];
        if (value !== undefined) {
            return value;
        } else {
            key--;
        }
    }
}

function onTemperatureInput() {
    fieldDoneness.value = convertUsingLowerLimit(
        fieldTemperature.value,
        celsiusToDoneness
    );
    if (fieldDoneness.value == "blue") {
        document.body.style.color = "blue";
    } else {
        document.body.style.color = "white";
    }
}

function onDonenessInput() {
    fieldTemperature.value =
        flipObject(celsiusToDoneness)[fieldDoneness.value] ??
        fieldTemperature.value;
    if (fieldDoneness.value == "blue") {
        document.body.style.color = "blue";
    } else {
        document.body.style.color = "white";
    }
}

function randomPhoto() {
    submit.disabled = false;
    postgame.hidden = true;
    imageIndex = randomInteger(0, 10);
    image.src = `/assets/images/shifty${imageIndex}.jpg`;
}

function onSubmit() {
    const answer = answers[imageIndex];

    submit.disabled = true;
    answerField.innerText = `Correct answer: ${answer.score}.`;
    explanationField.innerText = answer.explanation;
    postgame.hidden = false;
}

fieldDoneness.addEventListener("input", onDonenessInput);
fieldTemperature.addEventListener("input", onTemperatureInput);

// listen to buttons
submit.addEventListener("click", onSubmit);
next.addEventListener("click", randomPhoto);

randomPhoto();
