console.log(location.pathname);

let allTags;
let pageTags;

function filterPages() {
    const allowedPages = new Set();
    const choice = getFilterChoice(allTags);
    for (const [key, value] of Object.entries(pageTags)) {
        for (const c of choice.keys()) {
            if (choice.get(c) && value.includes(c)) allowedPages.add(key);
        }
    }
    for (const [key, value] of Object.entries(pageTags)) {
        // special case where `getElementById` is required
        document.getElementById(`link-${key}`).hidden = !allowedPages.has(key);
    }
}
window.filterPages = filterPages;

function selectAll(id) {
    // special case where `getElementById` is required
    // this could be refactored so we get passed an element instead of an id
    const container = document.getElementById(id);
    for (let box of container.querySelectorAll("input")) box.checked = true;
    filterPages();
}
window.selectAll = selectAll;

function selectNone(id) {
    // special case where `getElementById` is required
    const container = document.getElementById(id);
    for (let box of container.querySelectorAll("input")) box.checked = false;
    filterPages();
}
window.selectNone = selectNone;

function selectSome(id) {
    // special case where `getElementById` is required
    const container = document.getElementById(id);
    // Math.random() returns a number between 0 and 1
    // so Math.random() > 0.5 is a 50% chance to be true
    for (let box of container.querySelectorAll("input")) box.checked = (Math.random() > 0.5);
    filterPages();
}
window.selectSome = selectSome;

async function getJSON(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

function getFilterChoice(filters) {
    const choices = new Map()
    for (let f of filters) {
        // special case where `getElementById` is required
        choices.set(f, document.getElementById(`filter-${f}`).checked);
    }
    return choices;
}

function getUniqueElementsFromValueArrays(obj) {
    const elements = new Set();
    for (const [key, value] of Object.entries(obj)) {
        for (const v of value) {
            elements.add(v)
        }
    }
    return elements;
}

function createFilters(filters) {
    for (let f of filters) {
        filterBox.innerHTML += `<input type="checkbox" id="filter-${f}" onclick="filterPages()" checked>`;
        filterBox.innerHTML += `<label for="filter-${f}">${f}</label><br>`;
    }
}

function createLinkLayout(tags) {
    for (const [key, value] of Object.entries(tags)) {
        list.innerHTML += `<li id="link-${key}" style="margin: 20px 0;"><a href="/things/${key}"><strong>${key}</strong></a><br>(${value.join(", ")})`;
    }
}

getJSON("/things/tags.json").then(result => {
    pageTags = result;
    createLinkLayout(result);
    allTags = getUniqueElementsFromValueArrays(result);
    createFilters(allTags);
    filterPages();
})

