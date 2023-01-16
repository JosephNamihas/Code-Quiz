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

// Button to start quiz -- Starts the timer; Hides the start screen; Removes the hide state for the questions; starts the questions.

startButton.addEventListener("click", function() {

    setTimer();
        startScreen.classList.add("hide");
        questionWrapper.classList.remove("hide");
        addQuestionTitle();
        // Function to change question title and add choices

        // Hide Start Screen state
        // Show questionwrapper state
        // revise event.target?             
})
// Cycles through the array, displaying the questions. 
function addQuestionTitle() {
    
    if(quizQuestions.length === questionNumber) {
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
    questionWrapper.classList.add("hide");
    endScreen.classList.remove("hide");
}


// Handles buttons to deal with correct / incorrect answers.
questionChoices.addEventListener("click", questionClickHandler)

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

// event is referring to the function event (addEventListener - click)
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

function incorrectAnswer() {
    secondsLeft - 10;
    timer.textContent = secondsLeft + " seconds left";
}

// NOTES

//setInterval() calls a function at specified intervals
// an anonymous function is a function without a name. It needs to be assigned to a variable. You often pass anonymous functions as arguments to other functions

/* To keep high scores
localStorage.setItem(key, value);
localStorage.setItem("highscore", "var userScore");
var myNumber = localStorage.getItem ("highscore");
*/

