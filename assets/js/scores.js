var highScoreList = document.getElementById("highscores");
renderHighScores();
function renderHighScores() {

  {
      let li = document.createElement("li"); 
      li.textContent = Object.entries(localStorage);
      highScoreList.append(li);
    }
}

var clearScores = document.getElementById("clear");

clearScores.addEventListener("click", function() {
   localStorage.clear();
      
})



