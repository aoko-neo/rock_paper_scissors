// action to get a random computer choice

function getComputerChoice() {
    let max = 2;
    let min = 0;
    let guess = ['rock', 'paper', 'scissors'];
    let num = Math.floor(Math.random() * (max - min) + 1);
    return guess[num];
}

//action to get player choice

//action to compare player and computer choice