//
//DOM
//

//ui
const gameUI = document.querySelector("#gameUI");
const gameTitle = document.querySelector("#gameTitle")


//player choices
const choices = document.querySelector("#choices");

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");


//round stats
const roundResultsDiv = document.querySelector("#roundResultDiv");
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
const logList = document.querySelector("#logList");
const logPlug = document.querySelector("#logPlug");



//
//GAME LOGIC
//

choices.addEventListener('click', handleGame)

function handleGame(event){
  getHumanChoice(event);
  playRound();
  updateDOM();
  updateLog();
  determineWinner();
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
  } else if (parentElement === paperBtn) {
    humanChoice = "paper";
  } else if (parentElement === scissorsBtn){
    humanChoice = "scissors";
  } 
}


//determine round result
function playRound (){
  getComputerChoice();

  if (humanChoice === computerChoice){
    roundResult = "TIE";
  } else if (humanChoice === "rock" && computerChoice === "paper"){
    roundResult = "LOSE";
  } else if (humanChoice === "rock" && computerChoice === "scissors"){
    roundResult = "WIN";
  } else if (humanChoice === "paper" && computerChoice === "scissors"){
    roundResult = "LOSE";
  } else if (humanChoice === "paper" && computerChoice === "rock"){
    roundResult = "WIN";
  } else if (humanChoice === "scissors" && computerChoice === "paper"){
    roundResult = "WIN";
  } else if (humanChoice === "scissors" && computerChoice === "rock"){
    roundResult = "LOSE";
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

 logPlug.remove();
}

//logging of previous rounds
function updateLog (){
  const logItem = document.createElement("li");

  logItem.textContent = `${prevRoundCount.textContent} ${prevRoundHumanChoice} ${prevRoundComputerChoice} ${roundResult}`;

  logList.appendChild(logItem);
}


//determine the winner
function determineWinner (){
  if (humanScore === 5){
    gameOver('human');
  } else if (compScore === 5){
    gameOver();
  }
}

function gameOver (who){
  gameTitle.style.display = "none";
  choices.style.display = "none";
  roundResultsDiv.style.display = "none";

  const gameOverTitle = document.createElement("h1");
  const gameOverMessage = document.createElement("p");
  const gameOverMessageInvite = document.createElement("p");
  const gameOverImg = document.createElement("img");
  const newGameBtn = document.createElement("button");


  gameOverImg.style.width = "300px";

  newGameBtn.classList.add("newGameBtn");
  newGameBtn.textContent = "start new game";
  
  newGameBtn.addEventListener("click", () => {
  location.reload();
});
  

  gameUI.prepend(newGameBtn);
  gameUI.prepend(gameOverMessageInvite);
  gameUI.prepend(gameOverImg);
  gameUI.prepend(gameOverMessage);
  gameUI.prepend(gameOverTitle);
  

  if (who === 'human'){
    gameOverTitle.textContent = 'YOU WIN.';
    gameOverMessage.textContent = 'the computer never stood a chance.';
    gameOverMessageInvite.textContent = 'ready for another round?';

    gameOverImg.src = "images/happy.gif"
  } else {
    gameOverTitle.textContent = 'GAME OVER';
    gameOverMessage.textContent = 'the computer got you this time.';
    gameOverMessageInvite.textContent = 'care to try again?';

    gameOverImg.src = "images/game-over.gif"
  }
}