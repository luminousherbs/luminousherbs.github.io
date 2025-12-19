console.log(location.pathname);

const today = new Date();

function hashStringToInt(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = Math.imul(31, hash) + str.charCodeAt(i);
    }
    return hash >>> 0; // force unsigned 32-bit
}

function mulberry32(seed) {
    return function () {
        let t = (seed += 0x6d2b79f5);
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

document.querySelector("h1").textContent = Math.floor(
    mulberry32(
        hashStringToInt(
            today.toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "long",
                year: "numeric",
            })
        )
    )() * 100
);
