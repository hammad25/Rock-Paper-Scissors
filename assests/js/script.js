//Variables
let buttons = document.getElementsByTagName("button");
let weapons=["rock","paper","scissors"]
let playerImage = document.getElementById("player-image");
let enemyImage = document.getElementById("enemy-image");

/**
 * Funtion to open and close the rules button
 */
// Get the modal
let modal = document.getElementById("rules-modal");

// Get the button that opens the modal 
let btn = document.getElementById("rules-button");
btn.addEventListener('click', modalPopup);

// When the user clicks the button, open the modal 
function modalPopup() {
  modal.style.display = "block";
}

// Get the <span> element that closes the modal and close it 
let span = document.getElementsByClassName("close")[0];
span.addEventListener('click', closeModal);

function closeModal() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/**
 * Add event listener to the user control button
 */
for (button of buttons) {
  button.addEventListener('click', function () {
    let playerWeapon = this.Attribute('data-type');
    playGame(playerWeapon);
  });
}

/**
 * This is for the main game functionality, takes the data-type value parameter of the selected user button 
 * and generates a random computer response from the weapons array
 */
function playGame(playerWeapon){
  playerImage.src=`/assets/images/${playerWeapon}-control-button.png`;
  let enemyWeapon= Math.floor(Math.random() * weapons.length);
  enemyImage.src=`/assets/images/${enemyWeapon}-control-button.png`;

  let result= checkWinner(playerWeapon, enemyWeapon);

  checkWinner(result);
  trackRound();

}

/**
 * Compares playerWeapon and enemyWeapon data strings to check winner of game
 */
 function checkWinner(playerWeapon, enemyWeapon) {
  /* If player chooses rock */
  if (playerWeapon === "rock" && enemyWeapon === "rock") {
    document.getElementById("battle-result").innerHTML = "Draw!";
  }
  else if (playerWeapon === "rock" && enemyWeapon === "paper") {
    document.getElementById("battle-result").innerHTML = "You Lose! Paper Covers Rock";
    addEnemyScore();
  }
  else if (playerWeapon === "rock" && enemyWeapon === "scissors") {
    document.getElementById("battle-result").innerHTML = "You Win! Rock Crushes Scissors";
    addPlayerScore();
  }
  
  /* If chooses paper */
  else if (playerWeapon === "paper" && enemyWeapon === "paper") {
    document.getElementById("battle-result").innerHTML = "Draw!";
  }
  else if (playerWeapon === "paper" && enemyWeapon === "rock") {
    document.getElementById("battle-result").innerHTML = "You Win! Paper Covers Rock";
    addPlayerScore();
  }
  else if (playerWeapon === "paper" && enemyWeapon === "scissors") {
    document.getElementById("battle-result").innerHTML = "You Lose! Scissors Cuts Paper";
    addEnemyScore();
  }

  /* If player chooses scissors */
  else if (playerWeapon === "scissors" && enemyWeapon === "scissors") {
    document.getElementById("battle-result").innerHTML = "Draw!";
  }
  else if (playerWeapon === "scissors" && enemyWeapon === "rock") {
    document.getElementById("battle-result").innerHTML = "You Lose! Rock Crushes Scissors";
    addEnemyScore();
  }
  else if (playerWeapon === "scissors" && enemyWeapon === "paper") {
    document.getElementById("battle-result").innerHTML = "You Win! Scissors Cuts Paper";
    addPlayerScore();
  }

}

function addPlayerScore(){

}

function addEnemyScore(){

}

function trackRound(){

}

function timer(){

}

function resetFunction (){

}
