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
    let computerWon, humanWon;
    if ((humanChoice == "rock" && computerChoice == "scissors")
        || (humanChoice == "paper" && computerChoice == "rock")
        || (humanChoice == "scissors" && computerChoice == "paper")) {
        humanWon++;
        console.log(`You win, ${humanChoice} beats ${computerChoice}`);
    } else if ((computerChoice == "rock" && humanChoice == "scissors")
        || (computerChoice == "paper" && humanChoice == "rock")
        || (computerChoice == "scissors" && humanChoice == "paper")) {
        computerWon++;
        console.log(`You loose, ${computerChoice} beats ${humanChoice}`);
    } else if (humanChoice == computerChoice) {
        ties++;
    }
}

humanChoice = getHumanChoice();
computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice)