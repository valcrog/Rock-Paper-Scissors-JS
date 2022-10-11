function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let result = "";
    if (playerSelection == computerSelection) {
        result = "It's a tie between "+playerSelection+" !";
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            result = "You Lose! Paper beats Rock";
        }
        else {
            result = "You win! Rock beats Scissors";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            result = "You win! Paper beats rock";
        }
        else {
            result = "You lose! Scissors beats Paper";
        }
    } else {
        if (computerSelection == "rock") {
            result = "You lose! Rock beats Scissors";
        } else {
            result = "You win! Scissors beats Paper"
        }
    }
    return result;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));