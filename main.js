//<><><><>Query Selectors<><><><>
var bannerDisplay = document.querySelector(".banner");
var changeGameButton = document.querySelector(".change-game-button");
var chooseGameDisplay = document.querySelector(".choose-game");
var cpuChoiceDisplay = document.querySelector(".cpu-choice-display");
var cpuImage = document.querySelector(".cpu-image");
var cpuName = document.querySelector(".cpu-name");
var cpuWinsDisplay = document.querySelector(".cpu-wins");
var dinoSelect5 = document.querySelector("#dino-select-5");
var fireSelect5 = document.querySelector("#fire-select-5");
var headerMainDisplayRPS = document.querySelector(".header-main-rps");
var headerMainDisplayRPSDF = document.querySelector(".header-main-rpsdf");
var humanChoiceDisplay = document.querySelector(".human-choice-display");
var humanImage = document.querySelector(".human-image");
var humanName = document.querySelector(".human-name");
var humanWinsDisplay = document.querySelector(".human-wins");
var matchResultsDisplay = document.querySelector(".match-results");
var paperSelect = document.querySelector("#paper-select");
var paperSelect5 = document.querySelector("#paper-select-5");
var playClassicButton = document.querySelector(".play-classic-button");
var playAdvancedButton = document.querySelector(".play-advanced-button");
var rockSelect = document.querySelector("#rock-select");
var rockSelect5 = document.querySelector("#rock-select-5");
var rpsIconDisplay = document.querySelector(".weapon-choices-rps");
var rpsdfIconDisplay = document.querySelector(".weapon-choices-rpsdf");
var scissorsSelect = document.querySelector("#scissors-select");
var scissorsSelect5 = document.querySelector("#scissors-select-5");

//<><><>Event Listeners Classic<><><>
playClassicButton.addEventListener('click', playClassic);
playAdvancedButton.addEventListener('click', playAdvanced);
changeGameButton.addEventListener('click', changeGame);

rockSelect.addEventListener('click', function(){
    getRPSResult("Rock")
});
paperSelect.addEventListener('click', function() {
    getRPSResult("Paper")
});
scissorsSelect.addEventListener('click', function() {
    getRPSResult("Scissors")
});
//<><><>Event Listeners Advanced<><><>
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
//<><><>Player Profiles<><><>
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

cpuImage.innerText = cpuPlayer["image"];
humanImage.innerText = humanPlayer["image"];
cpuName.innerText = cpuPlayer["name"];
humanName.innerText = humanPlayer["name"];
var humanNewCount = 0;
var cpuNewCount = 0;

//<><><>Functions<><>
function playClassic(){
    rpsIconDisplay.classList.remove("hidden");
    rpsdfIconDisplay.classList.add("hidden");
    chooseGameDisplay.classList.add("hidden");
    changeGameButton.classList.remove("hidden");
    headerMainDisplayRPS.classList.remove("hidden");
    headerMainDisplayRPSDF.classList.add("hidden");
    matchResultsDisplay.classList.add("hidden");
    bannerDisplay.innerText = 'CHOOSE YOUR FIGHTER!';
}
function playAdvanced(){
    rpsdfIconDisplay.classList.remove("hidden");
    rpsIconDisplay.classList.add("hidden");
    chooseGameDisplay.classList.add("hidden");
    changeGameButton.classList.remove("hidden");
    headerMainDisplayRPSDF.classList.remove("hidden");
    headerMainDisplayRPS.classList.add("hidden");
    matchResultsDisplay.classList.add("hidden");
    bannerDisplay.innerText = 'CHOOSE YOUR FIGHTER!';
}

function changeGame(){
    rpsdfIconDisplay.classList.add('hidden');
    rpsIconDisplay.classList.add('hidden');
    headerMainDisplayRPS.classList.remove("hidden");
    headerMainDisplayRPSDF.classList.add("hidden");
    chooseGameDisplay.classList.remove("hidden");
    bannerDisplay.innerText = 'CHOOSE YOUR GAME!';
}

function cpuTurnRPS(){
    var randomIndex = Math.floor(Math.random() * rpsShoot.length);
    var cpuChoice = rpsShoot[randomIndex];
    return cpuChoice;
};

function cpuTurnRPSDF(){
    var randomIndex = Math.floor(Math.random() * rpsdfShoot.length);
    var cpuChoice = rpsdfShoot[randomIndex];
    return cpuChoice;
};


function getRPSResult(humanChoice){
    bannerDisplay.innerText = '';
    var cpuChoice = cpuTurnRPS();
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
    setTimeout(playClassic, 1500);
};

function getRPSDFResult(humanChoice){
    bannerDisplay.innerText = '';
    var cpuChoice = cpuTurnRPSDF();
    displayResults(humanChoice, cpuChoice)
    if (humanChoice === cpuChoice){
        tieGame(humanChoice, cpuChoice)
    } else if  
        ((humanChoice === "Rock" && ((cpuChoice === "Scissors") || (cpuChoice === "Dinosaur"))) ||
        (humanChoice === "Paper" && ((cpuChoice === "Rock")     || (cpuChoice === "Fire")))     ||
        (humanChoice === "Scissors" && ((cpuChoice === "Paper") ||  (cpuChoice === "Dinosaur")))||
        (humanChoice === "Dinosaur" && ((cpuChoice === "Fire")  || (cpuChoice === "Paper")))    ||
        (humanChoice === "Fire" && ((cpuChoice === "Scissors")  ||  (cpuChoice === "Rock")))
        ){
        humanNewCount++;
        displayHumanWin(humanNewCount);
         humanWins(humanChoice, cpuChoice);
    } else { 
        cpuNewCount++;
        displayCpuWin(cpuNewCount);
        cpuWins(humanChoice, cpuChoice);
    }
    setTimeout(playAdvanced, 1500);
};

function tieGame(humanChoice) {
    if (humanChoice === "Rock"){
        bannerDisplay.innerText = "Don't take this for granite! TIE 👔 match!"
    } else if 
        (humanChoice === "Scissors"){
        bannerDisplay.innerText = "You can't cut loose! TIE 👔 match!"
    } else if 
        (humanChoice === "Paper"){
        bannerDisplay.innerText = "You refused to fold! TIE 👔 match!"
    } else if 
        (humanChoice === "Dinosaur"){
        bannerDisplay.innerText = "Clever girls! TIE 👔 match!"
    } else
        bannerDisplay.innerText = "Don't get burned out! TIE 👔 match!"
};

function displayResults(humanChoice, cpuChoice){
    displayHumanChoice(humanChoice);
    displayCpuChoice(cpuChoice);
    changeGameButton.classList.add("hidden");
    rpsdfIconDisplay.classList.add("hidden");
    rpsIconDisplay.classList.add("hidden");
    matchResultsDisplay.classList.remove("hidden");
};

function displayHumanChoice(humanChoice){
    if (humanChoice === "Rock"){
        humanChoiceDisplay.innerHTML = `<img class="rock-image" src="./assets/rock.png" alt="Rock Weapon Selection"></img>`}
    else if (humanChoice === "Scissors"){
        humanChoiceDisplay.innerHTML = `<img class="scissors-image" src="./assets/scissors.png" alt="Scissors Weapon Selection"></img>`}
    else if (humanChoice === "Paper"){
        humanChoiceDisplay.innerHTML = `<img class="paper-image" src="./assets/paper.png" alt="Paper Weapon Selection"></img>`}
    else if (humanChoice === "Dinosaur"){
        humanChoiceDisplay.innerHTML = `<img class="dino-image" src="./assets/dino.png" alt="Dinosaur Weapon Selection"></img>`}
    else {humanChoiceDisplay.innerHTML = `<img class="fire-image" src="./assets/fire.png" alt="Fire Weapon Selection"></img>`}
};

function displayCpuChoice(cpuChoice){
    if (cpuChoice === "Rock"){cpuChoiceDisplay.innerHTML = `<img class="rock-image" src="./assets/rock.png" alt="Rock Weapon Selection"></img>`}
    else if (cpuChoice === "Scissors"){cpuChoiceDisplay.innerHTML = `<img class="scissors-image" src="./assets/scissors.png" alt="Scissors Weapon Selection"></img>`}
    else if (cpuChoice === "Paper"){cpuChoiceDisplay.innerHTML = `<img class="paper-image" src="./assets/paper.png" alt="Paper Weapon Selection"></img>`}
    else if (cpuChoice === "Dinosaur"){cpuChoiceDisplay.innerHTML = `<img class="dino-image" src="./assets/dino.png" alt="Dinosaur Weapon Selection"></img>`}
    else {cpuChoiceDisplay.innerHTML = `<img class="fire-image" src="./assets/fire.png" alt="Fire Weapon Selection"></img>`}
};

function humanWins(humanChoice, cpuChoice) {
    bannerDisplay.innerText = `${humanChoice} beats ${cpuChoice}! ${humanPlayer["name"]} is a WINNER!`;
};

function cpuWins(humanChoice, cpuChoice) {
    bannerDisplay.innerText = `YOU LOSE! ${cpuChoice} beats ${humanChoice}! ${cpuPlayer["name"]} wins!`;
};

function displayHumanWin(humanNewCount){
    humanWinsDisplay.innerText = humanNewCount;
};

function displayCpuWin(cpuNewCount){
    cpuWinsDisplay.innerText = cpuNewCount;
};