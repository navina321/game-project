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
var currentAnswer = ""; //let questions = questionObject;

var pointScore = 100;
var maxQuestions = 20; // function for starting the game

var startGame = function startGame() {
  questionCount = 0;
  score = 0;
  questionsAvailable = _toConsumableArray(_question.questionObject);
  getNextQuestion();
}; // function to get the next question


var getNextQuestion = function getNextQuestion() {
  if (questionsAvailable.length === 0 || questionCount > maxQuestions) {
    return;
  }

  questionCount++;
  progressText.innerText = "Question ".concat(questionCount, " of ").concat(maxQuestions); //find out how to increase fill of progress bar by percentage of question# out of total questions
  //keep track of which question is on

  var questionIndex = Math.floor(Math.random() * questionsAvailable.length);
  currentQuestion = questionsAvailable[questionIndex];
  currentAnswer = currentQuestion.answer; // console.log(currentAnswer);

  question.innerText = currentQuestion.question; //get choices for questions

  for (var index = 0; index < choices.length; index++) {
    // console.log(currentQuestion);
    choices[index].innerHTML = currentQuestion.choices[index];
  } //remove current question from available questions


  questionsAvailable.splice(questionIndex, 1); // console.log(questionsAvailable);

  acceptAnswers = true;
}; //add event listener for each choice to click and accept answers


choices.forEach(function (choice) {
  choice.addEventListener("click", function (e) {
    if (!acceptAnswers) {
      return;
    } // acceptAnswers = false;
    // const selectedChoice = e.target.value;
    // const selectedAnswer = selectedChoice;
    // //accept selected choice and check if correct/incorrect
    // let classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
    // if (classToApply === "correct") {
    //   increaseScore(pointScore);
    // }
    // //add class: classToApply to selected choice
    // selectedChoice.parentElement.classList.add(classToApply)


    if (acceptAnswers = true) {
      var selectedChoice = e.target;
      var selectedAnswer = selectedChoice;

      if (selectedAnswer === currentQuestion.answer) {
        selectedChoice.classList.add("correct");
        increaseScore(pointScore);
      } else if (selectedAnswer != currentQuestion.answer) {
        selectedChoice.classList.add("incorrect");
      }

      return getNextQuestion();
    } // setTimeout(()=>{getNextQuestion()},3000)
    //remove classToApply after few seconds -use setTimeout()?
    // setTimeout(()=>{
    //   selectedChoice.classList.remove(classToApply)
    //   getNextQuestion()
    // },3000)

  });
}); //add to score

var increaseScore = function increaseScore() {
  score += pointScore;
  scoreTotal.innerText = score;
};

startGame();