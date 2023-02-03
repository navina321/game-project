"use strict";

var userName = document.querySelector("#userName");
var saveScore = document.querySelector(".save-score__button");
var finalScore = document.querySelector(".final-score");
var recentScore = localStorage.getItem("recent-score");
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
var maxStoredScores = 5;
finalScore.innerText = recentScore;
userName.addEventListener("keyup", function () {
  saveScore.disabled = !userName.value;
});

var saveHighScore = function saveHighScore(e) {
  e.preventDefault();
  var score = {
    score: recentScore,
    name: userName.innerText
  };
  highScores.push(score);
  highScores.sort(function (a, b) {
    return b.score - a.score;
  });
  highScores.splice(5);
  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("/");
};