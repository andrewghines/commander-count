//select increment and decrement buttons
const lifePlusButton = document.getElementById("life-plus-button");
const lifeMinusButton = document.getElementById("life-minus-button");
const p2PlusButton = document.getElementById("p2-commander-damage-plus-button");
const p2MinusButton = document.getElementById("p2-commander-damage-minus-button");
const p3PlusButton = document.getElementById("p3-commander-damage-plus-button");
const p3MinusButton = document.getElementById("p3-commander-damage-minus-button");
const p4PlusButton = document.getElementById("p4-commander-damage-plus-button");
const p4MinusButton = document.getElementById("p4-commander-damage-minus-button");
const plainsPlusButton = document.getElementById("plains-plus-button");
const plainsMinusButton = document.getElementById("plains-minus-button");
const swampPlusButton = document.getElementById("swamp-plus-button");
const swampMinusButton = document.getElementById("swamp-minus-button");
const mountainPlusButton = document.getElementById("mountain-plus-button");
const mountainMinusButton = document.getElementById("mountain-minus-button");
const forestPlusButton = document.getElementById("forest-plus-button");
const forestMinusButton = document.getElementById("forest-minus-button");
const islandPlusButton = document.getElementById("island-plus-button");
const islandMinusButton = document.getElementById("island-minus-button");
const colorlessPlusButton = document.getElementById("colorless-plus-button");
const colorlessMinusButton = document.getElementById("colorless-minus-button");

//select reset button
const resetButton = document.getElementById("reset-button")


//select total count
const lifeCount = document.getElementById("life-counter");
const p2DamageCounter = document.getElementById("p2-commander-damage-counter");
const p3DamageCounter = document.getElementById("p3-commander-damage-counter");
const p4DamageCounter = document.getElementById("p4-commander-damage-counter");
const plainsCounter = document.getElementById("plains-counter");
const swampCounter = document.getElementById("swamp-counter");
const mountainCounter = document.getElementById("mountain-counter");
const forestCounter = document.getElementById("forest-counter");
const islandCounter = document.getElementById("island-counter");
const colorlessCounter = document.getElementById("colorless-counter");

//variable to track count

var count = 40;
var p2Count = 0;
var p3Count = 0;
var p4Count = 0;
var plainsCount = 0;
var swampCount = 0;
var mountainCount = 0;
var forestCount = 0;
var islandCount = 0;
var colorlessCount = 0;

//display starting life
lifeCount.innerHTML = 40;
p2DamageCounter.innerHTML = 0;
p3DamageCounter.innerHTML = 0;
p4DamageCounter.innerHTML = 0;
plainsCounter.innerHTML = 0;
swampCounter.innerHTML = 0;
mountainCounter.innerHTML = 0;
forestCounter.innerHTML = 0;
islandCounter.innerHTML = 0;
colorlessCounter.innerHTML = 0;

//functions to add life, commander damage, and mana

const addLife = () => {
    count++;
    lifeCount.innerHTML = count;
}

const addP2CD = () => {
    p2Count++;
    p2DamageCounter.innerHTML = p2Count;
}

const addP3CD = () => {
    p3Count++;
    p3DamageCounter.innerHTML = p3Count;
}

const addP4CD = () => {
    p4Count++;
    p4DamageCounter.innerHTML = p4Count;
}

const addPlains = () => {
    plainsCount++;
    plainsCounter.innerHTML = plainsCount;
}

const addSwamp = () => {
    swampCount++;
    swampCounter.innerHTML = swampCount;
}

const addMountain = () => {
    mountainCount++;
    mountainCounter.innerHTML = mountainCount;
}

const addForest = () => {
    forestCount++;
    forestCounter.innerHTML = forestCount;
}

const addIsland = () => {
    islandCount++;
    islandCounter.innerHTML = islandCount;
}

const addColorless = () => {
    colorlessCount++;
    colorlessCounter.innerHTML = colorlessCount;
}

//function to subtract life or commander damage

const subtractLife = () => {
    count--;
    lifeCount.innerHTML = count;
}

const subtractP2CD = () => {
    p2Count--;
    p2DamageCounter.innerHTML = p2Count;
}

const subtractP3CD = () => {
    p3Count--;
    p3DamageCounter.innerHTML = p3Count;
}

const subtractP4CD = () => {
    p4Count--;
    p4DamageCounter.innerHTML = p4Count;
}

const minusPlains = () => {
    plainsCount--;
    plainsCounter.innerHTML = plainsCount;
}

const minusSwamp = () => {
    swampCount--;
    swampCounter.innerHTML = swampCount;
}

const minusMountain = () => {
    mountainCount--;
    mountainCounter.innerHTML = mountainCount;
}

const minusForest = () => {
    forestCount--;
    forestCounter.innerHTML = forestCount;
}

const minusIsland = () => {
    islandCount--;
    islandCounter.innerHTML = islandCount;
}

const minusColorless = () => {
    colorlessCount--;
    colorlessCounter.innerHTML = colorlessCount;
}

//function to reset counters

const reset = () => {
    count = 40;
    p2Count = 0;
    p3Count = 0;
    p4Count = 0;
    plainsCount = 0;
    swampCount = 0;
    mountainCount = 0;
    forestCount = 0;
    islandCount = 0;
    colorlessCount = 0;
    lifeCount.innerHTML = count;
    p2DamageCounter.innerHTML = p2Count;
    p3DamageCounter.innerHTML = p3Count;
    p4DamageCounter.innerHTML = p4Count;
    plainsCounter.innerHTML = plainsCount;
    swampCounter.innerHTML = swampCount;
    mountainCounter.innerHTML = mountainCount;
    forestCounter.innerHTML = forestCount;
    islandCounter.innerHTML = islandCount;
    colorlessCounter.innerHTML = colorlessCount;
}

//add click event to buttons
lifePlusButton.addEventListener("click", addLife);
lifeMinusButton.addEventListener("click", subtractLife);
p2PlusButton.addEventListener("click", addP2CD);
p2MinusButton.addEventListener("click", subtractP2CD);
p3PlusButton.addEventListener("click", addP3CD);
p3MinusButton.addEventListener("click", subtractP3CD);
p4PlusButton.addEventListener("click", addP4CD);
p4MinusButton.addEventListener("click", subtractP4CD);
plainsPlusButton.addEventListener("click", addPlains);
plainsMinusButton.addEventListener("click", minusPlains);
swampPlusButton.addEventListener("click", addSwamp);
swampMinusButton.addEventListener("click", minusSwamp);
mountainPlusButton.addEventListener("click", addMountain);
mountainMinusButton.addEventListener("click", minusMountain);
forestPlusButton.addEventListener("click", addForest);
forestMinusButton.addEventListener("click", minusForest);
islandPlusButton.addEventListener("click", addIsland);
islandMinusButton.addEventListener("click", minusIsland);
colorlessPlusButton.addEventListener("click", addColorless);
colorlessMinusButton.addEventListener("click", minusColorless);
resetButton.addEventListener("click", reset);