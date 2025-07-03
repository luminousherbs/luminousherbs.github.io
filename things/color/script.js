console.log(location.pathname);

function onInput() {
    const color = `rgb(${red.value}, ${green.value}, ${blue.value})`;
    display.style.backgroundColor = localStorage.color = color;
}

red.addEventListener("input", onInput);
green.addEventListener("input", onInput);
blue.addEventListener("input", onInput);

console.log(localStorage.color);
if (localStorage.color) {
    display.style.backgroundColor = localStorage.color
} else {
    onInput();
}