var highScoreList = document.getElementById("highscores");
console.log(window);
console.log(localStorage.key(1))
console.log(Object.entries(localStorage));
renderHighScores();

console.log(typeof localStorage);


function renderHighScores() {
   let li = document.createElement("li");
      for (let [key, value] of Object.entries(localStorage)) {
         li.textContent = (`${key}: ${value}`);
         highScoreList.append(li);
      }
   }
