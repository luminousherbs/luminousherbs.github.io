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
        image: "/assets/images/lebron.jpg"
    },
    "The Ponderer": {
        image: "/assets/images/the-ponderer.jpg"
    },
    "John": {
        image: "/assets/images/john.jpg"
    },
    "Craig": {
        image: "/assets/images/craig.jpg"
    },
    "Derreck": {
        image: "/assets/images/derreck.jpg"
    },
    "Gregory II": {
        image: "/assets/images/gregory-ii.jpg"
    },
    "Mark": {
        image: "/assets/images/mark.jpg",
    },
    "Adolf Sax": {
        image: "/assets/images/adolf-sax.jpg"
    },
    "Jack Saphone": {
        image: "/assets/images/jack-saphone.jpg"
    },
    "Clumbus": {
        image: "/assets/images/clumbus.jpg"
    },
    "Dave from down the pub": {
        image: "/assets/images/dave.jpg"
    },
    "Unnamed2": {
        image: "/assets/images/unnamed2.jpg"
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
                userGangster = "Craig";
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