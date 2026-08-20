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
  let choice = prompt ("type rock, paper or scissors").toLowerCase();

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


//round result with log in console
function playGame () {
  let humanScore = 0;
  let computerScore = 0;

  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();

  //вот эту всю хуйню с повторениями стереть, это пиздец
  playRound(humanSelection, computerSelection);
  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

    //play round logic
    function playRound (humanChoice, computerChoice) {

    if (humanChoice === "rock" && computerChoice === "rock") {
      console.log("tie");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++
      console.log("you win");
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      computerScore++;
      console.log("you lose");
    }

    else if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore++;
      console.log("you lose");
    } else if (humanChoice === "paper" && computerChoice === "paper") {
      console.log("tie");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++
      console.log("you win");
    }

    else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++
      console.log("you win");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      computerScore++;
      console.log("you lose");
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
      console.log("tie");
    }
    }
  
  console.log (humanScore, computerScore);

}

playGame();