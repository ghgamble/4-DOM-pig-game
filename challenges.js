/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

CHALLENGES:
- Player loses ENTIRE score if rolls 6 twice in a row, then it's the next player's turn
- Add an input field to the HTML where players can set the winning score so that they can change the predefined score of 100.
- Add another dice to the game
*/


///////////////// Lecture 1
/// How to create our fundamental game variables
/// How to generate a random number
/// How to manipulate the DOM
/// How to read from the DOM
/// How to change CSS styles

// Scores
var scores, roundScore, activePlayer, gamePlaying, lastDice;
init();

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
      if (gamePlaying) {
            // 1 - Random number
            var dice1 = Math.floor(Math.random() * 6) + 1;
            var dice2 = Math.floor(Math.random() * 6) + 1;
            // 2 - Display the result
            // var diceDOM = document.querySelector('.dice');
            document.getElementById('dice-1').style.display = 'block';
            document.getElementById('dice-2').style.display = 'block';
            document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
            document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

            if (dice1 !== 1 && dice2 !== 1) {
                  // Add score
                  roundScore += dice1 + dice2;
                  document.querySelector('#current-' + activePlayer).textContent = roundScore;
            } else {
                  nextPlayer();
            }

            // 3 - Update the round score IF the rolled number was NOT a 1
            // if (dice === 6 && lastDice === 6) {
                  // Player looses score
            //       scores[activePlayer] = 0;
            //       document.querySelector('#score-' + activePlayer).textContent = '0';
            //       nextPlayer();
            // } else if (dice !== 1) {
                  // Add score
            //       roundScore += dice;
            //       document.querySelector('#current-' + activePlayer).textContent = roundScore;
            // } else {
            //       nextPlayer();
            // }

      }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
      if (gamePlaying) {
            // Add CURRENT score to GLOBAL score
            scores[activePlayer] += roundScore;
            // Update UI (User Interface)
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            // Check if player won the game

            var input = document.querySelector('.final-score').value;
            var winningScore;

            // Undefined, 0, null or "" are COERCED to false
            // Anything else is COERCED to true

            if (input) {
                  winningScore = input;
            } else {
                  winningScore = 100;
            }

            if (scores[activePlayer] >= winningScore) {
                  document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
                  document.getElementById('dice-1').style.display = 'none';
                  document.getElementById('dice-2').style.display = 'none';
                  document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                  document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                  gamePlaying = false;
            } else {
                  nextPlayer();
            }
            // Move to next player
      }
});

document.querySelector('.btn-new').addEventListener('click', init);
// No parantheses because it would automatically call the function. Callback so that when the click happens it only runs at that point.

function nextPlayer () {
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

      document.getElementById('dice-1').style.display = 'none';
      document.getElementById('dice-2').style.display = 'none';
}

function init () {
      scores = [0,0];
      activePlayer = 0;
      roundScore = 0;
      gamePlaying = true;

      document.getElementById('dice-1').style.display = 'none';
      document.getElementById('dice-2').style.display = 'none';

      document.getElementById('score-0').textContent = '0';
      document.getElementById('score-1').textContent = '0';
      document.getElementById('current-0').textContent = '0';
      document.getElementById('current-1').textContent = '0';

      document.getElementById('name-0').textContent = 'Player 1';
      document.getElementById('name-1').textContent = 'Player 2';

      document.querySelector('.player-0-panel').classList.remove('winner');
      document.querySelector('.player-1-panel').classList.remove('winner');
      document.querySelector('.player-0-panel').classList.remove('active');
      document.querySelector('.player-1-panel').classList.remove('active');

      document.querySelector('.player-0-panel').classList.add('active');
}

///////////////// Lecture 3
/// What the ternary operator is
/// How to add, remove and toggle HTML classes


///////////////// Lecture 4
/// How to use functions to correctly apply the DRY principle
/// How to think about the game logic like a programmer
