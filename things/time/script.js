const colors = {
    on: "",
    off: "#444444",
};

let count = 0;
changeColor();

setInterval(function () {
    const binary = count.toString(2).split("");
    let index = 0;
    for (let b of binary) {
        if (!document.getElementById(`div-${index}`)) {
            console.log("making e");
            const e = document.createElement("div");
            e.id = `div-${index}`;
            e.className = "lamp";
            container.appendChild(e);
        }
        document.getElementById(`div-${index}`).style.backgroundColor = +b
            ? colors.on
            : colors.off;
        index++;
    }
    count++;
}, 250);

function changeColor() {
    colors.on = picker.value;
}
window.changeColor = changeColor;
