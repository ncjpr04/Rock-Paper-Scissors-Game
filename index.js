let userScore = 0;
let compScore = 0;
let drawScore = 0;
let totalGames = 0;
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const drawScorePara = document.querySelector("#draw-score");
const gamesScorePara = document.querySelector("#total-games");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const generateCompChoice = () => {
    let options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        totalGames++;
        userScore++;
        userScorePara.innerText = userScore;
        gamesScorePara.innerText = totalGames;
        console.log("you won!");
        msg.innerText = `You won! Your ${userChoice} Beats ${compChoice}`; msg.style.backgroundColor = "Green";
    }
    else {
        totalGames++;
        compScore++;
        compScorePara.innerText = compScore;
        gamesScorePara.innerText = totalGames;
        console.log("you lose!");
        msg.innerText = `You Lose! ${compChoice} Beats Your ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }
};
const drawGame = (compChoice) => {
    drawScore++;
    totalGames++;
    drawScorePara.innerText = drawScore;
    gamesScorePara.innerText = totalGames;
    console.log("game was draw");
    msg.innerText = `Draw! Both Choose ${compChoice}`;
    msg.style.backgroundColor = "blue";

};
const playGame = (userChoice) => {
    console.log("user choice is : ", userChoice);
    // generate computer choice
    const compChoice = generateCompChoice();
    console.log("Comp choice is : ", compChoice);
    if (userChoice === compChoice) {
        // Draw
        drawGame(compChoice);
    }
    else {
        let userWin = true;
        if (userChoice === "Rock") {
            userWin = compChoice === "Paper" ? false : true;
        }
        else if (userChoice === "Paper") {
            userWin = compChoice === "Scissors" ? false : true;
        }
        else {
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})