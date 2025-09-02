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
    "Claire": {
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
                userGangster = "Claire";
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
    
    const heading = document.createElement("h1");
    heading.textContent = "Quiz complete!";
    questionSpace.appendChild(heading);

    results.style.display = "block";

    displaySpiritGangster(scores);
}

function createQuestion(details) {

    // clear the previous question
    questionSpace.innerHTML = "";
    
    // create heading
    const heading = document.createElement("h1");
    heading.textContent = details.question;
    questionSpace.appendChild(heading);

    // create container for option cards
    const container = document.createElement("div");
    container.className = "container";
    questionSpace.appendChild(container);

    // create option cards
    for (let o of details.options) {

        // create card
        const card = document.createElement("button");
        card.className = "card";

        // create image
        const image = document.createElement("img");
        image.src = o.image;
        image.className = "circle-img";
        card.appendChild(image);

        // create text
        const text = document.createElement("p");
        text.textContent = o.title;
        card.appendChild(text);

        // handle select
        card.onclick = function () {
            // loop over each score
            for (const key in o.scores) {;
                userScores[key] += o.scores[key];
            }

            // move to the next question
            questionIndex++;
            try {
                createQuestion(questions[questionIndex]);
            } catch (err) {
                // ran out of questions
                finish(userScores);
            }
        };

        // create card
        container.appendChild(card);
    }
}
window.createQuestion = createQuestion;