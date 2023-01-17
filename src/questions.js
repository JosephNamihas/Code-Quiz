// Array of Objects 
// 5 Objects to return the question, answers and correct answer.

var quizQuestions = [
     {
        question: "Which one of these is NOT a valid data type in JavaScript?",
        answers: ["String", "Boolean", "Float", "Number"],
        correct: "Float"
    },

     {
        question: "Which operator is used for 'Greater Than'? ",
        answers: ["=", ">", "!", "<"],
        correct: ">"
    },

     {
        question: "How do you declare a variable in JavaScript?",
        answers: ["variable Number", "v Number", "var number", "number = var"],
        correct: "var number"
    },

     {
        question: "What is function?",
        answers: ["A data type", "Recyclable snippets of code", "A math operator", "A 3rd party API"],
        correct: "Recyclable snippets of code"
    },

     {
        question: "The 'D' in DOM stands for what?",
        answers: ["Data", "Declaration", "Document", "Database"],
        correct: "Document"
    },

]

// Renders the question and choices to the screen.
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

// The function called when the game is at the end. If the player runs out of time or completes the quiz
function endGame() {
    finalTime = secondsLeft;
    clearInterval(timerInterval);
    endScreen.classList.remove("hide");
    finalScore.textContent = finalTime;
}

// Handles buttons to deal with correct / incorrect answers.
// Provides visual and audio feedback

function questionClickHandler(event) {
   var userAnswer = event.target.textContent;    

   if (userAnswer === quizQuestions[questionNumber].correct) {
    questionNumber++;
    feedback.classList.remove("hide");
    feedback.textContent = "Correct!"; // Change feedback
    var audio = new Audio('sfx/correct.wav');
    audio.play();
    addQuestionTitle();
   }

   else { 
    secondsLeft -= 5;
    feedback.classList.remove("hide");
    feedback.textContent = "Incorrect!";
    var audio = new Audio('sfx/incorrect.wav');
    audio.play();
    questionNumber++;
    addQuestionTitle();
   }
}


