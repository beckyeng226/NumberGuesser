let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    humanDifferenceFromTarget = Math.abs(humanGuess - targetGuess);
    computerDifferenceFromTarget = Math.abs(computerGuess - targetGuess);

    if (humanDifferenceFromTarget === computerDifferenceFromTarget) {
        return true;
    }
    if (humanDifferenceFromTarget > computerDifferenceFromTarget) {
        return false;
    }
    if (humanDifferenceFromTarget < computerDifferenceFromTarget) {
        return true;
    }
}
/*From the provided solution - also a cool way
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDifference = Math.abs(targetGuess - humanGuess)
  const computerDifference = Math.abs(targetGuess - computerGuess)
  return humanDifference <= computerDifference;
}
*/
const updateScore = winner => {
    if (winner === 'human') {
        humanScore ++;
    }
    else {
        computerScore ++;
    }
}

const advanceRound = () => currentRoundNumber ++;