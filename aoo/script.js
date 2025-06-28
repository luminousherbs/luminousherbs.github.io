console.log(location.pathname);

let input, output;

function fixWidth(el) {
    el.style.width = el.value.length + "ch";
}

function removeConsonants(str) {
    return str.replace(/[bcdfghjklmnpqrstvwxyz]/gi, '');
}

async function getText(url) {
    const response = await fetch(url);
    const jdata = await response.json();
    return {
        author: `@${jdata.account.username}`,
        content: jdata.content.replace("<p>", "").replace("</p>", ""),
    };
}

function getApiUrl(postUrl) {
    const items = postUrl.split("/");
    const id = items[items.length - 1];
    return `https://mas.to/api/v1/statuses/${id}`;
}

async function getMastodonPost(url) {
    const apiUrl = getApiUrl(url);
    const content = await getText(apiUrl);
    return content;
}

function onInput() {
    fixWidth(input);
    getMastodonPost(input.value).then((res) => (
        output.innerHTML = `${removeConsonants(res.author)}<br>${removeConsonants(res.content)}`
    ))
}

// define elements
input = document.getElementById("input");
output = document.getElementById("output");
input.addEventListener("input", onInput);

onInput();
