console.log(location.pathname);

function onSize() {
    frame.width = widthField.value;
    frame.height = heightField.value;
}

function onSource() {
    frame.src = urlField.value;
}

// listen for inputs
urlField.addEventListener("input", onSource);
widthField.addEventListener("input", onSize);
heightField.addEventListener("input", onSize);

// set starting width based on available width
widthField.value = innerWidth * 0.7;
heightField.value = innerHeight * 0.7;

// trigger input
onSource();
onSize();
