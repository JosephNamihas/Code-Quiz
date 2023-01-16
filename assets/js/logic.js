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
var playerName = "";
var finalTime = 0;
var secondsLeft = 60;
var questionNumber = 0
let timerInterval;

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

submitButton.addEventListener("click", function(){
    getPlayerName();
})


function getPlayerName() {
    var playerName =  enterInitials.value;
    console.log(playerName);
    localStorage.setItem(playerName, finalTime)
}