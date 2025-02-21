let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice= () => {
    const options = ["rock", "paper", "scissors"]
    const randIdx= Math.floor(Math.random() * 3);
    return options[randIdx];
        // rock, paper, scissors

};
const drawGame= () =>{
    msg.innerText = "Game was draw. Play again";

    msg.style.backgroundColor = "081b31";
};

const showWinner = (userWin, choiceId, comChoice) =>
{
 if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${choiceId} beats ${comChoice}`;
    msg.style.backgroundColor = "green";
 }  else{
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = "You lose";
    msg.innerText = `You lost. ${comChoice} beats your ${choiceId}`;
    msg.style.backgroundColor = "red";
 }
}
const playGame = (choiceId)=>{
    
    // Generate computer choice
    const comChoice = genCompChoice();
    
     if(choiceId === comChoice){
drawGame();
     }else{
        let userWin = true;
        if(choiceId === "rock"){
            userWin = comChoice === "paper" ? false:true;
        }else if(choiceId === "paper"){
            userWin=comChoice === "scissors"? false: true;
        }else{
            userWin= comChoice === "rock" ? false: true;
        }
        showWinner(userWin,choiceId, comChoice);
     }

};
choices.forEach((choice)=>{
    choice.addEventListener("click",() => {
        const choiceId = choice.getAttribute("id");
        playGame(choiceId);
    });
});
