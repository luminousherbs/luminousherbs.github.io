import { questions } from "questions.js";

console.log(location.pathname);

const userScores = {
  cool: 0,
  mysterious: 0,
  musical: 0,
};

for (let q of questions) {
  alert(q.question)
}
