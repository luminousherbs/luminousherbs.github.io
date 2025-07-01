console.log(location.pathname);

function changeTo(filename) {
    stylesheet.href = `/assets/styles/${filename}.css`;
}

// listen for inputs
dropdown.addEventListener("input", function() {
    changeTo(dropdown.value);
})