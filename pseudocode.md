# Rock, Paper, Scissors

# Pseudocode for how to play Rock, Paper, Scissors against the computer

// Declare variables needed for the game:
  - Set user score to 0;
  - Set cpu score to 0;
  - Initialise user and cpu choices with empty string;
  - Initialise array holding the options for the game ['rock', 'paper', 'scissors']
// Choose a random index number from 0, 1 or 2 for CPU choice of option
// Prompt user to make a choice between rock, paper or scissors
// Check the user has made an accurate choice
// Conditionals for user to win: rock beats scissors, scissors beats paper, paper beats rock:
  - if userChoice === cpuChoice, draw round, no score;
  - else if user has a winning position, userScore++;
  - else cpuScore++;
// Check the score, if both players have < 2, repeat the game process (game ends when one player reaches score of 2);
// Display a summary of the score
// Ask if they want to play again or count best of 3. This would require a while loop of game conditions
