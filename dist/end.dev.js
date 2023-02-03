"use strict";

var finalScore = document.querySelector(".final-score");
var recentScore = localStorage.getItem("recent-score");
finalScore.innerText = recentScore;