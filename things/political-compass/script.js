// alert("13:05")
// i know the code is awful
// i wrote it on my phone

console.log(location.pathname);

import { questions } from "./questions.js";
const bounds = {
    mysterious: 14,
    cool: 8,
    musical: 3,
};

// html elements
questionSpace; indicator; results;
const rule = document.querySelectorAll("hr")[1];

function finish(scores) {
    questionSpace.innerHTML = "";
    // magic formulae
    // indicator.style.top = `${(scores.cool - 12) * (100 / -24)}%`;
    // indicator.style.left = `${(scores.mysterious + 14) * (100 / 28)}%`;
    indicator.style.top = `${ 50 * (-scores.cool + bounds.cool) / bounds.cool }%`;
    indicator.style.left = `${ 50 * (scores.mysterious + bounds.mysterious) / bounds.mysterious }%`;
    
    const heading = document.createElement("h2");
    heading.textContent = "Quiz complete!";
    questionSpace.appendChild(heading);

    results.style.display = "block";
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

const userScores = {
    cool: 0,
    mysterious: 0,
    musical: 0,
};

let questionIndex = 0;
createQuestion(questions[questionIndex]);
