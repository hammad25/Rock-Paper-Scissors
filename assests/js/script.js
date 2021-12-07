//Variables
let modal = document.getElementById("rules-modal");
let buttons = document.getElementsByTagName("button");
let weapons = ["rock", "paper", "scissor"]
let playerImage = document.getElementById("player-image");
let enemyImage = document.getElementById("enemy-image");
let winnerModal = document.getElementById("winner-modal");
let loseModal = document.getElementById("lose-modal");
let gameWonModal = document.getElementById("gamewon-modal");
let gameLostModal = document.getElementById("gamelost-modal");
let finalRoundSelection = false;
let isFinalRound = false;

/**
 * Funtion to open and close the rules button
 */
let btn = document.getElementById("rules-button");
btn.addEventListener('click', modalPopup);

function modalPopup() {
  modal.style.display = "block";
}

// Get the <span> element that closes the modal  
let span = document.getElementsByClassName("close")[0];
span.addEventListener('click', closeModal);

function closeModal() {
  modal.style.display = "none";
}

/**
 * Add event listener to the user control button
 */
for (let button of buttons) {
  button.addEventListener('click', function () {
    let playerWeapon = this.getAttribute('data-type');
    finalRoundSelection = true;
    playGame(playerWeapon);
  });
}

/**
 * This is for the main game functionality, takes the data-type value parameter of the selected user button 
 * and generates a random computer response from the weapons array
 */
function playGame(playerWeapon) {
  playerImage.src = `assests/images/${playerWeapon}-control-button.png`;
  let enemyWeapon = weapons[Math.floor(Math.random() * weapons.length)];

  enemyImage.src = `/assests/images/${enemyWeapon}-control-button.png`;

  checkWinner(playerWeapon, enemyWeapon);
  trackRound();
}

/**
 * Compares playerWeapon and enemyWeapon data strings to check winner of game
 */
function checkWinner(playerWeapon, enemyWeapon) {
  /* If player chooses rock */
  if (playerWeapon === enemyWeapon) {
    document.getElementById("battle-result").innerHTML = "Draw!";
  } else if (playerWeapon === "rock" && enemyWeapon === "paper") {
    document.getElementById("battle-result").innerHTML = "You Lose! Paper Covers Rock";
    addEnemyScore();
  } else if (playerWeapon === "rock" && enemyWeapon === "scissor") {
    document.getElementById("battle-result").innerHTML = "You Win! Rock Crushes Scissor";
    addPlayerScore();
  }

  /* If chooses paper */
  else if (playerWeapon === "paper" && enemyWeapon === "rock") {
    document.getElementById("battle-result").innerHTML = "You Win! Paper Covers Rock";
    addPlayerScore();
  } else if (playerWeapon === "paper" && enemyWeapon === "scissor") {
    document.getElementById("battle-result").innerHTML = "You Lose! Scissor Cuts Paper";
    addEnemyScore();
  }

  /* If player chooses scissors */
  else if (playerWeapon === "scissor" && enemyWeapon === "rock") {
    document.getElementById("battle-result").innerHTML = "You Lose! Rock Crushes Scissor";
    addEnemyScore();
  } else if (playerWeapon === "scissor" && enemyWeapon === "paper") {
    document.getElementById("battle-result").innerHTML = "You Win! Scissor Cuts Paper";
    addPlayerScore();
  }
}

/**
 * Add player score each round
 */
function addPlayerScore() {
  let playerScore = parseInt(document.getElementById("user-score").textContent);
  document.getElementById("user-score").textContent = ++playerScore;
}

/**
 * Add computer score each round
 */
function addEnemyScore() {
  let enemyScore = parseInt(document.getElementById("enemy-score").textContent);
  document.getElementById("enemy-score").textContent = ++enemyScore;
}

/**
 * Keep track of scores for the first battle and the final battle
 */
function trackRound() {
  let playerWinningScore = document.getElementById("user-score").textContent;
  let enemyWinningScore = document.getElementById("enemy-score").textContent;

  if (playerWinningScore === "3") {
    winningModal();
  } else if (enemyWinningScore === "3") {
    losingModal();
  }

  if (isFinalRound === true && playerWinningScore === '1') {
    gameWon();

  } else if (isFinalRound === true && enemyWinningScore === '1') {
    gameLost();
  }

  //click on window to start final battle or reset game 
  window.onclick = function (event) {
    if (event.target == winnerModal) {
      winnerModal.style.display = "none";
      let gameFinalRound = isFinalRound
      resetFunction()
      finalRound()

    } else if (event.target == loseModal) {
      loseModal.style.display = "none";
      resetFunction()
    }

    if (event.target == gameWonModal) {
      if (isFinalRound === true) {
        location.reload();
      }

    } else if (event.target == gameLostModal) {
      if (isFinalRound === true) {
        location.reload();

      }
    }
  }

}

//winning and losing modals
function winningModal() {
  let winnerModal = document.getElementById("winner-modal");
  winnerModal.style.display = "block";
}

function losingModal() {
  let loseModal = document.getElementById("lose-modal");
  loseModal.style.display = "block"
  document.getElementById("battle-result").textContent = "";
  resetFunction();
}

function gameWon() {
  let gameWonModal = document.getElementById("gamewon-modal");
  gameWonModal.style.display = "block";
}

function gameLost() {
  let gameLostModal = document.getElementById("gamelost-modal");
  gameLostModal.style.display = "block";
}

/**
 * reset game scores after 1st battle 
 */
function resetFunction() {
  document.getElementById("user-score").textContent = 0;
  document.getElementById("enemy-score").textContent = 0;
  finalRoundSelection = false
}

function finalRound() {
  finalRoundSelection = false
  isFinalRound = true

  document.getElementById("battle-result").textContent = "";
  let finalRoundText = document.getElementById("final-round");
  finalRoundText.style.display = "block";

  var root = document.documentElement;
  root.className += 'final-round';

  setTimeout(checkFinalRound, 5000);

}

function checkFinalRound() {
  if (finalRoundSelection === false) {
    addEnemyScore();
    gameLost();
  }
}