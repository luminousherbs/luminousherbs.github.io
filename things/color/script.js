console.log(location.pathname);

const colors = ["red", "green", "blue"];

// html
const numbers = {};
const sliders = {};

colors.forEach((color) => {
    numbers[color] = document.querySelector(`#number-${color}`);
    sliders[color] = document.querySelector(`#slide-${color}`);
    sliders[color].addEventListener("input", onInput);
});

function getRGBColor([red, green, blue]) {
    return `rgb(${red}, ${green}, ${blue})`;
}

function getColorChannel(channel, brightness) {
    const colorValues = [0, 0, 0];
    colorValues[colors.indexOf(channel)] = brightness;
    return getRGBColor(colorValues);
}

function onInput() {
    display.style.backgroundColor = getRGBColor([
        sliders.red.value,
        sliders.green.value,
        sliders.blue.value,
    ]);

    colors.forEach((color) => {
        localStorage[color] = sliders[color].value;
        numbers[color].innerText = sliders[color].value;
        numbers[color].style.backgroundColor = getColorChannel(
            color,
            sliders[color].value,
        );
    });
}

function loadValues() {
    display.style.backgroundColor = getRGBColor([
        localStorage.red,
        localStorage.green,
        localStorage.blue,
    ]);

    colors.forEach((color) => {
        sliders[color].value = numbers[color].textContent = localStorage[color];
        numbers[color].style.backgroundColor = getColorChannel(
            color,
            localStorage[color],
        );
    });
}

window.copy = function () {
    navigator.clipboard.writeText(display.style.backgroundColor);
};

if (localStorage.red && localStorage.green && localStorage.blue) {
    loadValues();
} else {
    onInput();
}
