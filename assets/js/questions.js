// Array of Objects 

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
        answers: ["A data type", "Recyclable snippets of code ", "A math operator", "A 3rd party API"],
        correct: "Recyclable snippets of code"
    },

     {
        question: "The 'D' in DOM stands for what?",
        answers: ["Data", "Declaration", "Document", "Database"],
        correct: "Document"
    },

]

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

function playAudio(url) {
    new Audio(url).play();
  }
