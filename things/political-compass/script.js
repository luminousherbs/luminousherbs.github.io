// i know the code is awful
// i wrote it on my phone

console.log(location.pathname);

// data
import { questions } from "./questions.js";
const bounds = {
    mysterious: 14,
    cool: 8,
    musical: 3,
};

const userScores = {
    cool: 0,
    mysterious: 0,
    musical: 0,
};

const spiritGangsters = {
    "Lebron": {
        image: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAEVAHh7NF6E7OvNYglfgcJ-Qb8bie8CUnDUHsDdkD3X0OnupRfGZsqD4GFQ_55MNiZslHGgFOkLflpVpnba6Mpzlx6Fyn_LAsXa5EPGXGEFM5dCl8aDiELIBbZmpIeuF8M7flfbQZXevBLIx-tw1XpGp9G9GcyCXlAszW1ujDu-7n-K4blrys5PFFzETT5Q6CYxvVbyUwx6nY=w740?key=VPUA6WkkXVj6fiFSMzWvqg",
    },
    "The Ponderer": {
        image: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAcxQLggtI9qzigFdih7C-nmoWXLcjK4E6LS1Q5wxA6UEBqPtdTiy1Wr1iuxSloYckYh_8HK_1WxiTwBFPHoOUuUy7lGoVvcWPNx14DYxSB4Y4i1idhZfxxqOeLyL7bKDrUTvrwgW_WoktfElr_PV7TdzY2ySWYaOZoz9dVzfuyV7xhLv1ANGF7DKJnMro3LURCh10D7H6w5_2r=w740?key=VPUA6WkkXVj6fiFSMzWvqg",
    },
    "John": {
        image: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCy-8wfU05Q3AwZkgvE47jle4I7kI5da7Z-VKA-8oCRHtb8VsNA7uPHWbbJvCVAMYdCOp5gPzcQDe4EyVGlJ_HQFAxgnHHtqbXVw9kSnFDohn_FQr2jzq8kuVwnlNu2NQpu8SmaRlV7_IyjpNp_ctY0HmjZUsoxXH7u6-qp3nrWeG_-_THEB2rmEIMfdqsu-ms1LC_vIWdlLVrJ=w740?key=VPUA6WkkXVj6fiFSMzWvqg",
    },
    "Unnamed1": {
        image: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDYGuzF_Wbs27bqS3j4Chip7rKSOMeo1xofGA9RaoJHZdEL6F2OgcVpNzjibOQlSxTH718_ydCiN2BCNzEz3ZUQdDwXvHCkl_SQ_phdlhAoVXCn8N7-VU3sOKj3Tokt5_6tYBX69dnSIvda-NleSDzM26QBvlCWCsiQp2mhJpmG1VH7nISQJ8EsIUIZBGw1ESQ5wCrLWC7n16ym=w740?key=VPUA6WkkXVj6fiFSMzWvqg",
    },
    "Derreck": {
        image: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAXzMgwIl6mfYeddQqDHrgU9Ntp7HyYg57Dba57n4uwg7S25A93VeNjz79J1H0cne0ThdrTuo8cm-NaGm7KlM7-YP-N8hH6dLgnVdsDfPTcPpsOIcmghgpDsI-lksQK0Or69OSh9EfVtPkHLa3I5fysN7CzLgZpl76Dbo-25EmJoC0h9tYaLOMld21X-Nll3UFNXC84xYjdQAZm=w740?key=VPUA6WkkXVj6fiFSMzWvqg",
    },
    "Gregory II": {
        image: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCd6K1LxDwm-EQTe3bxcNZTIvIvJXWGwQlhkmq6sXmQ0eaJ1IjjUCOVUihdppFATSIZJB6q0oItZVMhcLS9ajNOzYMhyZrUWx-PnMmjXVs55HarKOEcQRqmnGiJdlFUS7tVXOMN3DZSRvrhC4g2lCkMB6JHKelnEib8pW9440NkJgLS5G_F7JLbJAeSjHAUBSjSBd_Oekhtadfk=w740?key=VPUA6WkkXVj6fiFSMzWvqg",
    },
    "Mark": {
        image: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCSp6zsEGV6YunD9ISLHrnIPdYjM9YoEht6G7bI-63bNcN4-R5T52G1Jdp_nSKwGOLtujCos4oNBxEX8SQcU9HNNZJRP_YTWsOg4wZnskjc8vMj1nOebMei1LTTtTGCqDrhzG8UVYrCP4pipXTMi4w59VL1hcZrbhSf0qtJLkTjLtSIFQKPUVaYlhwpaGS5hAUPdOFoiEf2tCA=w740?key=VPUA6WkkXVj6fiFSMzWvqg",
    },
    "Adolf Sax (background)": {
        image: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDvTM_Fo8EdfqibLm3GHad22498OeYdFXXi43BkmdtVPpyapktbuPdrwwrOhpJx9EI9BLNFspv1n1Tg7Wr8FP2n50HVu339Gl_6UzEBUxgI13NaPiT54eL7AcqRjxmtUkxX_Y4qgoHC-XHb8p32aK4acqIOxDIPduU0aHa74666ORZVP6v3yIlqi6kNIUEc0Zjr3CsxmK1sKKyg=w740?key=VPUA6WkkXVj6fiFSMzWvqg",
    },
    "Jack Saphone": {
        image: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAOWHrhH5yxg9vcDKm9zHDpfbFeNSdeD1MhY_PHqPWCgE99-d8hDvcEFFPRcI846rzanA4_pzW36uPVlBm7KaeBAEmRC8fNDNNT3T-NH9l5oe3uKg_VOix0Pg6puIHEjBsiLP-zqc31SzGWneNOaulEmkJLy3iGYl8WqGFGXLWX0twjvs9n6N-8VsovoN9-cknTXCfsr3lyZFrO=w740?key=VPUA6WkkXVj6fiFSMzWvqg",
    },
    "Clumbus": {
        image: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAwGc0A3rLHNGdzF2dYSjXru5ndGUDh0way2PObN8DdsjaEt2vw2kucSvSt8HzlBkCSK9YHA43yn5P_hTY9D2RMJ91W8ScEGrC3LHxR5aQSB6LJh1oV4TL163Dvf2ReEpIxyz1x1lvF_7qK5_LhgH5IgL_ayn2MYIf_nbfRflH68O9ChBQy0vpcOXRp1ss8aXu7cI6AHcsh_MYV=w740?key=VPUA6WkkXVj6fiFSMzWvqg",
    },
    "Dave from down the pub": {
        image: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAAL_j5uUDaU39gOklRerPX7PIw6rof2zEwayG_qVt8goW_A-Td9aKTnDzeRnm9ze608zIRzwoSxoA90o2154tf5N9iEfeUBczXVTRtw_ySMVewx84JyAM6n2mXM7NVLLazh2x9qlVj1PAVO8w4RgB7mJ1HG9rVcbAYCNTIDtNT3RjmRN1k0AZnli712ia6U8V8Gn0UK8jaNxK-=w740?key=VPUA6WkkXVj6fiFSMzWvqg",
    },
    "Unnamed2": {
        image: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDFBeMR7coG1_zBCV2UvT4S4PeGsNemFYqEFgtJI8ZJtPNH-OSb6N2t6CKbkDXzKf6VmNEASwknNJDQrZfRLltbyoBJ78MV8zwyozajOG3JpJ36ykV3YQBoJYPTAzRp39Oq01kQgEiuFR7dPAbLsaX-6eKEkXbTlIXQeyQiVaDlfEo9Bm7yGJHAv2t3y26_ykHvPPbIpNAYB6A=w740?key=VPUA6WkkXVj6fiFSMzWvqg",
    },
};

let questionIndex = 0;


// html elements
questionSpace; indicator; results; startButton;
const rule = document.querySelectorAll("hr")[1];

// functions
function start() {
    startButton.remove();
    createQuestion(questions[0]);
}
window.start = start;

function getSpiritGangster(scores) {
    // for (let name in spiritGangsters) {
    //     console.log(name);
    //     console.log(spiritGangsters[name].image);
    // }
    let userGangster;
    if (scores.musical > 0) {
        if (scores.cool > 0) {
            if (scores.mysterious > bounds.mysterious / 3) {
                // cool mysterious and musical
                userGangster = "Mark";
            } else if (scores.mysterious < -bounds.mysterious / 3) {
                // cool sterious and musical
                userGangster = "Adolf Sax";
            } else {
                // cool and musical
                userGangster = "Jack Saphone";
            }
        } else {
            if (scores.mysterious > bounds.mysterious / 3) {
                // uncool mysterious and musical
                userGangster = "Clumbus";
            } else if (scores.mysterious < -bounds.mysterious / 3) {
                // uncool sterious and musical
                userGangster = "Dave from down the pub";
            } else {
                // uncool and musical
                userGangster = "Unnamed2";
            }
        }
    } else {
        if (scores.cool > 0) {
            if (scores.mysterious > bounds.mysterious / 3) {
                // cool and mysterious
                userGangster = "Lebron";
            } else if (scores.mysterious < -bounds.mysterious / 3) {
                // cool and sterious
                userGangster = "The Ponderer";
            } else {
                // cool
                userGangster = "John";
            }
        } else {
            if (scores.mysterious > bounds.mysterious / 3) {
                // uncool and mysterious
                userGangster = "Unnamed1";
            } else if (scores.mysterious < -bounds.mysterious / 3) {
                // uncool and sterious
                userGangster = "Derreck";
            } else {
                // uncool
                userGangster = "Gregory II";
            }
        }
    }


    return {
        name: userGangster,
        image: spiritGangsters[userGangster].image,
    };
}

function displaySpiritGangster(scores) {
    const gangster = getSpiritGangster(scores);
    const heading = document.createElement("h2");
    heading.textContent = `Your spirit gangster is ${gangster.name}.`;
    const image = document.createElement("img");
    image.src = gangster.image;
    image.style.width = "100%";
    results.appendChild(heading);
    results.appendChild(image);
}

function finish(scores) {
    questionSpace.innerHTML = "";
    // magic formulae
    // indicator.style.top = `${(scores.cool - 12) * (100 / -24)}%`;
    // indicator.style.left = `${(scores.mysterious + 14) * (100 / 28)}%`;
    indicator.style.top = `${ 50 * (-scores.cool + bounds.cool) / bounds.cool }%`;
    indicator.style.left = `${ 50 * (scores.mysterious + bounds.mysterious) / bounds.mysterious }%`;
    musicalField.textContent = `${ Math.ceil(50 * (scores.musical + bounds.musical) / bounds.musical) }%`
    
    const heading = document.createElement("h2");
    heading.textContent = "Quiz complete!";
    questionSpace.appendChild(heading);

    results.style.display = "block";

    displaySpiritGangster(scores);
}

function createQuestion(details) {
    // alert("create question")
    // alert(questionSpace)
    // delete the container to clear the previous question
    questionSpace.innerHTML = "";
    // alert("removed")
    const heading = document.createElement("h2");
    heading.textContent = details.question;
    questionSpace.appendChild(heading);
    for (let o of details.options) {
        // alert("looping option")
        const card = document.createElement("button");
        const image = document.createElement("img");
        image.src = o.image;
        card.appendChild(image);
        card.innerText += o.title;
        card.onclick = function () {
            // alert("clicked")
            for (const key in o.scores) {
                const value = o.scores[key];
                // alert("looping " + key + " " + value);
                userScores[key] += value;
                // alert(userScores[key])
            }
            questionIndex++;
            // alert("incremented")
            try {
                // alert("inside try")
                createQuestion(questions[questionIndex]);
            } catch (err) {
                // ran out of qiestions
                finish(userScores);
            }
            // alert("cool " + userScores.cool);
            // alert("mysterious " + userScores.mysterious);
            // alert("musical " + userScores.musical);
        };
        questionSpace.appendChild(card);
    }
    // alert("appending")
    // insertBefore(questionSpace, rule);
    // alert("appended")
}
window.createQuestion = createQuestion;