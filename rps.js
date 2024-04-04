let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `tie`;
  }

  switch (playerSelection) {
    case 'rock':
      return (computerSelection === 'scissors') ? 'win' : 'lose';
    case 'paper':
      return (computerSelection === 'rock') ? 'win' : 'lose';
    case 'scissors':
      return (computerSelection === 'paper') ? 'win' : 'lose';
    default:
      return 'invalid';
  }
}

function play(playerSelection) {
  if (playerScore < 3 && computerScore < 3) {
    let computerSelection = getComputerChoice();
    let outputElement = document.getElementById('result');
    let result = playRound(playerSelection, computerSelection);

    if (result === 'win') {
      outputElement.textContent = `You win this round! Computer chose ${computerSelection}`;
    } else if (result === 'lose') {
      outputElement.textContent = `You lose this round! Computer chose ${computerSelection}`;
    } else if (result === 'tie') {
      outputElement.textContent = `It's a tie! Computer chose ${computerSelection}`;
    } else {
      outputElement.textContent = 'Invalid choice. Please select rock, paper, or scissors.';
    }

    if (playerScore === 3 || computerScore === 3) {
      if (playerScore === 3) {
        outputElement.textContent = 'You win the game!';
      } else {
        outputElement.textContent = 'You lose the game!';
      }
      playerScore = 0;
      computerScore = 0;
    }
  }
}
