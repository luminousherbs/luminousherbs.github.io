console.log(location.pathname);

// html elements
const frame = document.getElementById("frame");

// constants
const today = new Date();
const tenYearsAgo = adjustDate(today, -10);

Array.from(document.getElementsByClassName("selector")).forEach((button) => {
    button.addEventListener("click", () => {
        updateSource(getArchiveLink(button.dataset.link, tenYearsAgo));
    });
});

function updateSource(url) {
    frame.src = url;
}

function adjustDate(date, yearOffset) {
    const adjustedDate = new Date();
    adjustedDate.setFullYear(date.getFullYear() + yearOffset);
    return adjustedDate;
}

function formatDate(date) {
    // wizardry
    return date.toISOString().slice(0, 10).replace(/-/g, "");
}

function getArchiveLink(website, date) {
    return `https://web.archive.org/web/${formatDate(date)}/${website}`;
}

updateSource(getArchiveLink("http://www.bbc.co.uk", tenYearsAgo));

console.log(today);
console.log(tenYearsAgo);
