const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDidplay = document.getElementById("result");

const possibleChoices = document.querySelectorAll("button");
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice

  generateComputerChoice()
  getResult()
}));

function generateComputerChoice() {
  const randomNumber =  Math.floor(Math.random() * 3) + 1 // possibleChoices.length
  if (randomNumber === 1) {
    computerChoice = "rock"
  }
  if (randomNumber === 2) {
    computerChoice = "scissor"
  }
  if (randomNumber === 3) {
    computerChoice = "paper"
  }

  computerChoiceDisplay.innerHTML = computerChoice
  // console.log(randomNumber);

}

function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a draw!"

  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "you win"

  }
  if (computerChoice === "rock" && userChoice === "scissor") {
    result = "you lost"

  }
  if (computerChoice === "paper" && userChoice === "scissor") {
    result = "you win"

  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "you lost"

  }

  if (computerChoice === "scissor" && userChoice === "rock") {
    result = "you win"

  }
  if (computerChoice === "scissor" && userChoice === "paper") {
    result = "you lost"

  }
  resultDidplay.innerHTML = result
}
