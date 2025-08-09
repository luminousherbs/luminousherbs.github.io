try {
let count = 0;
setInterval(function() {
  const binary = count.toString(2).split("");
  let index = 0;
  for (let b of binary) {
    if (document.getElementById(`div-${index}`)) {
      document.getElementById(`div-${index}`).style.backgroundColor = (+b ? "yellow": "black");
    } else {
      const e = document.createElement("div");
      e.id = `div-${index}`;
      document.body.appendChild(e);
    }
  }
  count++;
}, 1)
} catch (err) {
  alert(err)
}
