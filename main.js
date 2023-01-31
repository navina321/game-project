import {questionObject} from "./question.js";

const question = document.querySelector(".question__text");
const choices = Array.from(document.querySelectorAll(".question__choices--option"));
const progressText = document.querySelector(".progress__text")
const scoreTotal = document.querySelector(".score__total")
const progressBar = document.querySelector(".progress__bar")


let currentQuestion = {};
let acceptAnswers = true;
let score = 0
let questionCount = 0;
let questionsAvailable = [];
let questions = questionObject;

const pointScore = 100;
const maxQuestions = 20;
