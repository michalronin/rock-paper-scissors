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

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (i = 0; i < 5; i++) {
    let computerChoice = getComputerChoice();
    let playerChoice = prompt('Enter your choice: ').toLowerCase();
    let result = playRound(playerChoice, computerChoice);

    if (result === 'win') {
      playerScore++;
      console.log(`You win this round! Score is Player: ${playerScore}, Computer: ${computerScore}`);
    } else if (result === 'lose') {
      computerScore++;
      console.log(`You lose this round! Score is Player: ${playerScore}, Computer: ${computerScore}`);
    } else if (result === 'tie') {
      console.log(`It's a tie! Score is Player: ${playerScore}, Computer: ${computerScore}`);
    } else {
      console.log('Invalid choice. Please select rock, paper, or scissors.');
      i--;
    }
  }

  if (playerScore > computerScore) {
    console.log(`You win the game! Final Score: Player: ${playerScore}, Computer: ${computerScore}`);
  } else if (playerScore < computerScore) {
    console.log(`You lose the game! Final Score: Player: ${playerScore}, Computer: ${computerScore}`);
  } else {
    console.log(`The game is a tie! Final Score: Player: ${playerScore}, Computer: ${computerScore}`);
  }
}

game();
