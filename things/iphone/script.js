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

function createCard(phoneObject, category1, category2) {
    const phoneDiv = document.createElement("a");
    phoneDiv.className = "page-card";
    phoneDiv.dataset.phoneId = phoneObject[0];
    phoneDiv.href = "javascript:void(0)"; // does nothing

    const phoneHeading = document.createElement("h2");
    phoneHeading.textContent = `iPhone ${phoneObject[0]}`;

    const stats = document.createElement("p");
    stats.textContent = (
        `${category1}: ${phoneObject[1][category1]}`
        + ", "
        +`${category2}: ${phoneObject[1][category2]}`
    )

    phoneDiv.appendChild(phoneHeading);
    phoneDiv.appendChild(stats);
    phoneContainer.appendChild(phoneDiv);
}

function displaySorted(collection, key1, key2) {
    // clear page
    phoneContainer.innerHTML = "";

    for (let phone of sortByTwoKeys(collection, key1, key2)) {

        createCard(phone, key1, key2);

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
