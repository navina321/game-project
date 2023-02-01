"use strict";

var _question = require("./question.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
var maxQuestions = 20; // function for starting the game

startGame = function startGame() {
  questionCount = 0;
  score = 0;
  questionsAvailable = _toConsumableArray(questions);
  getNextQuestion();
}; // function to get the next question


getNextQuestion = function getNextQuestion() {
  questionCount++;
  progressText.innerHTML = "Question ".concat(questionCount, " of ").concat(maxQuestions); //find out how to increase fill of progress bar by percentage of question# out of total questions

  var questionIndex = Math.random() * questionsAvailable.length();
  currentQuestion = questionsAvailable(questionIndex);
  question.innerHTML = currentQuestion.question; //get choices for questions
  //remove current question from available question

  acceptAnswers = true;
}; //function fo accept selected choice and check if correct/incorrect


acceptSelectedChoice = function acceptSelectedChoice() {
  if (!acceptAnswers) {
    return;
  }

  acceptAnswers = false;
  var selectedChoice = e.target.value;
  var classToApply = selectedChoice == currentQuestion.answer; //toggle between correct and incorrect

  if (classToApply === "correct") {} //add score by pointScore
  //add class: classToApply to parent element of selected choice
  //remove classToApply after few seconds -use setTimeout()?

}; //add event listener for each choice to click and accept answers


choices.forEach(function (choice) {
  choice.addEventListener("click", acceptSelectedChoice());
}); //add to score

increaseScore = function increaseScore() {
  score += pointScore;
  scoreTotal.innerHTML = score;
};

startGame();