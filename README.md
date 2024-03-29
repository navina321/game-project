# game-project

Introduction

I have used a combination of HTML, CSS/SCSS and JavaScript to create a fully functioning browser-based trivia game which has a start page, game page with 20 questions and 4 answer choices for each question, the background color for selected choice will go green if it is correct and red if incorrect. The game will get a new question, 3secs after selecting an answer. 

Mobile Display:
![mobile-game](https://user-images.githubusercontent.com/81630548/216459073-e4f1c775-c876-478c-a3d7-38f44327fbde.PNG)

Desktop Display:
![desktop-game](https://user-images.githubusercontent.com/81630548/216458762-0d444a3c-2d59-44a9-a50c-c31840f4f52d.PNG)


Deadline: 03/02/23

Timeline:

26/01/23: Planned out html and layout of game, added html elements to index.html and added basic css for viewing layout. Worked on pseudocode for javascript.

27/01/23: Researched different browser trivia games. Continued working on pseudocode, get idea of necessary variables as well as functions and event listeners required for project. Made notes of possible html & css chnages (including elements, class names and styling). 

31/01/23: Created question object to use in game. Added more 'finalised' stylling to the game. Made homepage for starting game and added home icon to game page for restarting game. Declared variables for game in javascript file.

01/02/23: Wrote out js functions -not currently complete. Added media query for desktop/tablet screen. Javascript startGame and getNextQuestion functions working. Changed questionObject do choices are in array.

02/02/23: Added the javascript for changing choice background if correct/incorrect - not currently working. Fixed apply correct/incorrect class to javascript, increase score and get next question functions working properly. Changed progress bar to show question progress. Moved unnecessary code to gitignore file. Fixed styling for the progress bar. Added endpage html.

03/02/23: Added js for endpage, linked endpage.html to main.js so that game moves to endpage after questions finish. Fixed style for links. Added highscores page.



Pseudocode/Code Planning
![HTML-CSS plan-pseudocode](https://user-images.githubusercontent.com/81630548/214893048-81f0c464-e514-4086-9bb2-fab6ce5fcbf2.jpg)
![JS Plan-Pseudocode](https://user-images.githubusercontent.com/81630548/215122718-557e532f-db28-4940-a4a4-273fb5259f68.jpg)

Sources:
Save score to local storage: https://michael-karen.medium.com/how-to-save-high-scores-in-local-storage-7860baca9d68