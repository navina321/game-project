const finalScore = document.querySelector(".final-score");
const recentScore = localStorage.getItem("recent-score");



finalScore.innerText = recentScore;
