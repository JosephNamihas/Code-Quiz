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

var correctAnswers = ["2", "1", "1", "1", "1"];

if (quizQuestions[0].answers[0] === "String") {
    console.log("True")
}




// 4 buttons for each question. 


