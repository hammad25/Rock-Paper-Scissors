// variables
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
 * @param {*} playerChoices 
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
        document.get
    }

}

function compareAnswer() {

}

function resultAnswer() {

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