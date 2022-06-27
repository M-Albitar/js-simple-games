const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("your-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;

    generateComputerChoice();
    generateResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
  console.log(randomNumber);

  switch (randomNumber) {
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "rock";
      break;
    case 3:
      computerChoice = "scissors";
      break;
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function generateResult() {
  if (userChoice === computerChoice) {
    result = "It's a draw!";
  }

  if (userChoice === "paper" && computerChoice === "rock") {
    result = "You win";
  }

  if (userChoice === "scissors" && computerChoice === "rock") {
    result = "You lose";
  }

  if (userChoice === "scissors" && computerChoice === "paper") {
    result = "You win";
  }

  if (userChoice === "paper" && computerChoice === "rock") {
    result = "You lose";
  }

  if (userChoice === "rock" && computerChoice === "scissors") {
    result = "You win";
  }

  if (userChoice === "paper" && computerChoice === "scissors") {
    result = "You lose";
  }

  resultDisplay.innerHTML = result;
}
