/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

///////////////// Lecture 1
/// How to create our fundamental game variables
/// How to generate a random number
/// How to manipulate the DOM
/// How to read from the DOM
/// How to change CSS styles

// Scores
var scores, roundScores, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

// dice = Math.floor(Math.random() * 6) + 1;

// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// var x = document.querySelector('#score-0').textContent;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

///////////////// Lecture 2
/// How to set up an event handler
/// What a callback function is
/// What an anonymous function is
/// Another way to select items by ID
/// How to change the image in an <img> element

// Callback function, function that we pass into another as an argument
// This is an external function, or use it within the other function as an anonymous function, limiting because it only works for that one instance. Not reusable.
// function btn() {
//       Do something here
// };
// btn();

document.querySelector('.btn-roll').addEventListener('click', function() {
      // 1 - Random number
      var dice = Math.floor(Math.random() * 6) + 1;

      // 2 - Display the result
      var diceDOM = document.querySelector('.dice');
      diceDOM.style.display = 'block';
      diceDOM.src = 'dice-' + dice + '.png';

      // 3 - Update the round score IF the rolled number was NOT a 1
      if (dice !== 1) {
            // Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
      } else {
            // Move to next player
            // Ternary operator, easier to write than if/else
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;

            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';

            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');

            // document.querySelector('.player-0-panel').classList.remove('active');
            // document.querySelector('.player-1-panel').classList.add('active');

            document.querySelector('.dice').style.display = 'none';
      }
});

///////////////// Lecture 1
/// What the ternary operator is
/// How to add, remove and toggle HTML classes
