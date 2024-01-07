let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const message =document.getElementById('msg');
const userMove=document.getElementById('user-move');
const computerMove=document.getElementById('computer-move');
const userScoreCount = document.getElementById('user-score');
const computerScoreCount = document.getElementById('comp-score');

const generateComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3); //0,1,2
  // return computer choice
  return options[randomIndex];
};

const drawGame = () => {
  console.log("Game was draw");
  message.innerText='🤝 Game was draw 🤝'
  message.style.backgroundColor="black"
};

const showWinner=(userWin,userChoice,computerChoice)=>{
  if(userWin){
    // console.log('You Win')
    userScore++;
    userScoreCount.innerText=userScore;
    message.innerText=`🕺🕺🕺🕺User Win🏆 ${userChoice} beats ${computerChoice} `
    message.style.backgroundColor="green"
  }else{
    // console.log('you lose')
    computerScore++;
    computerScoreCount.innerText=computerScore;
    message.innerText='🥵 You lose 🥵 '
    message.style.backgroundColor="red"
  }
}

const playGame = (userChoice) => {

  //userChoice
  console.log("userChoice =", userChoice);
  //generate computer choice
  const computerChoice = generateComputerChoice();
  computerMove.innerText=`Computer Move: ${computerChoice}`
  // console.log("computerChoice =", computerChoice);



  //win condition
  if (userChoice === computerChoice) {
    drawGame();
  } else {
    let userWin = true;
    if(userChoice==='rock'){
      //computer choice either paper or scissors
      userWin = computerChoice==='paper'?false :true
    }
    else if(userChoice==='paper'){
      //computer choice either rock or scissors
      userWin = computerChoice==='scissors'?true :false
    }else{
      // computer choice rock, paper
     userWin= computerChoice==='rock'?false:true
    }
      //after win
  // showWinner(userWin);
  showWinner(userWin,userChoice,computerChoice);
  }

};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    userMove.innerText=`User Move: ${userChoice}`
    playGame(userChoice);
  });
});
