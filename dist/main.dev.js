"use strict";

var _question = require("./question.js");

var question = document.querySelector(".question__text");
var choices = Array.from(document.querySelectorAll(".question__choices--option"));
var progressText = document.querySelector(".progress__text");
var scoreTotal = document.querySelector(".score__total");
var progressBar = document.querySelector(".progress__bar");
var currentQuestion = {};
var acceptAnswers = true;
var score = 0;
var questionCount = 0;
var questionsAvailable = [];
var questions = _question.questionObject;
var pointScore = 100;
var maxQuestions = 20;