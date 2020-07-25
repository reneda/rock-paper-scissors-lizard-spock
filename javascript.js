
document.addEventListener('DOMContentLoaded', () => {
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("sc");
const lizard_div = document.getElementById("l");
const spock_div = document.getElementById("sp");

function getComputerChoice() {
    const choices = ['r', 'p', 'sc', 'l','sp'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "sc") return "Scissors";
    if (letter === "l") return "Lizard";
    else return "Spock" ;

}

function win(userChoice, computerChoice) {
   
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 1000);
}

function lose(userChoice, computerChoice) {

    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}.  You lost.`
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 1000);
}

function draw(userChoice, computerChoice) {
   
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}.  It's a draw.`
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 1000);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rsc":
        case "rl":
        case "pr":
        case "psp":
        case "scp":
        case "scl":
        case "ls":
        case "lp":
        case "spr":
        case "spsc":
        win(userChoice, computerChoice);
        break;
        case "scr":
        case "lr":
       case "rp":
       case "spp":
       case "psc":
       case "lsc":
       case "sl":
       case "pl":
       case "rsp":
       case "scsp":
 lose(userChoice, computerChoice);
        break;
        case "rr":
        case "pp":
        case "scsc":
        case "spsp":
        case "ll":
        draw(userChoice, computerChoice);
        break;

    }
}

function main() {


    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissors_div.addEventListener('click', function() {
        game("sc");
    })
    lizard_div.addEventListener('click', function() {
        game("l");
    })
    spock_div.addEventListener('click', function() {
        game("sp");
    })

}
main();
});