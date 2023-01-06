// Declare variables
let gameOptions = ['rock', 'paper', 'scissors']
let cpuChoice = '';
let userChoice = '';
let cpuPoints = 0;
let userPoints = 0;
let output = '';

// While loop until either CPU or User reaches 2 points (best of 3)
do {
  // CPU makes a choice
  cpuChoice = gameOptions[Math.floor(Math.random() * gameOptions.length)];
  // User makes a choice
  userChoice = prompt('What is your choice? Enter rock, paper or scissors.').toLowerCase();
  // While loop if user enters choice incorrectly
  while (!gameOptions.includes(userChoice)) {
  userChoice = prompt('Make sure you enter your choice correctly: Enter rock, paper or scissors.').toLowerCase();
  }

  // No points awarded as it was a tie
  if (userChoice === cpuChoice) {
    alert(`The computer chose ${cpuChoice}. That was a draw!`);
  }
  // Check whether user wins the round
  else if ((userChoice === 'rock' && cpuChoice === 'scissors') ||
  (userChoice === 'scissors' && cpuChoice === 'paper') ||
  (userChoice === 'paper' && cpuChoice === 'rock')) {
    // Add 1 to the user's current score
    userPoints ++;
    alert(`Congratulations, the computer chose ${cpuChoice}. You won that round!`);
}
  else {
    // Add 1 to cpu's current score
    cpuPoints ++;
    alert(`Ouch, the computer chose ${cpuChoice}. You lost that round!`);
  }
} while (userPoints < 2 && cpuPoints < 2)

// Create post-game output
if(cpuPoints > userPoints) {
  output = `Unlucky. You lose! The computer scored ${cpuPoints}, you scored ${userPoints}.`;
}
else {
  output = `Congratulations. You win! The computer scored ${cpuPoints}, you scored ${userPoints}.`;
}

// Display output as alert
alert(output);