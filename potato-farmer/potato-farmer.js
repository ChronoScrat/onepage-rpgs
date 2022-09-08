// Potato Farmer JS
// The core of the Potato RPG game

// Scores

let DESTINY = 0;
let POTATOES = 0;
let ORCS = 0;
let POTATO_COST = 1;

// Roll Dice function

function rollDie(){
    return Math.floor(Math.random() * (6 - 1 + 1)) + 1
}

// Roll Die 1: Determines the Event

function rollDice(){

    die1 = rollDie();

    if(die1 == 1 || die1 == 2){

        writeConsole("In the Gardens...");

        die2 = rollDie();

        switch(die2){
            case 1:
                writeConsole("You happily root about all day in your garden.");
                writeConsole("<span style='color: green;'>+1 POTATO</span>");
                addScore("POTATOES",1);
                break;
            case 2:
                writeConsole("You narrowly avoid a visitor by hiding in a potato sack.");
                writeConsole("<span style='color: green;'>+1 POTATO</span> <br> <span style='color: green;'>+1 DESTINY</span>");
                addScore("POTATOES",1);
                addScore("DESTINY",1);
                break;
            case 3:
                writeConsole("A hooded stranger lingers outside your farm.");
                writeConsole("<span style='color: green;'>+1 DESTINY</span> <br> <span style='color: green;'>+1 ORC</span>");
                addScore("DESTINY",1);
                addScore("ORCS",1);
                break;
            case 4:
                writeConsole("Your field is ravaged in the night by unseen enemies.");
                writeConsole("<span style='color: green;'>+1 ORC</span> <br> <span style='color: red;'>-1 POTATO</span>");
                addScore("ORCS",1);
                addScore("POTATOES",-1);
                break;
            case 5:
                writeConsole("You trade potatoes for other delicious foodstuffs.");
                writeConsole("<span style='color: red;'>-1 POTATO</span>");
                addScore("POTATOES",-1);
                break;
            case 6:
                writeConsole("You burrow into a bumper crop of potatoes. Do you cry with joy? Possibly.");
                writeConsole("<span style='color: green;'>+2 POTATOES</span>");
                addScore("POTATOES",2);
                break;
        }

    } else if (die1 == 3 || die1 == 4) {
        
        writeConsole("A Knock in the Door...");

        die2 = rollDie();

        switch(die2){
            case 1:
                writeConsole("A distant cousin. They are after your potatoes. They may snitch on you.");
                writeConsole("<span style='color: green;'>+1 ORC</span>");
                addScore("ORCS",1);
                break;
            case 2:
                writeConsole("A dwarven stranger. You refuse them entry. Ghastly creatures.");
                writeConsole("<span style='color: green;'>+1 DESTINY</span>");
                addScore("DESTINY",1);
                break;
            case 3:
                writeConsole("A wizard strolls by. You pointedly draw the curtains.");
                writeConsole("<span style='color: green;'>+1 DESTINY</span> <br> <span style='color: green;'>+1 ORC</span>");
                addScore("DESTINY",1);
                addScore("ORCS",1);
                break;
            case 4:
                writeConsole("There are rumors of war in the reaches. You eat some potatoes.");
                writeConsole("<span style='color: green;'>+2 ORC</span> <br> <span style='color: red;'>-1 POTATO</span>");
                addScore("ORCS",2);
                addScore("POTATOES",-1);
                break;
            case 5:
                writeConsole("It's an elf. They are not a serious people.");
                writeConsole("<span style='color: green;'>+1 DESTINY</span>");
                addScore("DESTINY",1);
                break;
            case 6:
                writeConsole("It's a sack of potatoes from a generous neighbour. You really must remember to pay them a visit one of these years.");
                writeConsole("<span style='color: green;'>+2 POTATOES</span>");
                addScore("POTATOES",2);
                break;
        }

    } else {
        
        writeConsole("The World becomes a darker, more dangerous place. From now on, removing ORCS costs an additional POTATO.");
        addScore("POTATO_COST",1);

    }

}

// Write to Game Console

function writeConsole(message,colour){

    colour = colour || "inherit";

    document.getElementById("console").innerHTML = document.getElementById("console").innerHTML + '<p style="color: '+colour+'">'+message+'</p>';

}

// Change Scores

function addScore(score, number){

    switch(score){
        case "DESTINY":
            DESTINY = DESTINY + Number(number);
            if (DESTINY < 0){
                DESTINY = 0;
            };
            break;
        case "POTATOES":
            POTATOES = POTATOES + Number(number);
            if (POTATOES < 0){
                POTATOES = 0;
            };
            break;
        case "ORCS":
            ORCS = ORCS + Number(number);
            if (ORCS < 0){
                ORCS = 0;
            };
            break;
        case "POTATO_COST":
            POTATO_COST = POTATO_COST + Number(number);
            break;
    };

    updateScores();
    evalScores();
}

// Eval Scores

function evalScores(){

    if (DESTINY >= 10){

        writeConsole("An interfering bard or wizard turns up at your doorstep with a quest, and you are whisked away against your will on an adventure.", "blue");

        document.getElementById("play-button").disabled = true;
        document.getElementById("sacrifice-button").disabled = true;

    } else if(POTATOES >= 10){

        writeConsole("You have enough potatoes that you can go underground and not return to the surface until the danger is past. You nestle down into your burrow and enjoy your well earned rest.","blue");
        document.getElementById("play-button").disabled = true;
        document.getElementById("sacrifice-button").disabled = true;

    } else if (ORCS >= 10){

        writeConsole("Orcs finally find your potato farm. Alas, orcs are not so interested in potatoes as they are in eating you, and you end up in a cookpot.","blue");
        document.getElementById("play-button").disabled = true;
        document.getElementById("sacrifice-button").disabled = true;

    }

}

// Update Scoreboard

function updateScores(){

    document.getElementById("destiny").innerHTML = DESTINY;
    document.getElementById("potatoes").innerHTML = POTATOES;
    document.getElementById("orcs").innerHTML = ORCS;
    document.getElementById("potato-cost").innerHTML = POTATO_COST;

    percDestiny = DESTINY/10 * 100;
    percPotatoes = POTATOES/10 * 100;
    percOrcs = ORCS/10 * 100;

    document.getElementById("bar-destiny").style.width = percDestiny+"%";
    document.getElementById("bar-potatoes").style.width = percPotatoes+"%";
    document.getElementById("bar-orcs").style.width = percOrcs+"%";

}

// Game

function startGame(){
    document.getElementById("srt-button-div").style.display = "none";
    document.getElementById("game-button-div").style.display = "block";
}

function resetGame(){

    DESTINY = 0;
    POTATOES = 0;
    ORCS = 0;
    POTATO_COST = 1;

    updateScores();

    document.getElementById("console").innerHTML = "<h2>Game Console</h2><br><p>Welcome to Potato!</p><p>Click 'Start Game' to start the game.</p>";

    document.getElementById("srt-button-div").style.display = "block";
    document.getElementById("game-button-div").style.display = "none";

    document.getElementById("play-button").disabled = false;
    document.getElementById("sacrifice-button").disabled = false;

}

// Sacrifice Potatoes

function sacrificePotato(){

    if(POTATOES < POTATO_COST){
        writeConsole("You do not have enough potatoes to sacrifice.","red");
    } else{
        POTATOES = POTATOES - POTATO_COST;
        addScore("ORCS",-1);
        writeConsole(`You have sacrificed ${POTATO_COST} POTATO(ES) to remove 1 ORC`,"orange");
    }

}

// Rules

function showRules(){
    document.getElementById("rules-box").style.display = "block";
}

function hideRules(){
    document.getElementById("rules-box").style.display = "none";
}