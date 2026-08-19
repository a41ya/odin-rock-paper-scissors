/*test to see if i set everything up correctly 
console.log ("hey"); */

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