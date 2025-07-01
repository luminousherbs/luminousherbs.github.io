import { instances } from "/instances.js";

// if we're serving locally, then `location.hostname` returns "localhost", so we need to add ":8000" as well
const rootUrl = location.hostname + (location.port ? ":" + location.port: "");

// special case where `getElementById` is required
const source = document.getElementById("source");
if (source) source.href = instances[rootUrl].source;

for (let i of Object.values(instances)) {
    const option = document.createElement("option");
    option.innerText = i.name;
    option.value = i.url;
    option.selected = (i.url === "http://" + rootUrl);
    instanceSelector.appendChild(option);
}

instanceSelector.addEventListener("input", function() {
    const destination = instanceSelector.value;
    instanceSelector.value = "http://" + rootUrl;
    console.log(destination + location.pathname);
    location.href = (destination + location.pathname
    );
})

function downloadFile(filepath) {
    const a = document.createElement("a");
    a.href = filepath;
    a.download = "";
    a.hidden = true;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}   

function edit() {
    location.href = instances[rootUrl].edit(location.pathname);
}
window.edit = edit;

function share() {
    navigator.share({url: location.href});
}
window.share = share;

function downloadHTML() {
    downloadFile("index.html");
}
window.downloadHTML = downloadHTML;

function downloadJavaScript() {
    downloadFile("script.js");
}
window.downloadJavaScript = downloadJavaScript;