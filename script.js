//computer choice function
function getComputerChoice () {
 const number = Math.random ();
 if (number < 0.33) {
  return "rock";
 } else if (number > 0.66) {
  return "paper";
 } else {
  return "scissors";
 }
}

console.log (getComputerChoice());


//human choice function
function getHumanChoice () {
  let choice = prompt ("type rock, paper or scissors");

  if (choice === "rock") {
    return "rock";
  } else if (choice === "paper") {
    return "paper";
  } else if (choice === "scissors"){
    return "scissors";
  } else {
    return "you don't choose anything";
  }
}

console.log(getHumanChoice());

//score variables
let humanScore = 0;
let computerScore = 0;