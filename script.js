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
    return "nothing";
  }
}


//score variables
let humanScore = 0;
let computerScore = 0;


//play round logic
function playRound (humanChoice, computerChoice) {

  if (humanChoice === "rock" && computerChoice === "rock") {
    return "tie";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    return "win";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    return "lose";
  }

  else if (humanChoice === "rock" && computerChoice === "paper") {
    return "lose";
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    return "tie";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    return "win";
  }

  else if (humanChoice === "rock" && computerChoice === "scissors") {
    return "win";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    return "lose";
  } else if (humanChoice === "scissors" && computerChoice === "scissors") {
    return "tie";
  }
}


//round result with log in console
function playGame () {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  const result = playRound(humanSelection, computerSelection);

  if (result === "win") {
    humanScore++;
  } else if (result === "lose") {
    computerScore++;
  }
  
  console.log (`you choose ${humanSelection}, computer choose ${computerSelection}. result is a ${result}`)
  console.log (humanScore, computerScore);

}

//temporary until i learn loops
playGame();
playGame();
playGame();
playGame();
playGame();