import { instances } from "/instances.js";
import { randomInteger } from "/assets/scripts/random.js";

// if we're serving locally, then `location.hostname` returns "localhost", so we need to add ":8000" as well
const rootUrl = location.hostname + (location.port ? ":" + location.port : "");

const instanceSelector = document.querySelector("#instanceSelector");
const modal = document.querySelector("dialog");

// special case where `getElementById` is required
const source = document.getElementById("source");
if (source) source.href = instances[rootUrl].source;
if (instanceSelector) {
    for (let i of Object.values(instances)) {
        const option = document.createElement("option");
        option.innerText = i.name;
        option.value = i.url;
        option.selected = i.url === "http://" + rootUrl;
        instanceSelector.appendChild(option);
    }

    instanceSelector.addEventListener("input", function () {
        const destination = instanceSelector.value;
        instanceSelector.value = "http://" + rootUrl;
        console.log(destination + location.pathname);
        location.href = destination + location.pathname;
    });
}
function downloadFile(filepath) {
    const a = document.createElement("a");
    a.href = filepath;
    a.download = "";
    a.hidden = true;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

window.edit = function () {
    const destination = instances[rootUrl].edit(location.pathname);
    if (destination) location.href = destination;
};

window.share = function () {
    try {
        navigator.share({ url: location.href });
    } catch (e) {
        navigator.clipboard.writeText(location.href);
        shareButton.innerText = "Copied!";
    }
};

window.downloadHTML = function () {
    downloadFile("index.html");
};

window.downloadJavaScript = function () {
    downloadFile("script.js");
};

window.showAI = function () {
    modal.showModal();
};

const firstPlaceholder = "Analyzing...";
const placeholders = [
    "Creating propaganda...",
    "Lobbying the government...",
    "Buying up the world's supply of RAM...",
    "Citing imaginary court cases...",
    "Bankrupting a vending machine...",
    "Denying your insurance claims...",
    "Stealing water from a local community...",
    "Training on your Facebook posts...",
];

const message = document
    .querySelector("#ai-response-content")
    .innerHTML.replaceAll("\n", "");

function addPlaceholder(placeholder) {
    const textElement = document.createElement("p");
    textElement.classList.add("fade-in", "ai-placeholder");
    textElement.textContent = placeholder;
    thought.appendChild(textElement);
}

document.querySelector("#ask-ai").addEventListener("submit", (event) => {
    event.preventDefault();
    modal.classList.add("slide-up");
    addPlaceholder(firstPlaceholder);
    let thoughtCount = 0;
    const thinker = setInterval(() => {
        const index = randomInteger(0, placeholders.length);
        addPlaceholder(placeholders[index]);
        placeholders.splice(index, 1);
        thoughtCount++;
        if (thoughtCount >= 3) {
            clearInterval(thinker);
            thought.innerHTML = "";
            const thoughtElement = document.createElement("p");
            thoughtElement.classList.add("ai-placeholder");
            thoughtElement.textContent = "> 'Thought' for 3s";
            thought.appendChild(thoughtElement);

            const responseElement = document.createElement("p");
            thought.appendChild(responseElement);

            let typingIndex = 0;
            let currentMessage = "";
            const typer = setInterval(() => {
                const nextCharacter = message[typingIndex];
                if (!nextCharacter) {
                    clearInterval(typer);
                    return;
                }

                currentMessage += nextCharacter;
                responseElement.innerHTML = currentMessage;
                typingIndex++;
            }, 20);
        }
    }, 1500);
});
