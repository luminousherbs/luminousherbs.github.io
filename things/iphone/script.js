console.log(location.pathname);

async function getJSON(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

function sortBy(collection, key) {
    const objects = Object.entries(collection);

    // sort by key (descending order)
    objects.sort((a, b) => b[1][key] - a[1][key]);

    return (objects);
}

function displaySorted(collection, key1, key2) {
    // clear page
    phoneContainer.innerHTML = "";

    for (let phone of sortByTwoKeys(collection, key1, key2)) {

        const phoneDiv = document.createElement("div");
        phoneDiv.dataset.phoneId = phone[0];

        const phoneHeading = document.createElement("h1");
        phoneHeading.textContent = `iPhone ${phone[0]}: ${phone[1][key1]}, ${phone[1][key2]}`;

        phoneDiv.appendChild(phoneHeading);
        phoneContainer.appendChild(phoneDiv);

    }
}

function sortByTwoKeys(collection, key1, key2) {
    const objects = Object.entries(collection);

    // sort by key (descending order)
    objects.sort(
        (a, b) => 
        (b[1][key1] + b[1][key2]) - (a[1][key1] + a[1][key2])
    );

    return (objects);
}

// get stats
let stats;
getJSON("stats.json").then((res) => {
    stats = res;
    displaySorted(stats, dropdown1.value, dropdown2.value);
})

// listen for inputs
dropdown1.addEventListener("input", function() {
    displaySorted(stats, dropdown1.value, dropdown2.value);
})

dropdown2.addEventListener("input", function() {
    displaySorted(stats, dropdown1.value, dropdown2.value);
})
