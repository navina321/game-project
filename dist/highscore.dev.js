"use strict";

var highScoresList = document.querySelector("highScore-list");
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
highScoresList.innerHTML = highScores.map(function (score) {
  return "<li class = \"high-score";
});