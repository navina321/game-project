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
};