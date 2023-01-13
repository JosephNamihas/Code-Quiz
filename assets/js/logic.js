var startButton = document.getElementById("start");
var submitButton = document.getElementById("submit"); // Prevent default needed
var timer = document.getElementById("time");
var startScreen = document.getElementById("start-screen");
var questionWrapper = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var questionChoices = document.getElementById("choices");
var secondsLeft = 60;

startButton.addEventListener("click", function() {

    setTimer();

        // Hide Start Screen state
        // Show questionwrapper state
        //revise event.target?
        
        
})

function setTimer() {
    let timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds left";

        if(secondsLeft === 0) {
            //TODO Function upon timer expires
            clearInterval(timerInterval);
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





