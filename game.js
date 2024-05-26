function getComputerChoice() {
    let weapon = ["rock", "paper", "scissors"];
    return weapon[Math.floor(Math.random() * weapon.length)];
}

function getHumanChoice() {
    let weapon = prompt("Make your choice (rock, paper, scissors):");
    return weapon;
}
