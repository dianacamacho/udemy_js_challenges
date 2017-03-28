/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result gets added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, lastDice;
initializeGame();

document.querySelector('.btn-roll').addEventListener('click', function() {
  if (gamePlaying) {
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    console.log('dice 1: ' + dice1);
    console.log('dice 2: ' + dice2);
    
    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';

    document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
    document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

    var diceTotal = dice1 + dice2;

    if (dice1 === 6 && dice2 === 6) {
      scores[activePlayer] = 0;
      document.querySelector('#score-' + activePlayer).textContent = '0';
      nextPlayer();
    } else if (dice1 > 1 && dice2 > 1) {
      roundScore += diceTotal;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
      nextPlayer();
      document.getElementById('dice-1').style.display = 'none';
      document.getElementById('dice-2').style.display = 'none';
    }

  }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
  if (gamePlaying) {
    scores[activePlayer] += roundScore;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    
    var input = document.querySelector('#winning-score').value;
    
    if (input) {
      winningScore = input;
    } else {
      winningScore = 30;
    }
    console.log('score to win: ' + winningScore);

    if (scores[activePlayer] >= winningScore) {
      roundScore = 0;
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
      document.getElementById('dice-1').style.display = 'none';
      document.getElementById('dice-2').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    } else {
      console.log('score to win all: ' + winningScore);
      nextPlayer();
    }
  }
});

document.querySelector('.btn-new').addEventListener('click', initializeGame);

document.querySelector('#winning-score').addEventListener('input', function() {
  winningScore = parseInt(document.querySelector('#winning-score').value, 10);
  console.log('new score to win: ' + winningScore);
});

function nextPlayer() {
  roundScore = 0;
  document.querySelector('#current-' + activePlayer).textContent = roundScore;
  activePlayer === 1 ? activePlayer = 0 : activePlayer = 1;
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
}

function initializeGame() {
  gamePlaying = true;
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;
  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
}