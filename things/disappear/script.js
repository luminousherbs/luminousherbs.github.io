console.log(location.pathname);
// "disappear" is hard to spell

let count = 0;
let clock;

function stopDeleting() {
    clearInterval(clock);
}

function button() {
    const newDiv = document.createElement("p");
    newDiv.innerText = "I'm about to be sacrificed!";
    newDiv.class = "";
    sacrificialTextContainer.appendChild(newDiv);
}
window.button = button;

function tick() {
    count++;

    // get every item on the page
    const items = document.querySelectorAll("*");

    // get the last item in the list
    let last = items[items.length - 1];

    // remove the element's parent's child
    // because javascript
    last.parentNode.removeChild(last);
}

function createClock() {
    clock = setInterval(tick, 1000);
}

const btn = document.querySelector("#creator");
createClock();
