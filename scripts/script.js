// 3.1 - Submit Events
const form = document.getElementById("signup"); //Get form by ID
const userMessage = document.getElementById("userMessage"); // Get message display element by ID

// Access form elements by their name;
const emailField = form.elements["emailField"];
const passwordField = form.elements["passwordField"];
const passwordRepeatField = form.elements["passwordRepeatField"];

const emailRegex = /^\S+@\S+\.\S+$/; // Email regex validation pattern

// Function to validate form inputs
function validateForm() {
  const email = emailField.value.trim(); // trim() removes whitespace from email
  const pw = passwordField.value;
  const pwRepeat = passwordRepeatField.value;

  if (!emailRegex.test(email)) {
    userMessage.textContent = "Please enter a valid email address.";
  } else if (pw.length < 8) {
    userMessage.textContent = "Password must be at least 8 characters long.";
  } else if (pw !== pwRepeat) {
    userMessage.textContent = "Passwords do not match.";
  }
  // All fields validated
  else {
    userMessage.textContent = "";
    return true;
  }
}

// Event listener; every time the user types in an input, validateForm() runs
form.addEventListener("input", validateForm);

// Event listener; whenever the form is submitted
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent page reload
  // Show success message only on submit if form is valid
  if (validateForm()) {
    userMessage.textContent = "You have successfully signed up!";
  }
});

// 3.2 - onClick Events
let btn = document.getElementById("clickCount"); // Get button by ID

let count = 0; // Initialize click counter

function updateClickCount() {
  count++;
  btn.textContent = `Click count: ${count}`;
}

btn.addEventListener("click", updateClickCount); // Add event listener to button

// 3.3 - Greater than or less than the game
let currentValue = 3;
let winCounter = 0;

const currentValueEl = document.getElementById("current-value");
const winCounterEl = document.getElementById("win-counter");
const messageEl = document.getElementById("message");
const diceEl = document.getElementById("dice");

function rollDice() {
  return Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6; 0 ≤ x < 6 by scaling and rounding random()
}

function playGame(guessHigher) {
  const newValue = rollDice();
  diceEl.textContent = `🎲 ${newValue}`;

  if (
    (guessHigher && newValue > currentValue) ||
    (!guessHigher && newValue < currentValue)
  ) {
    messageEl.textContent = "You won!";
    winCounter++;
  } else if (newValue === currentValue) {
    messageEl.textContent = "It's a draw!";
  } else {
    messageEl.textContent = "You lost!";
  }

  currentValue = newValue;
  currentValueEl.textContent = currentValue;
  winCounterEl.textContent = winCounter;
}

document
  .getElementById("higher")
  .addEventListener("click", () => playGame(true));
document
  .getElementById("lower")
  .addEventListener("click", () => playGame(false));
