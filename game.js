let ties = humanScore = computerScore = 0;

function getComputerChoice() {
    let weapon = ["rock", "paper", "scissors"];
    return weapon[Math.floor(Math.random() * weapon.length)];
}

function getHumanChoice() {
    let weapon = prompt("Make your choice (rock, paper, scissors):");
    return weapon.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    let computerWon, humanWon, result;
    if ((humanChoice == "rock" && computerChoice == "scissors")
        || (humanChoice == "paper" && computerChoice == "rock")
        || (humanChoice == "scissors" && computerChoice == "paper")) {
        humanWon++;
        result=`You win, ${humanChoice} beats ${computerChoice}`;
    } else if ((computerChoice == "rock" && humanChoice == "scissors")
        || (computerChoice == "paper" && humanChoice == "rock")
        || (computerChoice == "scissors" && humanChoice == "paper")) {
        computerWon++;
        result=`You loose, ${computerChoice} beats ${humanChoice}`;
    } else if (humanChoice == computerChoice) {
        ties++;
        result=`It's a tie, ${humanChoice}=${computerChoice}`;
    }
    alert(result);
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
}

playGame();