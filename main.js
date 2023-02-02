import {questionObject} from "./question.js";

const question = document.querySelector(".question__text");
const choices = Array.from(
  document.querySelectorAll(".question__choices--option")
);
const progressText = document.querySelector(".progress__text");
const scoreTotal = document.querySelector(".score__total");
const progressBar = document.querySelector(".progress__bar");

let currentQuestion = {};
let acceptAnswers = true;
let score = 0;
let questionCount = 0;
let questionsAvailable = [];
let currentAnswer = "";

const pointScore = 100;
const maxQuestions = 20;

// function for starting the game
const startGame = () => {
  questionCount = 0;
  score = 0;
  questionsAvailable = [...questionObject];
  getNextQuestion();
};

// function to get the next question
const getNextQuestion = () => {
  if (questionsAvailable.length === 0 || questionCount > maxQuestions) {
    return;
  }

  questionCount++;
  progressText.innerText = `Question ${questionCount} of ${maxQuestions}`;
  progressBar.style.width = `${(questionCount/maxQuestions)*100}%`

  //find out how to increase fill of progress bar by percentage of question# out of total questions

  //keep track of which question is on
  const questionIndex = Math.floor(Math.random() * questionsAvailable.length);
  currentQuestion = questionsAvailable[questionIndex];
  currentAnswer = currentQuestion.answer;
  
  question.innerText = currentQuestion.question;

  //get choices for questions
  for (let index = 0; index < choices.length; index++) {
    choices[index].innerHTML = currentQuestion.choices[index];
  }

  //remove current question from available questions
  questionsAvailable.splice(questionIndex, 1);

  acceptAnswers = true;
};

//add event listener for each choice to click and accept answers

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptAnswers) {
      return;
    }

    if(acceptAnswers = true) {
      const selectedChoice = e.target;
     
      if(selectedChoice.innerText == currentAnswer) {
        selectedChoice.classList.add("correct")
        increaseScore(pointScore)

      }else if (selectedChoice.innerText != currentAnswer) { 
        selectedChoice.classList.add("incorrect")
      }
      setTimeout(()=>{
        selectedChoice.classList.remove("correct")
        selectedChoice.classList.remove("incorrect")
        getNextQuestion();
      },3000)
    }
    return;
  });
});

//function to add to score
const increaseScore = () => {
  score += pointScore;
  scoreTotal.innerText = score;
};

//function to trigger end game
const endGame = () => {
  if (questionsAvailable.length === 0 || questionCount > maxQuestions) {
    alert("Congratulations!!!")
    return endGame();
  }
}

startGame();
