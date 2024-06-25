//create score keeping using objects 
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

/*
if(!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  }
};
*/

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';
  

  if (randomNumber >= 0 && randomNumber < 1/3) { 
    computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}



function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';
  
  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose';
    } else if (computerMove === 'paper') {
      result = 'You win';
    } else if (computerMove === 'scissors') {
      result = 'It\'s a Tie';
    }
  } 
  else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win';
    } else if (computerMove === 'paper') {
      result = 'It\'s a Tie';
    } else if (computerMove === 'scissors') {
      result = 'You lose';
    }
  } 
  else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
        result = 'It\'s a Tie';
      } else if (computerMove === 'paper') {
        result = 'You lose';
      } else if (computerMove === 'scissors') {
        result = 'You win';
      } 
  }

  //This code update the score
  if (result === 'You win') 
    score.wins++; 
  else if (result === 'You lose')
    score.losses++;
  else if (result === 'It\'s a Tie')
    score.ties++;
  
  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves')
    .innerHTML = `You
<img src="/Completed Projects/rock paper scissors/images/${playerMove}-emoji.png" class="move-icon">
<img src="/Completed Projects/rock paper scissors/images/${computerMove}-emoji.png" class="move-icon">
Computer`;
} 
function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
  }

function updateScoreElement() {
    document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }
