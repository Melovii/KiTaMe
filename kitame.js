// KiTaMe

console.log("Initiate Code 2");

let playerScore = 0;
let computerScore = 0;

// rock = tanuki //
// paper = me //
// scissors = kitsune //

const fox = document.createElement("img");
fox.src = "../images/fox.png";
fox.style.width = "250px";
fox.style.height = "auto";

const eye = document.createElement("img");
eye.src = "../images/eye.png";
eye.style.width = "250px";
eye.style.height = "auto";

const raccoon = document.createElement("img");
raccoon.src = "../images/raccoon.png";
raccoon.style.width = "250px";
raccoon.style.height = "auto";

const box1 = document.querySelector(".box1");
box1.setAttribute("class", "box");
box1.appendChild(fox);

const box2 = document.querySelector(".box2");
box2.setAttribute("class", "box");
box2.appendChild(eye);

const box3 = document.querySelector(".box3");
box3.setAttribute("class", "box");
box3.appendChild(raccoon);


// -------------

const option1 = document.createElement("button");
option1.setAttribute("class", "options");
option1.textContent = "Kitsune";
option1.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    console.log(`Computer choice: ${computerChoice}`);
    const playerChoice = option1.textContent.toLowerCase()
    console.log(`Player choice: ${playerChoice}`);
    playRound(playerChoice, computerChoice);
})

// TODO: MAKE SET WINNER METHOD WHICH CHECKS WINNER STATE + PLAYED CHARACTERS + IMG

const option2 = document.createElement("button");
option2.setAttribute("class", "options");
option2.textContent = "Me";
option2.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    console.log(`Computer choice: ${computerChoice}`);
    const playerChoice = option2.textContent.toLowerCase()
    console.log(`Player choice: ${playerChoice}`);
    playRound(playerChoice, computerChoice);
})

const option3 = document.createElement("button");
option3.setAttribute("class", "options");
option3.textContent = "Tanuki";
option3.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    console.log(`Computer choice: ${computerChoice}`);
    const playerChoice = option3.textContent.toLowerCase()
    console.log(`Player choice: ${playerChoice}`);
    playRound(playerChoice, computerChoice);
})

box1.appendChild(option1);
box2.appendChild(option2);
box3.appendChild(option3);


const results = document.querySelector('.winner');
results.style.justifyContent = 'space-evenly';

const yourChoice = document.createElement('div');
const playerIMG = document.createElement('img');
playerIMG.setAttribute('class', 'elements');
yourChoice.textContent = 'Your Choice';
yourChoice.setAttribute('class', 'resultStyle');
results.appendChild(yourChoice);

const winnerDIV = document.createElement('div');
const winnerIMG = document.createElement('img');
winnerDIV.textContent = 'Winner';
winnerIMG.setAttribute('class', 'elements');
winnerDIV.setAttribute("class", "resultStyle");
results.appendChild(winnerDIV);

const theirChoice = document.createElement('div');
const pcIMG = document.createElement('img');
theirChoice.textContent = "PC's Choice";
pcIMG.setAttribute('class', 'elements');
theirChoice.setAttribute('class', 'resultStyle');
results.appendChild(theirChoice);


function playRound(playerChoice, computerChoice) {
    let winner = undefined;
    switch (playerChoice) {
        case "kitsune": {
            playerIMG.src = '../images/fox.png';
            yourChoice.textContent = 'You Chose KITSUNE!';
            switch(computerChoice) {
                case "kitsune": {
                    pcIMG.src = '../images/fox.png';
                    theirChoice.textContent = "The PC Chose KITSUNE!";
                    winner = 2;
                    break;
                }
                case "tanuki": {
                    pcIMG.src = '../images/raccoon.png';
                    theirChoice.textContent = "The PC Chose TANUKI!";
                    winner = 1;
                    break;
                }
                case "me": {
                    pcIMG.src = '../images/eye.png';
                    theirChoice.textContent = "The PC Chose ME!";
                    winner = 0;
                    break;
                }
                default: console.log("error occured with computerChoice switch case");
            }
        }
        break;
        case "tanuki": {
            playerIMG.src = '../images/raccoon.png';
            yourChoice.textContent = 'You Chose TANUKI!';
            switch (computerChoice) {
                case "kitsune": {
                    pcIMG.src = '../images/fox.png'
                    theirChoice.textContent = "The PC Chose KITSUNE!";
                    winner = 0;
                    break;
                }
                case "tanuki": {
                    pcIMG.src = '../images/raccoon.png'
                    theirChoice.textContent = "The PC Chose TANUKI!";
                    winner = 2;
                    break;
                }
                case "me": {
                    pcIMG.src = '../images/eye.png'
                    theirChoice.textContent = "The PC Chose ME!";
                    winner = 1;
                    break;
                }
                default:
                    console.log("error occured with computerChoice switch case");
            }
        }
        break;
        case "me":
        {
            playerIMG.src = '../images/eye.png';
            yourChoice.textContent = 'You Chose ME!';
            switch(computerChoice) {
                case "kitsune": {
                    pcIMG.src = '../images/fox.png'
                    theirChoice.textContent = "The PC Chose KITSUNE!";
                    winner = 1;
                    break;
                }
                case "tanuki": {
                    pcIMG.src = '../images/raccoon.png'
                    theirChoice.textContent = "The PC Chose TANUKI!";
                    winner = 0;
                    break;
                }
                case "me": {
                    pcIMG.src = '../images/eye.png'
                    theirChoice.textContent = "The PC Chose ME!";
                    winner = 2;
                    break;
                }
                default: console.log("error occured with computerChoice switch case");
            }
        }
        break;
        default: console.log("error occured with playerChoice switch case");
    }

    if (winner == 0) {
        console.log("You Won");
        winnerDIV.textContent = "LETS GOOO YOU WON BRO";
        playerScore++;
    } else if (winner == 1) {
        console.log("The PC Won");
        winnerDIV.textContent = "Damn, you suck.";
        computerScore++;
    } else if (winner == 2) {
        console.log("It's a Draw!");
        winnerDIV.textContent = "gahdam it's a draw";
    } else {
        console.log("error occured with winner declaration");
    }

    if (computerScore > 5) {
        winnerDIV.textContent = "L THE PC WON LMAO";
        option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
    } else if (playerScore > 5) {
        winnerDIV.textContent = "Nice win bro.";
        option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
    }
}

function getComputerChoice() {
    let PCchoice = Math.floor(((Math.random() * 3) + 1));
    switch (PCchoice) {
        case 1: return "kitsune"; break;
        case 2: return "tanuki"; break;
        case 3: return "me"; break;
        default: console.log("BRUDAH THIS PC STUPID CAN'T ENTER PROPER NAME SMH");
    }
}