//<><><><>Query Selectors<><><><>
var playClassicButton = document.querySelector(".play-classic-button");
var playAdvancedButton = document.querySelector(".play-advanced-button");
var changeGameButton = document.querySelector(".change-game-button")
var rpsIconDisplay = document.querySelector(".weapon-choices-rps");
var rpsdfIconDisplay = document.querySelector(".weapon-choices-rpsdf");
var chooseGameDisplay = document.querySelector(".choose-game");
var matchResultsDisplay = document.querySelector(".match-results");
var humanChoiceDisplay = document.querySelector(".human-choice-display");
var cpuChoiceDisplay = document.querySelector(".cpu-choice-display");
var headerMainDisplayRPS = document.querySelector(".header-main-rps");
var headerMainDisplayRPSDF = document.querySelector(".header-main-rpsdf");

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
changeGameButton.addEventListener('click', changeGame)

rockSelect.addEventListener('click', function(){
    getRPSResult("Rock")
});
paperSelect.addEventListener('click', function() {
    getRPSResult("Paper")
});
scissorsSelect.addEventListener('click', function() {
    getRPSResult("Scissors")
});
//<><><>ADVANCED GAMES<><><>
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
// function 
//function createGame(){}
//function createPlayers(){}
//function saveWinsToStorage(){} [OPTIONAL?]
//function retreiveWinsFromStorage(){} [OPTIONAL?]
 


function playClassic(){
    rpsIconDisplay.classList.remove("hidden")
    rpsdfIconDisplay.classList.add("hidden")
    chooseGameDisplay.classList.add("hidden")
    changeGameButton.classList.remove("hidden")
    headerMainDisplayRPS.classList.remove("hidden")
    headerMainDisplayRPSDF.classList.add("hidden")
    matchResultsDisplay.classList.add("hidden")
    bannerDisplay.innerText = 'CHOOSE YOUR BATTLE'
}
function playAdvanced(){
    rpsdfIconDisplay.classList.remove("hidden")
    rpsIconDisplay.classList.add("hidden")
    chooseGameDisplay.classList.add("hidden")
    changeGameButton.classList.remove("hidden")
    headerMainDisplayRPSDF.classList.remove("hidden")
    headerMainDisplayRPS.classList.add("hidden")
    matchResultsDisplay.classList.add("hidden")
    bannerDisplay.innerText = 'CHOOSE YOUR BATTLE'
}

function changeGame(){
    rpsdfIconDisplay.classList.toggle('hidden');
    rpsIconDisplay.classList.toggle('hidden');
    headerMainDisplayRPS.classList.toggle("hidden");
    headerMainDisplayRPSDF.classList.toggle("hidden");
}

function cpuTurnRPS(){
    var randomIndex = Math.floor(Math.random() * rpsShoot.length);
    var cpuChoice = rpsShoot[randomIndex];
    return cpuChoice
};

function cpuTurnRPSDF(){
    var randomIndex = Math.floor(Math.random() * rpsdfShoot.length);
    var cpuChoice = rpsdfShoot[randomIndex];
    return cpuChoice;
};


function getRPSResult(humanChoice){
    bannerDisplay.innerText = '';
    var cpuChoice = cpuTurnRPS();
    console.log("HUMAN CHOICE RPS:", humanChoice)
    console.log("CPU CHOICE RPS:", cpuChoice)
    displayResults(humanChoice, cpuChoice)
    if (humanChoice === cpuChoice){
        tieGame(humanChoice, cpuChoice)
    } else if  
        ((humanChoice === "Rock" && cpuChoice === "Scissors") ||
        (humanChoice === "Paper" && cpuChoice === "Rock") ||
        (humanChoice === "Scissors" && cpuChoice === "Paper")
        ){
        humanNewCount++;
        displayHumanWin(humanNewCount);
        humanWins(humanChoice, cpuChoice);
    } else { 
        cpuNewCount++;
        displayCpuWin(cpuNewCount);
        cpuWins(humanChoice, cpuChoice);
    }
    setTimeout(playClassic, 2000)
}

function getRPSDFResult(humanChoice){
    bannerDisplay.innerText = '';
    var cpuChoice = cpuTurnRPSDF();
    //create function for winner
    //create function for database
            //"____" is the winner &
            //"Winner Count _____"
    console.log("HUMAN CHOICE RPSDF:", humanChoice)
    console.log("CPU CHOICE RPSDF:", cpuChoice)
    displayResults(humanChoice, cpuChoice)
    if (humanChoice === cpuChoice){
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
         //more functions needed
            humanNewCount++;
            displayHumanWin(humanNewCount);
            humanWins(humanChoice, cpuChoice);
    } else { 
        //more functions needed
        cpuNewCount++;
        displayCpuWin(cpuNewCount);
        cpuWins(humanChoice, cpuChoice);
    }
    setTimeout(playAdvanced, 2000)
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

function displayResults(humanChoice, cpuChoice){
    displayHumanChoice(humanChoice);
    displayCpuChoice(cpuChoice);
    changeGameButton.classList.add("hidden")
    rpsdfIconDisplay.classList.add("hidden");
    rpsIconDisplay.classList.add("hidden");
    matchResultsDisplay.classList.remove("hidden")
}

function displayHumanChoice(humanChoice){
    if (humanChoice === "Rock"){
        humanChoiceDisplay.innerHTML = `<img class="rock-image" src="./assets/rock.png"></img>`}
    else if (humanChoice === "Scissors"){
        humanChoiceDisplay.innerHTML = `<img class="scissors-image" src="./assets/scissors.png"></img>`}
    else if (humanChoice === "Paper"){
        humanChoiceDisplay.innerHTML = `<img class="paper-image" src="./assets/paper.png"></img>`}
    else if (humanChoice === "Dinosaur"){
        humanChoiceDisplay.innerHTML = `<img class="dino-image" src="./assets/dino.png"></img>`}
    else {humanChoiceDisplay.innerHTML = `<img class="fire-image" src="./assets/fire.png"></img>`}
}

function displayCpuChoice(cpuChoice){
    if (cpuChoice === "Rock"){cpuChoiceDisplay.innerHTML = `<img class="rock-image" src="./assets/rock.png"></img>`}
    else if (cpuChoice === "Scissors"){cpuChoiceDisplay.innerHTML = `<img class="scissors-image" src="./assets/scissors.png"></img>`}
    else if (cpuChoice === "Paper"){cpuChoiceDisplay.innerHTML = `<img class="paper-image" src="./assets/paper.png"></img>`}
    else if (cpuChoice === "Dinosaur"){cpuChoiceDisplay.innerHTML = `<img class="dino-image" src="./assets/dino.png"></img>`}
    else {cpuChoiceDisplay.innerHTML = `<img class="fire-image" src="./assets/fire.png"></img>`}
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