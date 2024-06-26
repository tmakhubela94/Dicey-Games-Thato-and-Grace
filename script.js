// Function to submit player names
function playerSubmission(playerNumber) {
  const playerNameInput = document.getElementById(`player${playerNumber}`);
  const playerName = playerNameInput ? playerNameInput.value.trim() : "";

  // Making sure valid name has been entered
  if (playerName.length <= 1) {
    alert('Please Enter A Valid Name');
    return;
  } else if (playerName.length === 0 || /\d/.test(playerName)){
      alert('Only Alphabetic & Special Characters are allowed');
      return;
  }

  // Update player names directly
  if (playerNumber === 1) {
    player1 = playerName;
    localStorage.setItem("player1", player1); // Store player1 in local storage
  } else if (playerNumber === 2) {
    player2 = playerName;
    localStorage.setItem("player2", player2); // Store player2 in local storage
  }

  // Update player names in the UI
  document.querySelector(`#players label[for="player${playerNumber}"]`).textContent = playerName;

  // Checking if both players names are entered before enabling the continue button
  document.getElementById("continue").disabled = !(player1 && player2);
  
  console.log(`Player ${playerNumber} name submitted: ${playerName}`);
  console.log(`Player 1: ${player1}, Player 2: ${player2}`);
}

// Function to check if both player names are entered before continuing the game
function continueGame() {
  // Check if both player names are entered
  if (player1 && player2) {
    console.log("Moving on to the Rules!");
    window.location.href = "rules.html";
  } else {
    alert("Please enter both player names before continuing the game.");
  }
}

// Resets the stored players names
window.addEventListener("pageshow", function (event) {
  // Clear stored player names directly
  localStorage.removeItem("player1");
  localStorage.removeItem("player2");
  console.log("Stored player names cleared.");
});

// Function to end the game and redirect to another the game home page
function endGame() {
  // Reset player names to empty strings
  player1 = "";
  player2 = "";
  
  // Clear stored player names
  localStorage.removeItem("player1");
  localStorage.removeItem("player2");
  console.log("Player names reset and stored player names cleared.");

  // When quit button is clicked it should clear/refresh the game and redirect to game home page
  window.location.href = "loader2.html";
}

function goBack() {
  window.location.href = "rules.html";
}

function startGame() {
  window.location.href = "dice.html";
}
