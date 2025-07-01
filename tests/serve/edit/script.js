const ws = new WebSocket("ws://192.168.68.119:3000");

ws.onopen = () => {
    console.log("Connected to server");
    text.focus();
};

function send(data) {
    // alert("trying to send");
    ws.send(data);
    // alert(`Client: ${data}`);
}

function moveCursorToEnd(element) {
    element.focus();
    if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
        const range = document.createRange();
        range.selectNodeContents(element);
        range.collapse(false); // move to end
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
  }
}

window.send = send;

ws.onmessage = (event) => {
    console.log("received", event.data)
    text.innerHTML = event.data;
    moveCursorToEnd(text);
};

ws.onclose = () => {
    console.log("Disconnected from server");
};


const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        if (mutation.type === "characterData") {
            console.log("Paragraph content changed:", text.innerHTML);
            send(text.innerHTML);
        }
    }
});

observer.observe(text, {
    childList: true,
    subtree: true,
    characterData: true,
});