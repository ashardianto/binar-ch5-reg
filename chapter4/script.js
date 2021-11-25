// GET ELEMENT

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const playerScoreCount = document.getElementById("player-score")
const compScoreCount = document.getElementById("computer-score")
let playerScore = 0;
let computerScore = 0;
let result = document.querySelector(".info-typo");
const refresh = document.getElementById("refresh");
const playerChoice = document.querySelectorAll(".player-pick img");
const computerChoice = document.querySelectorAll(".computer-pick img");

// FUNCTION

function getPlayerName() {
    let playerName = document.querySelector(".player-name")
    let playerScoreBoard = document.querySelector('.player-point')
    let person = prompt("Please enter your name:", "") || "PLAYER";
    playerName.innerHTML = person.toUpperCase();
    playerScoreBoard.innerHTML = person.toUpperCase();
}

function gameFunction() {
    rock.addEventListener('click', function(e) {
        game("rock", e.currentTarget);
    });    
    paper.addEventListener('click', function(e) {
        game("paper", e.currentTarget);
    });    
    scissor.addEventListener('click', function(e) {
        game("scissor", e.currentTarget);
    });   
}

function win() {
    playerScore++;
    playerScoreCount.innerHTML = playerScore;
    compScoreCount.innerHTML = computerScore;
    result.innerHTML = "You Win!";
}
function lose() {
    computerScore++;
    playerScoreCount.innerHTML = playerScore;
    compScoreCount.innerHTML = computerScore;
    result.innerHTML = "You Lose!";
}
function draw() {
    playerScoreCount.innerHTML = playerScore;
    compScoreCount.innerHTML = computerScore;
    result.innerHTML = "Draw!";
}

function game(userChoice, target) {
    const computerChoice = playerComputerChoice();
    const playerElements = [].slice.call(document.querySelectorAll('.choice'));

    playerElements.forEach(e => (e.removeAttribute('style')));
    target.style.background = "white";

    switch (userChoice + computerChoice) {
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            win();
            break;
        case "scissorrock":
        case "rockpaper":
        case "paperscissor":
            lose();
            break;
        case "scissorscissor":
        case "paperpaper":
        case "rockrock":
            draw();
    }
}

function playerComputerChoice() {
    const choices = ['rock', 'paper', 'scissor']
    const randomChoice = Math.floor(Math.random() * choices.length);

    const computerElement  = document.getElementById('computer-' + choices[randomChoice]);
    const computerElements = [].slice.call(document.querySelectorAll('.choice-computer'));

    computerElements.forEach(e => (e.removeAttribute('style')));
    computerElement.style.backgroundColor = 'white';

    return choices[randomChoice];
}

refresh.addEventListener('click', function() {
    const playerElements = [].slice.call(document.querySelectorAll('.choice'));
    playerElements.forEach(e => (e.removeAttribute('style')));

    const computerElements = [].slice.call(document.querySelectorAll('.choice-computer'));
    computerElements.forEach(e => (e.removeAttribute('style')));
    result.innerHTML = "VS"
    playerScore = 0;
    computerScore = 0;
    playerScoreCount.innerHTML = playerScore;
    compScoreCount.innerHTML = computerScore;
    
})

getPlayerName();
gameFunction();