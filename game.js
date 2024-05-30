function getComputerChoice() {
    let weapon = ["rock", "paper", "scissors"];
    return weapon[Math.floor(Math.random() * weapon.length)];
}

function getHumanChoice() {
    let weapon = prompt("Make your choice (rock, paper, scissors):");
    return weapon.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    let result;
    if ((humanChoice == "rock" && computerChoice == "scissors")
        || (humanChoice == "paper" && computerChoice == "rock")
        || (humanChoice == "scissors" && computerChoice == "paper")) {
        humanScore++;
        result = `You win, ${humanChoice} beats ${computerChoice}`;
    } else if ((computerChoice == "rock" && humanChoice == "scissors")
        || (computerChoice == "paper" && humanChoice == "rock")
        || (computerChoice == "scissors" && humanChoice == "paper")) {
        computerScore++;
        result = `You loose, ${computerChoice} beats ${humanChoice}`;
    } else if (humanChoice == computerChoice) {
        ties++;
        result = `It's a tie, ${humanChoice} = ${computerChoice}`;
    }
    resultDiv = document.querySelector("#result");
    resultDiv.textContent = result;
}

let ties = humanScore = computerScore = rounds = 0;

roundsDiv = document.querySelector(".rounds");
winnerDiv = document.querySelector("#winner");
let humanScoreLabel = document.querySelector(".humanScore")
let computerScoreLabel = document.querySelector(".computerScore")
let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    let className = button.className;
    button.addEventListener('click', () => {
        if (rounds < 5) {
            playRound(className, getComputerChoice());
            rounds++;
            roundsDiv.textContent = `Round: ${rounds}/5`;
            humanScoreLabel.textContent = `Human: ${humanScore}/5`
            computerScoreLabel.textContent = `Computer: ${computerScore}/5`
            if (rounds == 5) {
                if (humanScore > computerScore) winnerDiv.textContent = "You won!";
                else if (computerScore > humanScore) winnerDiv.textContent = "You lost, better luck next time.";
                else winnerDiv.textContent = "It's a tie, there's no winner.";
            }
        } else {
            // rounds = 0;
            winnerDiv.textContent = "";
            roundsDiv.textContent = ``;
            humanScore = computerScore = rounds = 0;
        }
    });
});