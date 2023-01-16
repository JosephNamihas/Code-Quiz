function getScore() {
   startButton.addEventListener("click", function() {
    enterInitials = this.textContent;
    console.log(enterInitials);
   })
}


function storeHighscore(playerName, finalTime){
    localStorage.setItem(playerName, finalTime);  
}