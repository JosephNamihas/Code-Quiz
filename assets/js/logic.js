var startButton = document.getElementById("start");
var submitButton = document.getElementById("submit"); // Prevent default needed
var timer = document.getElementById("time");
var startScreen = document.getElementById("start-screen");
var questionWrapper = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var questionChoices = document.getElementById("choices");
var secondsLeft = 60;
var questionNumber = 0
let timerInterval;
var finalScore = 0;

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
    finalScore = secondsLeft;
    clearInterval(timerInterval);
    
    // add End screen
    // Get initials of player and store with high score in scores.js
    
}

questionChoices.addEventListener("click", questionClickHandler)

function questionClickHandler(event) {
   var userAnswer = event.target.textContent;    

   if (userAnswer === quizQuestions[questionNumber].correct) {
    // Notify user is correct
    questionNumber++;
    addQuestionTitle();
   }
   else { 
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
            //TODO Function upon timer expires
            endGame();
            timer.textContent = 0;
            alert("Times up!")
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

