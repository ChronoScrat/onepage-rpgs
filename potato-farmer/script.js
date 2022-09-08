
let POTATOES = 0;
let DESTINY = 0;
let ORCS = 0;

function increaseAll(){
    POTATOES = POTATOES + 1;
    DESTINY = DESTINY + 1;
    ORCS = ORCS + 1;

    writeAll();
}

function writeAll(){
    document.getElementById("potatoes").innerHTML = POTATOES;
    document.getElementById("destiny").innerHTML = DESTINY;
    document.getElementById("orcs").innerHTML = ORCS;
}

function rollDie(){

    let die1 = rollDice();
    let die2 = rollDice();

    document.getElementById("dice1").innerHTML = die1;
    document.getElementById("dice2").innerHTML = die2;
}

function rollDice(){
    return Math.floor(Math.random() * (6 - 1 + 1)) + 1
}