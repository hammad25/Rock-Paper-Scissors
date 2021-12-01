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
function closeModal(){
    modal.style.display="none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/**
 * Add event listener to the player control buttons
 */
let buttons=document.getElementsByTagName('button');
for (let button of buttons){
    buttons.addEventListener('click', function(){
        let playerChoice= this.getAttribute ("data-type");
        playGame(playerChoice);
    });
}




