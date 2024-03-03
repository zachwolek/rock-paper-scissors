//<><><><>Query Selectors<><><><>
//<><>Buttons<><>
var playClassicButton = document.querySelector(".play-classic-button");
var playAdvancedButton = document.querySelector(".play-advanced-button");
// var changeGameButton = document.querySelector(".play-classic-button");

var rpsIconDisplay = document.querySelector(".weapon-choices-rps");
var rpsdfIconDisplay = document.querySelector(".change-game");

//<><>Weapon Choices<><>
var rockSelect = document.querySelector("#rock-select");
var paperSelect = document.querySelector("#paper-select");
var scissorsSelect = document.querySelector("#scissors-select");
var rockSelect5 = document.querySelector("#rock-select-5");
var paperSelect5 = document.querySelector("#paper-select-5");
var scissorsSelect5 = document.querySelector("#scissors-select-5");
var dinoSelect5 = document.querySelector("#dino-select-5");
var fireSelect5 = document.querySelector("#fire-select-5");


var bannerDisplay = document.querySelector(".banner");
var cpuImage = document.querySelector(".cpu-image");
var humanImage = document.querySelector(".human-image");
var cpuName = document.querySelector(".cpu-name");
var humanName = document.querySelector(".human-name")

var humanWinsDisplay = document.querySelector(".human-wins");
var cpuWinsDisplay = document.querySelector(".cpu-wins");

//<><><>event listeners<><><>
playClassicButton.addEventListener('click', playClassic)
playAdvancedButton.addEventListener('click', playAdvanced)
// changeGameButton.addEventListener('click', changeGame)

rockSelect.addEventListener('click', function(){
    getRPSResult("Rock")
});
paperSelect.addEventListener('click', function() {
    getRPSResult("Paper")
});
scissorsSelect.addEventListener('click', function() {
    getRPSResult("Scissors")
});

rockSelect5.addEventListener('click', function() {
    getRPSDFResult("Rock");
});
paperSelect5.addEventListener('click', function() {
    getRPSDFResult("Paper");
});
scissorsSelect5.addEventListener('click', function() {
    getRPSDFResult("Scissors");
}); 
dinoSelect5.addEventListener('click', function() {
    getRPSDFResult("Dinosaur")
});
fireSelect5.addEventListener('click', function() {
    getRPSDFResult("Fire");
}); 

var rpsShoot = ["Rock", "Paper", "Scissors"];
var rpsdfShoot = ["Rock", "Paper", "Scissors", "Dinosaur", "Fire"];
///^^^ give this a parameter "CHOICE" to change ______.length? Suggestion offered

var humanPlayer = {
    name: "Player One",
    image: "🥷",  
    winCount: humanNewCount,
};

var cpuPlayer = {
    name: "Evil Robot", 
    image: "🤖",
    winCount: cpuNewCount,
};

cpuImage.innerText = cpuPlayer.image;
humanImage.innerText = humanPlayer.image;
cpuName.innerText = cpuPlayer.name;
humanName.innerText = humanPlayer.name;
var humanNewCount = 0;
var cpuNewCount = 0;



//<><><>Functions<><><>
function playClassic(){
    rpsIconDisplay.classList.remove("hidden");
    rpsdfIconDisplay.classList.add("hidden");
}
function playAdvanced(){
    rpsIconDisplay.classList.add("hidden");
    rpsdfIconDisplay.classList.remove("hidden");
}

// function changeGame(){
//     if (rpsIconDisplay.style.display === "none"){
//         rpsIconDisplay.classList.remove("hidden");
//         rpsdfIconDisplay.classList.add("hidden");
//     } else 
//     rpsIconDisplay.classList.add("hidden");
//     rpsdfIconDisplay.classList.remove("hidden");
// }

function cpuTurnRPS(){
    var randomIndex = Math.floor(Math.random() * rpsShoot.length);
    var cpuChoice = rpsShoot[randomIndex]
    return cpuChoice
};

function cpuTurnRPSDF(){
    var randomIndex = Math.floor(Math.random() * rpsdfShoot.length);
    var cpuChoice = rpsdfShoot[randomIndex]
    console.log("RPSDF SHOOT: ", cpuChoice)
    return cpuChoice
};


// function 
//function createGame(){}
//function createPlayers(){}
//function saveWinsToStorage(){} [OPTIONAL?]
//function retreiveWinsFromStorage(){} [OPTIONAL?]
 


function getRPSResult(humanChoice){
    bannerDisplay.innerText = '';
    var cpuChoice = cpuTurnRPS();
    //create function for winner
    //create function for database
    //create function for DOM update
            //"____" is the winner &
            //"Winner Count _____"
    if (humanChoice === cpuChoice){
        //more functions needed
        tieGame(humanChoice, cpuChoice)
    } else if  
        ((humanChoice === "Rock" && cpuChoice === "Scissors") ||
        (humanChoice === "Paper" && cpuChoice === "Rock") ||
        (humanChoice === "Scissors" && cpuChoice === "Paper") 
        ){
            //more functions needed
            humanNewCount++;
            displayHumanWin(humanNewCount);
            humanWins(humanChoice, cpuChoice);
            /////Change name of displayHumanWin to clarify for COUNTER
            //// HumanWins change name to clarify for MATCH OUTCOME
    } else { 
        //more functions needed
        cpuNewCount++;
        displayCpuWin(cpuNewCount);
        cpuWins(humanChoice, cpuChoice);
    }
}

function getRPSDFResult(humanChoice){
    bannerDisplay.innerText = '';
    var cpuChoice = cpuTurnRPSDF();
    console.log("HUMAN SAYS: ", humanChoice)
    console.log("ROBOT SAYS: ", cpuChoice)
    //create function for winner
    //create function for database
            //"____" is the winner &
            //"Winner Count _____"
    if (humanChoice === cpuChoice){
        //more functions needed
        tieGame(humanChoice, cpuChoice)
    } else if  
        ((humanChoice === "Rock" && cpuChoice === "Scissors")    ||
        (humanChoice === "Rock" && cpuChoice === "Dinosaur")    ||
        (humanChoice === "Paper" && cpuChoice === "Rock")       ||
        (humanChoice === "Paper" && cpuChoice === "Fire")       ||
        (humanChoice === "Scissors" && cpuChoice === "Paper")   ||
        (humanChoice === "Scissors" && cpuChoice === "Dinosaur")||
        (humanChoice === "Dinosaur" && cpuChoice === "Fire")    ||
        (humanChoice === "Dinosaur" && cpuChoice === "Paper")   ||
        (humanChoice === "Fire" && cpuChoice === "Scissors")    ||
        (humanChoice === "Fire" && cpuChoice === "Rock")
        ){
        humanNewCount++;
        displayHumanWin(humanNewCount);
        humanWins(humanChoice, cpuChoice);
    } else { 
        cpuNewCount++;
        displayCpuWin(cpuNewCount);
        cpuWins(humanChoice, cpuChoice);
    }
}

function tieGame(humanChoice) {
    if (humanChoice === "Rock"){
        bannerDisplay.innerText = "Rocky! Rocky! Rocky! 👔 match!"
    } else if 
        (humanChoice === "Scissors"){
        bannerDisplay.innerText = "SCISSOR ME TIMBERS! 👔 match!"
    } else if 
        (humanChoice === "Paper"){
        bannerDisplay.innerText = `Paper Boi, Paper Boi! All about that paper, boy!
        👔 match!`
    } else if 
    (humanChoice === "Dinosaur"){
    bannerDisplay.innerText = `Clever girls! 👔 match!`
    } else
    bannerDisplay.innerText = "FIRE FIRE FIRE FIRE 👔 match!"
}

function humanWins(humanChoice, cpuChoice) {
    bannerDisplay.innerText = `${humanChoice} beats ${cpuChoice}! ${humanPlayer.name} is a WINNER!`
}

function cpuWins(humanChoice, cpuChoice) {
    bannerDisplay.innerText = `${cpuChoice} beats ${humanChoice}! ${cpuPlayer.name} wins! YOU LOSE!`
}


function displayHumanWin(humanNewCount){
    humanWinsDisplay.innerText = humanNewCount;
}

function displayCpuWin(cpuNewCount){
    cpuWinsDisplay.innerText = cpuNewCount;
}