const btns = document.querySelectorAll("button");

let getComputerChoice = () => {
  let rNum = Math.floor(Math.random() * 3);

  if (rNum === 0) {
    return "rock";
  } else if (rNum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

let getHumanChoice = () => {
  let playerChoice = prompt(
    "Enter your choice (rock, paper, scissors):",
    "rock",
  );
  return playerChoice.toLowerCase();
};

let playGame = () => {
  let humanScore = 0;

  let computerScore = 0;

  let playRound = (humanChoice, computerChoice) => {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      ++humanScore;
      console.log("You win! Rock beats Scissors");
    } else if (computerChoice === "paper" && humanChoice === "rock") {
      ++computerScore;
      console.log("You lose! Paper covers Rock");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      ++humanScore;
      console.log("You win! Paper covers Rock");
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
      ++computerScore;
      console.log("You lose! Scissors slice Paper");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      ++humanScore;
      console.log("You win! Scissors cut Paper");
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
      ++computerScore;
      console.log("You lose! Rock crushes Scissors");
    }
  };

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) =>
      playRound(e.target.textContent, getComputerChoice()),
    );
  });

  return `Final score: Human ${humanScore} - Computer ${computerScore}\n${humanScore > computerScore ? "You won the game" : humanScore < computerScore ? "Computer won the game" : "Tie game"}!`;
};

console.log(playGame());
