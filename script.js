function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let result = [];
    if (playerSelection == computerSelection) {
        result = ["It's a tie between "+playerSelection+" !", 0];
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            result = ["You lose! Paper beats Rock", -1];
        }
        else {
            result = ["You win! Rock beats Scissors", 1];
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            result = ["You win! Paper beats rock", 1];
        }
        else {
            result = ["You lose! Scissors beats Paper", -1];
        }
    } else {
        if (computerSelection == "rock") {
            result = ["You lose! Rock beats Scissors", -1];
        } else {
            result = ["You win! Scissors beats Paper", 1];
        }
    }
    return result;
}

function game() {
    let pScore = 0;
    let cScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors ?");
        let computerSelection = getComputerChoice();
        console.log("Computer choose "+computerSelection);
        round = playRound(playerSelection, computerSelection);
        console.log(round[0]);
        score = round[1];
        if (score > 0) {
            pScore++;
        } else if (score < 0) {
            cScore++;
        }
        console.log("Your score : "+pScore);
        console.log("Computer score : "+cScore);
    }
    console.log("End of the game!")
    if (pScore > cScore) {
        console.log("You win! Congrats");
    } else if (pScore == cScore) {
        console.log("It's a tie!");
    } else {
        console.log("You lose! Try again!");
    }
}

game();