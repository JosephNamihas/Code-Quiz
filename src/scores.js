var highScoreList = document.getElementById("highscores");

// Returns the localStorage elements
renderHighScores();
function renderHighScores() {

  {
      let li = document.createElement("li"); 
      li.textContent = Object.entries(localStorage);
      highScoreList.append(li);
    }
}

// button to clear scores from localStorage upon refresh
var clearScores = document.getElementById("clear");

clearScores.addEventListener("click", function() {
   localStorage.clear();
      
})



