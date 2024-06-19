// GAME RULES:
// Kitsune (Fox) beats Tanuki (Raccoon Dog) because the fox is smarter.
// Tanuki (Raccoon Dog) beats Me (Eye) because the raccoon dog is resilient.
// Me (Eye) beats Kitsune (Fox) because rain hinders the fox.

// Summary
// Kitsune beats Tanuki
// Tanuki beats Me
// Me beats Kitsune

// KiTaMe

console.log("Initiate Code 2");

let rounds = parseInt(prompt("How many rounds do you want to play KiTaMe?"));
console.log("Rounds: " + rounds);
let playerScore = 0;
let computerScore = 0;

playGame(rounds);

function playGame(numOfRounds) {

    for (let i = 0; i < numOfRounds; i++) {
        let computerChoice1 = getComputerChoice();
        console.log("Computer Choice: " + computerChoice1);

        let playerChoice1 = getPlayerChoice();
        console.log("Player Choice: " + playerChoice1);

        playRound(playerChoice1, computerChoice1);
    }
    alert("Your Score: " + playerScore + "\nPC Score: " + computerScore);
}

function playRound(playerChoice, computerChoice) {
    let winner = undefined;
    switch (playerChoice) {
        case "kitsune": switch(computerChoice) {
            case "kitsune": winner = 2;
            break;
            case "tanuki": winner = 1;
            break;
            case "me": winner = 0;
            break;
            default: console.log("somehow an error occured");

        }
        break;
        case "tanuki": switch(computerChoice) {
            case "kitsune": winner = 0; break;
            case "tanuki": winner = 2; break;
            case "me": winner = 1; break;
            default: console.log("somehow an error occured");
        }
        break;
        case "me": switch(computerChoice) {
            case "kitsune": winner = 1; break;
            case "tanuki": winner = 0; break;
            case "me": winner = 2; break;
            default: console.log("somehow an error occured");
        }
        break;
        default: console.log("somehow an error occured");
    }

    if (winner == 0) {
        alert("LET'S GOOO YOU WON BRO");
        playerScore++;
    } else if (winner == 1) {
        alert("Damn, didn't know you sucked hard");
        computerScore++;
    } else if (winner == 2) {
        alert("gahdam it's a draw");
    } else {
        console.log("somehow an error occured");
        // console.log(e.stack);
    }
}

function getPlayerChoice() {
    do {
        Hchoice = prompt("Kitsune, Tanuki, or Me?");
        Hchoice = Hchoice.toLowerCase();
    } while (Hchoice != "kitsune" && Hchoice != "tanuki" && Hchoice != "me");

    switch (Hchoice) {
        case "kitsune": return Hchoice; break;
        case "tanuki": return Hchoice; break;
        case "me": return Hchoice; break;
        default: {
            console.log("BRUDAH ENTER CORRECT NAME SMH");
            getPlayerChoice();
        }
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