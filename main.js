//<><><><>Query Selectors<><><><>
var playClassicButton = document.querySelector(".play-classic-button");
var playAdvancedButton = document.querySelector(".play-advanced-button");

var rockSelect = document.querySelector("#rock-select");
var paperSelect = document.querySelector("#paper-select");
var scissorsSelect = document.querySelector("#scissors-select");

var bannerDisplay = document.querySelector(".banner");
var cpuImage = document.querySelector(".cpu-image");
var humanImage = document.querySelector(".human-image");
var cpuName = document.querySelector(".cpu-name");
var humanName = document.querySelector(".human-name")

var humanWinsDisplay = document.querySelector(".human-wins");
var cpuWinsDisplay = document.querySelector(".cpu-wins");
var humanNewCount = 0;
var cpuNewCount = 0;

//<><><>event listeners<><><>
rockSelect.addEventListener('click', function(){
    getRPSResult("Rock")
});
paperSelect.addEventListener('click', function() {
    getRPSResult("Paper")
});
scissorsSelect.addEventListener('click', function() {
    getRPSResult("Scissors")
});

var rpsShoot = ["Rock", "Paper", "Scissors"];
var rpsdfShoot = ["Rock", "Paper", "Scissors", "Dino", "Fire"];
///^^^ give this a parameter "CHOICE" to change ______.length? Suggestion offered

//<><><>Functions<><><>
function cpuTurnRPS(){
    var randomIndex = Math.floor(Math.random() * rpsShoot.length);
    var cpuChoice = rpsShoot[randomIndex]
    console.log(cpuChoice)
    return cpuChoice
};

function cpuTurnRPSDF(){
    var randomIndex = Math.floor(Math.random() * rpsShoot.length);
    var cpuChoice = rpsShoot[randomIndex]
    console.log(cpuChoice)
    return cpuChoice
};

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

// function 
//function createGame(){}
//function createPlayers(){}
//function saveWinsToStorage(){} [OPTIONAL?]
//function retreiveWinsFromStorage(){} [OPTIONAL?]
//COMPLETED XXXXXXXfunction takeTurn(){} XXXXXXX
 



function getRPSResult(humanChoice){
    bannerDisplay.innerText = '';
    var cpuChoice = cpuTurnRPS();
    // console.log("HUMAN: ", humanChoice)
    // console.log("CPU: ", cpuChoice)
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
            console.log(humanNewCount)
            displayHumanWin(humanNewCount);
            humanWins(humanChoice, cpuChoice);
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
    bannerDisplay.innerText = `${humanChoice} beats ${cpuChoice}! You are a winner!`
}

function cpuWins(humanChoice, cpuChoice) {
    bannerDisplay.innerText = `${cpuChoice} beats ${humanChoice}! You get nothing! You lose! Good day!`
}


function displayHumanWin(humanNewCount){
    console.log("FUNCTION console log: ", humanNewCount)
    humanWinsDisplay.innerText = humanNewCount;
}

function displayCpuWin(cpuNewCount){
    console.log("FUNCTION console log: ", cpuNewCount)
    cpuWinsDisplay.innerText = cpuNewCount;
}