/*
var x = 10;
var y = 8;

if(x<y){
    document.getElementById('booleans').innerHTML = 'True';
    alert(x + ' is less than ' + y);
} else{
    document.getElementById('booleans').innerHTML = 'False';
    alert(x + ' is greater than ' + y);
}

let teacher = 'exsists';
let student1Grade = 3.0;
if( student1Grade >= 3.5 || teacher == 'exsists'){
    document.getElementById('booleans').innerHTML = 'student gets 3 slices of pizza';
} else if( student1Grade >= 3.0 ){
    document.getElementById('booleans').innerHTML = 'student gets 2 slices of pizza';
} else if( student1Grade >= 2.0 ){
    document.getElementById('booleans').innerHTML = 'student gets 1 slices of pizza';
} else{
    document.getElementById('booleans').innerHTML = 'student gets 0 slices of pizza';
}
*/

function Player(playerNumber, playerName, playerType, playerClass, playerStartingHealth, playerWeapon){
    this.playerNumber = playerNumber;
    this.playerName = playerName;
    this.playerType = playerType;
    this.playerClass = playerClass;
    this.playerStartingHealth = playerStartingHealth;
    this.playerWeapon = playerWeapon;
}
let pTypes = ['warrioer', 'Mage', 'Shamen', 'Rogue', ' Preist', ' Paladin'];
let pClasses = ['Human', 'Orc', 'Elf', 'Tauren', 'Gnome'];
let pWeapons = ['Staff', 'Dagger', 'Sword', 'Hammer', 'Wand', 'Bow & Arrow', 'Blunderbuss'];

let player1 = new Player(1, 'Sage', pTypes[2], pClasses[2], 75, pWeapons[5]);
let player2 = new Player(2, 'Tomato', pTypes[3], pClasses[4], 75, pWeapons[1]);

console.log(player1, player2);

document.getElementById('response').innerHTML = [player1.playerNumber, player1.playerName, player1.playerType, player1.playerClass, player1.playerStartingHealth, player1.playerWeapon].join(' ');
document.getElementById('response1').innerHTML = [player2.playerNumber, player2.playerName, player2.playerType, player2.playerClass, player2.playerStartingHealth, player2.playerWeapon].join(' ');