//
//DOM
//

//player choices
const choices = document.querySelector("#choices");

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");


//round stats
const currentRound = document.querySelector("#currentRound");

const prevRound = document.querySelector("#prevRound");
const prevRoundHuman = document.querySelector("#prevRoundHuman");
const prevRoundComputer = document.querySelector("#prevRoundComputer");
const prevRoundCount = document.querySelector("#prevRoundCount");
const result = document.querySelector("#result");


//score 
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");


//log
const gameLog = document.querySelector("#gameLog");


//
//GAME LOGIC
//

choices.addEventListener('click', handleGame)

function handleGame(event){
  getHumanChoice(event);
  playRound();
  updateDOM();
}


//round data collectors
let humanChoice = "";
let computerChoice = "";
let roundResult = "";

//score collectors
let humanScore = 0;
let compScore = 0;
let roundCounter = 1;

//choice collectors
let prevRoundHumanChoice = "";
let prevRoundComputerChoice = "";


//computer choice function
function getComputerChoice () {
 const number = Math.random ();

 if (number < 0.33) {
  computerChoice = "rock";
 } else if (number > 0.66) {
  computerChoice = "paper";
 } else {
  computerChoice = "scissors";
 }
}


//human choice function
function getHumanChoice (event) {
  const parentElement = event.target.closest('.choice')

  if (parentElement === rockBtn) {
    humanChoice = "rock";
    console.log(humanChoice);
  } else if (parentElement === paperBtn) {
    humanChoice = "paper";
    console.log(humanChoice);
  } else if (parentElement === scissorsBtn){
    humanChoice = "scissors";
    console.log(humanChoice);
  } 
}


//determine round result
function playRound (){
  getComputerChoice();
  console.log(computerChoice);

  if (humanChoice === computerChoice){
    roundResult = "TIE";
    console.log(roundResult);
  } else if (humanChoice === "rock" && computerChoice === "paper"){
    roundResult = "LOSE";
    console.log(roundResult);
  } else if (humanChoice === "rock" && computerChoice === "scissors"){
    roundResult = "WIN";
    console.log(roundResult);
  } else if (humanChoice === "paper" && computerChoice === "scissors"){
    roundResult = "LOSE";
    console.log(roundResult);
  } else if (humanChoice === "paper" && computerChoice === "rock"){
    roundResult = "WIN";
    console.log(roundResult);
  } else if (humanChoice === "scissors" && computerChoice === "paper"){
    roundResult = "WIN";
    console.log(roundResult);
  } else if (humanChoice === "scissors" && computerChoice === "rock"){
    roundResult = "LOSE";
    console.log(roundResult);
  }

  if (roundResult === "WIN"){
    humanScore++;
    result.textContent = "YOU WIN!"
    result.style.color = "rgb(0, 255, 0)";
  } else if (roundResult === "LOSE"){
    compScore++;
    result.textContent = "YOU LOSE"
    result.style.color = "rgb(255, 0, 0)";
  } else {
    result.textContent = "TIE."
    result.style.color = "rgb(255, 255, 0)";
  }
  
  prevRoundCount.textContent = `round 0${roundCounter}`;
  if (roundCounter >= 10){
  prevRoundCount.textContent = `round ${roundCounter}`;
 }

  roundCounter++;
}


//manipulate DOM
function updateDOM (){
 playerScore.textContent = `${humanScore}`;
 computerScore.textContent = `${compScore}`;

 currentRound.textContent = `> round 0${roundCounter}`;

 if (roundCounter >= 10){
  currentRound.textContent = `> round ${roundCounter}`;
 }

 prevRound.style.display = "block";
 
 if (humanChoice === "rock"){
  prevRoundHumanChoice = "✊";
 } else if (humanChoice === "paper"){
  prevRoundHumanChoice = "✋";
 } else if (humanChoice === "scissors"){
  prevRoundHumanChoice = "✌️";
 }

 if (computerChoice === "rock"){
  prevRoundComputerChoice = "✊";
 } else if (computerChoice === "paper"){
  prevRoundComputerChoice = "✋";
 } else if (computerChoice === "scissors"){
  prevRoundComputerChoice = "✌️";
 }

 prevRoundHuman.textContent = `you ${prevRoundHumanChoice}`;
 prevRoundComputer.textContent = `computer ${prevRoundComputerChoice}`;
}


