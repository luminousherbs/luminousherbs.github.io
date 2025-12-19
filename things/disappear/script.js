console.log(location.pathname);
// "disappear" is hard to spell

const items = Array.from(document.querySelectorAll("*"));

function stopDeleting() {
    clearInterval(clock);
}
window.stopDeleting = stopDeleting;

function button() {
    const newDiv = document.createElement("p");
    newDiv.innerText = "I'm about to be sacrificed!";
    newDiv.class = "";
    sacrificialTextContainer.appendChild(newDiv);
}
window.button = button;

function tick() {
    const last = items[items.length - 1];

    // remove the element's parent's child
    // because javascript
    last.parentNode.removeChild(last);
    items.pop();
}

let clock = setInterval(tick, 1000);
