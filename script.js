let playerChoiceAnnounce = document.getElementById('playerChoice')
let playerChoice = document.querySelectorAll('button')
let computerChoice = document.getElementById('computerChoice')
let winner = document.getElementById('winner')
let randomChoice
let userChoice

playerChoice.forEach(choice => choice.addEventListener("click", (e)=>{
    console.log(e.target.innerText)
    userChoice = e.target.innerText
    playerChoiceAnnounce.innerText = userChoice
    setComputerChoice()
    console.log(computerChoice.innerText)
    checkWinner()
}))

const setComputerChoice = () => {
    randomChoice = Math.floor(Math.random()*3+1)
    if (randomChoice === 1){
        computerChoice.innerText = "Rock"
    }
    if (randomChoice === 2){
        computerChoice.innerText = "Paper"
    }
    if (randomChoice === 3){
        computerChoice.innerText = "Scissors"
    }
}

const checkWinner = () => {

    console.log(computerChoice.innerText)
    console.log(userChoice)
    if (computerChoice.innerText === userChoice){
        winner.innerText = "Draw"
    } else
    if(computerChoice.innerText === "Rock" && userChoice === "Paper"){
        winner.innerText = "Player"
    } else
    if(computerChoice.innerText === "Rock" && userChoice === "Scissors"){
        winner.innerText = "Computer"
    } else
    if(computerChoice.innerText === "Paper" && userChoice === "Rock"){
        winner.innerText = "Computer"
    } else
    if(computerChoice.innerText === "Paper" && userChoice === "Scissors"){
        winner.innerText = "Player"
    } else
    if(computerChoice.innerText === "Scissors" && userChoice === "Paper"){
        winner.innerText = "Computer"
    } else
    if(computerChoice.innerText === "Scissors" && userChoice === "Rock"){
        winner.innerText = "Player"
    }
}
//need to reload page after a while?



