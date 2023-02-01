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

// function for starting the game
startGame = () => {
    questionCount = 0;
    score = 0;
    questionsAvailable = [...questions];
    getNextQuestion();
}

// function to get the next question
getNextQuestion = () => {
    questionCount++
    progressText.innerHTML = `Question ${questionCount} of ${maxQuestions}`
    //find out how to increase fill of progress bar by percentage of question# out of total questions

    const questionIndex = Math.random() * questionsAvailable.length()
    currentQuestion = questionsAvailable(questionIndex)
    question.innerHTML=currentQuestion.question

    //get choices for questions

    //remove current question from available question

    acceptAnswers = true
}

//function fo accept selected choice and check if correct/incorrect

acceptSelectedChoice = () => {
    if(!acceptAnswers){
        return
    }

    acceptAnswers = false
    const selectedChoice = e.target.value

    let classToApply = selectedChoice == currentQuestion.answer 
    //toggle between correct and incorrect

    if(classToApply === "correct") {
        //add score by pointScore
    }

    //add class: classToApply to parent element of selected choice

    //remove classToApply after few seconds -use setTimeout()?

}

//add event listener for each choice to click and accept answers

choices.forEach(choice => {
    choice.addEventListener("click",acceptSelectedChoice())
})

//add to score
increaseScore = () => {
    score += pointScore
    scoreTotal.innerHTML = score
}

startGame();

