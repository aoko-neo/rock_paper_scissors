// action to get a random computer choice
function getComputerChoice() {
    let max = 2;
    let min = 0;
    let guess = ['rock', 'paper', 'scissors'];
    let num = Math.floor(Math.random() * (max - min) + 1);
    return guess[num];
}

//action to play one round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
        return good;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock' || playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors') {
        return bad;
    } else {
        return draw;
    }
}

let playerSelection = prompt('Please enter a random choice');

let computerSelection = getComputerChoice();

let good = 'You win';
let bad = 'You lose';
let draw = 'You draw';


function game(play) {
    let round = 5;
    let playerWin = 0;
    for (let i = 0; i < 5; i++){
        if (i > 5) {
            break;
        } else {
            play;
        }
        playerWin += 1;
    }
    return playerWin;
}

let play = playRound();

console.log(playRound(playerSelection, computerSelection));
console.log(game(play));


