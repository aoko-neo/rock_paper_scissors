// action to get a random computer choice
function getComputerChoice() {
    let max = 2;
    let min = 0;
    let guess = ['rock', 'paper', 'scissors'];
    let num = Math.floor(Math.random() * (max - min) + 1);
    return guess[num];
}

//action to compare player and computer choice
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock' || playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors') {
        return `You lose ${computerSelection} beats ${playerSelection}`;
    } else {
        return 'You draw'
    }
}

let playerSelection = prompt('Please enter a random choice');

let computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));