// variables
let rulesBtn= document.getElementById('rules-btn');
const buttons = document.getElementsByTagName("button");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const choices = ["rock", "paper", "scissors"];

/**
 * Add event listeners to control panel buttons
 */
for (let button of buttons) {
    button.addEventListener("click", funtion() {
        let playerChoice = this.getAttritube("data-type");
        playGame(playerChoice);
    });
}

/**
 * Main game function. It reads the data-type of the selected button
 * and generates and random choice from the array
 */
function playGame(playerChoice){
    playerImage.src = `assests/images/player-${choices[playerChoice]}.png`;
    let comupterChoice = Math.floor(Math.random() * 3);
    computerImage.src = `assests/images/computer-${choices[playerChoice]}.png`;
    let result = checkWinner(choices[playerChoice], choices[computerChoice]);

    checkWinner(result);

}


/**
 * Compares playerChoice and computerChoice data string to check winner of game
 */
function checkWinner(playerChoice, computerChoice) {
    /* if player choices rock*/
    if (playerChoice === "rock" && computerChoice === "rock"){
        document.getElementById('battle-result').innerHTML="Draw!";
    }
    else if (playerChoice === "rock" && computerChoice === "paper"){
        document.getElementById('battle-result').innerHTML="Battle Lost!";
    }
    else if( playerChoice === "rock" && computerChoice === "scissors"){
        document.getElementById('battle-result').innerHTML="Battle Won!";
    }
    else if(playerChoice === "paper" && computerChoice === "rock"){
        document.getElementById('battle-result').innerHTML="Battle Won!";
    }
    else if( playerChoice === "paper" && computerChoice === "paper"){
        document.getElementById('battle-result').innerHTML="Draw!";
    }
    else if (playerChoice === "paper" && computerChoice === "scissors"){
        document.getElementById('battle-result').innerHTML="Battle Lost!";
    }
    else if (playerChoice === "scissors" && computerChoice === "rock"){
        document.getElementById('battle-result').innerHTML="Battle Lost!";
    }
    else if (playerChoice === "scissors" && computerChoice === "paper"){
        document.getElementById('battle-result').innerHTML="Battle Won!";
    }
    else if (playerChoice === "scissors" && computerChoice === "scissors"){
        document.getElementById('battle-result').innerHTML="Draw!";
    }
}

function compareAnswer() {

}


function incrementScore() {

}

function incrementlose() {

}

function battleLost() {

}

function battleWon() {

}

function enemyDefeated() {

}