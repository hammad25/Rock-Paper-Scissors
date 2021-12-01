//Variables
let buttons = document.getElementsByTagName("button");
let weapons=["rock","paper","scissor"]
let playerImage = document.getElementById("player-image");
console.log(playerImage);
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
for (let button of buttons) {
  button.addEventListener('click', function () {
    let playerWeapon = this.getAttribute('data-type');
    console.log(playerWeapon)
    console.log('click')
    playGame(playerWeapon);
  });
}

/**
 * This is for the main game functionality, takes the data-type value parameter of the selected user button 
 * and generates a random computer response from the weapons array
 */
function playGame(playerWeapon){
  playerImage.src=`assests/images/${playerWeapon}-control-button.png`;
  let enemyWeapon= weapons[Math.floor(Math.random() * weapons.length)];
  console.log(enemyWeapon);
  enemyImage.src=`/assests/images/${enemyWeapon}-control-button.png`;

  checkWinner(playerWeapon, enemyWeapon);

}

/**
 * Compares playerWeapon and enemyWeapon data strings to check winner of game
 */
 function checkWinner(playerWeapon, enemyWeapon) {
  /* If player chooses rock */
  if (playerWeapon === enemyWeapon) {
    document.getElementById("battle-result").innerHTML = "Draw!";
  }
  else if (playerWeapon === "rock" && enemyWeapon === "paper") {
    document.getElementById("battle-result").innerHTML = "You Lose! Paper Covers Rock";
    addEnemyScore();
  }
  else if (playerWeapon === "rock" && enemyWeapon === "scissor") {
    document.getElementById("battle-result").innerHTML = "You Win! Rock Crushes Scissor";
    addPlayerScore();
  }
  
  /* If chooses paper */
  else if (playerWeapon === "paper" && enemyWeapon === "rock") {
    document.getElementById("battle-result").innerHTML = "You Win! Paper Covers Rock";
    addPlayerScore();
  }
  else if (playerWeapon === "paper" && enemyWeapon === "scissor") {
    document.getElementById("battle-result").innerHTML = "You Lose! Scissor Cuts Paper";
    addEnemyScore();
  }

  /* If player chooses scissors */

  else if (playerWeapon === "scissor" && enemyWeapon === "rock") {
    document.getElementById("battle-result").innerHTML = "You Lose! Rock Crushes Scissor";
    addEnemyScore();
  }
  else if (playerWeapon === "scissor" && enemyWeapon === "paper") {
    document.getElementById("battle-result").innerHTML = "You Win! Scissor Cuts Paper";
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
