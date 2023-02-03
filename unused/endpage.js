// const userName = document.querySelector("#userName");
// const saveScore = document.querySelector(".save-score__button");
const finalScore = document.querySelector(".final-score");
const recentScore = localStorage.getItem("recent-score");

// const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// const maxStoredScores = 5;

finalScore.innerText = recentScore;

// userName.addEventListener("keyup", () => {
//   saveScore.disabled = !userName.value;
// });

// const saveHighScore = (e) => {
//   e.preventDefault();

//   const score = {
//     score: recentScore,
//     name: userName.innerText,
//   };
//   highScores.push(score);

//   highScores.sort((a, b) => {
//     return b.score - a.score;
//   });

//   highScores.splice(5);

//   localStorage.setItem("highScores", JSON.stringify(highScores));
//   window.location.assign("/");
// };
