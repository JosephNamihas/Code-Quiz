var startButton = document.getElementById("start");
var submitButton = document.getElementById("submit"); // Prevent default needed
var timer = document.getElementById("time");
var startScreen = document.getElementById("start-screen");
var endScreen = document.getElementById("end-screen");
var questionWrapper = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var questionChoices = document.getElementById("choices");
var finalScore = document.getElementById("final-score")
var enterInitials = document.getElementById("initials");
var finalTime = 0;
var secondsLeft = 60;
var questionNumber = 0
let timerInterval;

/*var correctAudio = new Audio()
audio.play();

var incorrectAudio = new Audio();
audio.play();*/

questionChoices.addEventListener("click", questionClickHandler)

function setTimer() {
    timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds left";

        if(secondsLeft === 0) {
            
            timer.textContent = 0;
            endGame();
        }
    }, 1000)
}

startButton.addEventListener("click", function() {

    setTimer();
        startScreen.classList.add("hide");
        questionWrapper.classList.remove("hide");
        addQuestionTitle();           
})

questionChoices.addEventListener("click", questionClickHandler)

function addQuestionTitle() {
    
    if(quizQuestions.length === questionNumber) {
        questionWrapper.classList.add("hide");
        return endGame();
    }

    questionTitle.textContent = quizQuestions[questionNumber].question;
    questionChoices.innerHTML = "";

    for(var i = 0; i < quizQuestions[questionNumber].answers.length; i++) {
        var btn = document.createElement("button");
        btn.textContent = quizQuestions[questionNumber].answers[i];
        questionChoices.append(btn);
    }
}

function endGame() {
    finalTime = secondsLeft;
    clearInterval(timerInterval);
    endScreen.classList.remove("hide");
}

// Handles buttons to deal with correct / incorrect answers.

function questionClickHandler(event) {
   var userAnswer = event.target.textContent;    

   if (userAnswer === quizQuestions[questionNumber].correct) {
    // Notify user is correct
    // play correct.wav
    questionNumber++;
    addQuestionTitle();
   }
   else { 
    //play incorrect.wav
    secondsLeft -= 5;
    questionNumber++;
    addQuestionTitle();
   }
}


