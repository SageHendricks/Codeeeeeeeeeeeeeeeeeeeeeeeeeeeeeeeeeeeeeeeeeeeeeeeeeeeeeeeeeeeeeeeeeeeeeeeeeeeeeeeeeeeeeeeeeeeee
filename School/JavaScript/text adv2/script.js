//variables
var name;
var pClass;
var userChoice;

//constructors
function Character(name, atk,hp,spe,acuracy){
    name;
    atk;
    hp;
    spe;
    acuracy;
}

//enemys
var bee = new Character('Bee', 20, 10, 17, 19);
var rat = new Character('Rat', 8, 20, 17, 13);
var ratKing = new Character('Rat King', 5, 100, 12, 18);
var ratTamer = new Character('Rat Tamer', 12, 60, 12, 18);

/*
//battle
function battle(){
    if(plsyer.spe > enemy.spe){
        if (enemy.hp <= 0){
            enemy.hp - player.atk
        }
        if (player.hp <= 0){
            player.hp - enemy.atk
        }
    }else{
        if (player.hp <= 0){
            player.hp - enemy.atk
        }
        if (enemy.hp <= 0){
            enemy.hp - player.atk
        }
    }
}
*/

//code
function start(){
    text = 'ello Trveler, what is your name?';
    name = prompt(text);
    chooseClass();
}

function chooseClass(){
    text = ['hello', name, 'please pick your class \n(1)Archer: Average Stats all around \n(2)Fighter: heightened HP, lowered Atk \n(3)Rogue: hightened atk, lowered HP'].join(' ');
    userChoice = prompt(text);
    switch(userChoice){
        case '1':
            //archer
            pClass = new Character(name, 15, 80, 15, 15);
            break;
        case '2':
            //fighter
            pClass = new Character(name, 10, 100, 12, 18);
            break;
        case '3':
            //rogue
            pClass = new Character(name, 20, 60, 18, 12);
            break;
        default:
            if (userChoice === null) {
                return;
            }
            alert(error);
            start();
            break;
    }
    wake()
}

function wake(){
    text = ['goodmornng,', name, 'you wake up and your brother is gone with a note saying was kidnapped,, do you wish to go on a quest?\n(1)yes\n(2)no'].join(' ');
    userChoice = prompt(text);
    switch(userChoice){
        case '1':
            yesQuest();
            break;
        case '2':
            noQuest();
            break;
        default:
            if (userChoice === null) {
                return;
            }
            alert(error);
            start();
            break;
    }
}

function noQuest(){
    text = ['Safe choice', name, 'sadly, your brother never came home, though you did receive a toe in the mail? odd,,'].join(' ')
    alert(text);
}

function yesQuest(){
        text = ['hey', name, 'what would you like to do? You can\n(1)Ask round town if theyve seen him\n(2)look in the cave\n(3)look in the woods'].join(' ');
    userChoice = prompt(text);
    switch(userChoice){
        case '1':
            askTown();
            break;
        case '2':
            cave()
            break;
        case '3':
            woods()
            break;
        default:
            if (userChoice === null) {
                return;
            }
            alert(error);
            start();
            break;
    }
}

function askTown(){
    text = ['you leave to ask around the town for any sightings of your brother, Andor, who do you ask?\n(1)the local mercant\n(2)the cleric'].join(' ');
    userChoice = prompt(text);
    switch(userChoice){
        case '1':
            merchant()
            break;
        case '2':
            cleric()
            break;
        default:
            if (userChoice === null) {
                return;
            }
            alert(error);
            start();
            break;
    }
}

function merchant(){
    text = ['the merchant says she has yet to see anything, however if she does shell run and tell you immediatly, what next? you can:\n(1)ask around town again\n(2)look in the local cave\n(3)wander throught the forest'].join(' ');
    userChoice = prompt(text);
    switch(userChoice){
        case '1':
            askTown();
            break;
        case '2':
            cave()
            break;
        case '3':
            woods();
            break;
        default:
            if (userChoice === null) {
                return;
            }
            alert(error);
            start();
            break;
    }
}

function cleric(){
    text = ['the cleric says he watched him follow some cloaked figure into the cave durring the night, imeditely ou set off to the cave!!'].join(' ');
    alert(text);    
    cave();
}
/*
function cave(){
    
}

function woods(){
    
}


David’s parents have three sons: Snap, Crackle, and what’s the name of the third son?
Answer: David

I’m found in socks, scarves and mittens; and often in the paws of playful kittens. What am I?
Answer: Yarn'

It stalks the countryside with ears that can’t hear. What is it?
Answer: Corn

I am an odd number. Take away a letter and I become even. What number am I?
Answer: Seven

If two’s company, and three’s a crowd, what are four and five?
Answer: Nine

A word I know, six letters it contains, remove one letter and 12 remains. What is it?
Answer: Dozens

What 4-letter word can be written forward, backward or upside down, and can still be read from left to right?
Answer: NOON
*/