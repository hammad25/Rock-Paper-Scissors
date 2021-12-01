//Variables
let buttons = document.getElementsByTagName("buttons");
let weapons=["rock","paper","scissors"]
let playerImage=document.getElementById("player-image");
let enemyImage=document.getElementById("enemy-image");

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
  playerImage.src=`assets/images/${weapons[playerWeapon]}-control-button.png`;
  let enemyWeapon= Math.floor(Math.random() * 3);
  enemyImage.src=`assets/images/${weapons[enemyWeapon]}-control-button.png`;

  let result= checkWinner(weapons[playerWeapon], weapons[enemyWeapon]);

  checkWinner(result);
  trackRound();

}

function checkWinner(){

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
