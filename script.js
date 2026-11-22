const btns = document.querySelectorAll(".psk-btn");
const logTotal = document.querySelector(".roundText");

let playerScore = document.getElementById("player-score");

let compScore = document.getElementById("computer-score");

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

let playGame = () => {
  let humanScore = 0;

  let computerScore = 0;

  let playRound = (humanChoice, computerChoice) => {
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      return "It's a tie!";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      ++humanScore;
      return "You win! Rock beats Scissors";
    } else if (computerChoice === "paper" && humanChoice === "rock") {
      ++computerScore;
      return "You lose! Paper covers Rock";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      ++humanScore;
      return "You win! Paper covers Rock";
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
      ++computerScore;
      return "You lose! Scissors slice Paper";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      ++humanScore;
      return "You win! Scissors cut Paper";
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
      ++computerScore;
      return "You lose! Rock crushes Scissors";
    }
  };

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      logTotal.textContent = playRound(
        e.currentTarget.dataset.choice,
        getComputerChoice(),
      );
      playerScore.textContent = humanScore;
      compScore.textContent = computerScore;
    });
  });
};

playGame();
