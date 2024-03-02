//<><><><>Query Selectors<><><><>
var playClassicButton = document.querySelector(".play-classic-button");
var playAdvancedButton = document.querySelector(".play-advanced-button");
var rpsIconDisplay = document.querySelector(".weapon-choices-rps")
var dfIconDisplay = document.querySelector(".weapon-choices-df")

var rockSelect = document.querySelector("#rock-select");
var paperSelect = document.querySelector("#paper-select");
var scissorsSelect = document.querySelector("#scissors-select");
var fireSelect = document.querySelector("#fire-select")
var dinoSelect = document.querySelector("#dino-select")

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

rockSelect.addEventListener('click', function(){
    getRPSResult("Rock")
});
paperSelect.addEventListener('click', function() {
    getRPSResult("Paper")
});
scissorsSelect.addEventListener('click', function() {
    getRPSResult("Scissors")
});
dinoSelect.addEventListener('click', function() {
    getRPSesult("Dinosaur")
});
fireSelect.addEventListener('click', function() {
    getRPSResult("Fire");
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

cpuImage.innerText = cpuPlayer.image
humanImage.innerText = humanPlayer.image
cpuName.innerText = cpuPlayer.name
humanName.innerText = humanPlayer.name
var humanNewCount = 0;
var cpuNewCount = 0;



//<><><>Functions<><><>
function playClassic(){
    rpsIconDisplay.classList.remove("hidden")
}
function playAdvanced(){
    rpsIconDisplay.classList.remove("hidden")
    dfIconDisplay.classList.remove("hidden")
}

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
        (humanChoice === "Scissors" && cpuChoice === "Paper") ||
        (humanChoice === "Paper" && cpuChoice === "Rock")){
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

function getRPSResult(humanChoice){
    bannerDisplay.innerText = '';
    var cpuChoice = cpuTurnRPS();
    //create function for winner
    //create function for database
            //"____" is the winner &
            //"Winner Count _____"
    if (humanChoice === cpuChoice){
        //more functions needed
        tieGame(humanChoice, cpuChoice)
    } else if  
        ((humanChoice === "Rock" && cpuChoice === "Scissors") ||
        (humanChoice === "Scissors" && cpuChoice === "Paper") ||
        (humanChoice === "Paper" && cpuChoice === "Rock")){
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



function tieGame(humanChoice) {
    if (humanChoice === "Rock"){
        bannerDisplay.innerText = "Rocky! Rocky! Rocky! 👔 match!"
    } else if 
        (humanChoice === "Scissors"){
        bannerDisplay.innerText = "SCISSOR ME TIMBERS! 👔 match!"
    } else {
        bannerDisplay.innerText = `Paper Boi, Paper Boi! All about that paper, boy!
        👔 match!`
    }
}


function humanWins(humanChoice, cpuChoice) {
    bannerDisplay.innerText = `${humanChoice} beats ${cpuChoice}! ${humanPlayer.name} is a winner!`
}

function cpuWins(humanChoice, cpuChoice) {
    bannerDisplay.innerText = `${cpuChoice} beats ${humanChoice}! You get nothing! ${cpuPlayer.name} wins! Good day!`
}


function displayHumanWin(humanNewCount){
    humanWinsDisplay.innerText = humanNewCount;
}

function displayCpuWin(cpuNewCount){
    cpuWinsDisplay.innerText = cpuNewCount;
}