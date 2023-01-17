# Code-Quiz
## Web API Code Quiz
### Description

I was tasked by the client to produce a quiz using HTML, CSS and JavaScript

It had to include the following:

- A non-specific number of questions (I opted for five)
- A timer that deducted seconds off when an answer was incorrect
- Feedback when the question was right or wrong (visual and audio)
- Score to be presented at the end
- A highscore leaderboard

I really enjoyed this challenge and while I was stuck on a few elements, I believe I produced a respectable finished quiz.
The quiz is fully functional and feature rich with no errors to speak of (There are a few bugs at the moment). It provides the user with five questions, sequentially delivered by making use of the Document Object Model. 
Upon completion of the quiz, the user has a chance to add their initials and submit to the highscore board.

## Challenges Faced
### Initital Strategy

Upon my first glance at the challenge, I thought I could simply set the HTML Div elements to hide / unhide depending on the stage of the quiz. After speaking to fellow bootcampers and getting involved in the office hours pseudocode-a-thon, I decided to go with an object model. The object would contain the questions, answers and if it was correct or not. 
I could then loop through the question objects and only have to worry about the main question div (to hide the start screen, and to show the end screen).

Collaboration in this sense is important. I like to believe I provided some ideas and was able to get valuable information back from my peers. I will build on this in future challenges.

### Highscore
This was quite frustrating as my initial theory of simply loading to localStorage and then getting the values back when needed didn't turn out to be ideal. As it comes back as an object, it was difficult to tally up the two values I wanted. Unfortuantly, this was the only part of the challenge that let me down. The highscore table is working technically, but not in the manner I would have liked. It logs the inititals and the score, but fails to load them descending order and in a list format. 

I felt like I would have had to rewrite a lot of my functions to come up with a new soloution. If I had more time, I would probably investigate the JSON.Stringify / Parse methods. Play around with them to see what I could develop.

### For Next Time
I was happy with a lot of my code. Time is definitley the main enemy with these assignments. I feel like a lot of my learning comes outside of the main lectures. I need to play around with the new concepts before they fully sink in. I want to dedicate a bit more time to this over the rest of the bootcamp to avoid deadline pressure and worrying about if I had understood something or not.

## Installation
Run the quiz by following the GitGub Pages link: https://josephnamihas.github.io/Code-Quiz/

## Useage

![Question One](/readme-images/question1.PNG)
![Question Two - Feedback](/readme-images/question2%20-%20feedback.PNG)
![Quiz Complete!](/readme-images/quizcomplete.PNG)
![Highscores](/readme-images/highscores.PNG)

## Credits

Pod 5 in the Bootcamp and specifically:
Russell Coleman - ruscoleman@gmail.com 
Sonia Denikiewicz - sonia_deni@hotmail.com

For brainstorming ideas and helping to get this project up and running

## License
MIT License

Copyright (c) [2023] [Joseph Namihas]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.