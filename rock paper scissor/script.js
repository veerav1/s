let userScore=0;
let computerScore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
// const scoreBoard=document.getElementById("score-board");
const userScorePara = document.querySelector("#user");
const computerScorePara = document.querySelector("#comp");
const genCompChoice = () => {
    const options =["rock","paper","scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
};
const drawGame = () => {
    
    msg.innerText= "Game was Draw Play Again";
    msg.style.backgroundColor="blue";
    
};
const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText = ` you win1 ${userChoice} beats ${compChoice}`;
        console.log("you win");
        msg.style.backgroundColor ="green";
    }
    else {
        computerScore++;
        computerScorePara.innerText=computerScore;
        msg.innerText = ` you lose! ${compChoice} beats ${userChoice}`;
        console.log("you lose");
        msg.style.backgroundColor ="red";
    }
}
        



const playGame = (userChoice) =>{
    
    
    const compChoice =genCompChoice();
    
    if(userChoice === compChoice)
    {
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //comp-paper,scissors
            userWin= compChoice === "paper"?false:true;
        }
        else if(userChoice==="paper")
        {
            // scissors, rock
            userWin = compChoice === "scissors"?false:true;

        }
        else
        {
            //rock,paper
            userWin = compChoice === "rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);

    }

}

choices.forEach((choice)=>{
    
    
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });


} );