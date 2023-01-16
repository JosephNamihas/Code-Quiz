
function fetchHighscore() {
   var name =  localStorage.key(0);
   score = localStorage.getItem(name);

   console.log(name, score);
}

fetchHighscore(); 
