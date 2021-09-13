//#region Number
function randomNumberGen(randonNumber){
    var randomNumber = Math.floor(Math.random() * 10 + 1);
    console.log('Random Number is ' + randomNumber);
    document.getElementById('randomNumber').innerHTML = 'The Number is ' + randomNumber;
    return randomNumber
}
randomNumber = randomNumberGen();

//#endregion
var allGuesses = [];
var playerScore = 0;
var playerGuess;
var click = 0;
var message;

function myFunction(){
    playerGuess = document.getElementById('input').value;
    
    if(allGuesses.includes(playerGuess) == true){
        document.getElementById('HEY').innerHTML = 'Ayo you already guessed that number do the thing right or not at all!';
        console.log('ah')
    }else{
        document.getElementById('HEY').innerHTML = 'Negative';
        allGuesses.push(playerGuess);
        document.getElementById('numbersGuessed').innerHTML = allGuesses; 
    
        if (playerGuess == randomNumber){
            playerScore += 5;
            message = 'N E A T! score is going Up';
        }else{
            playerScore -= 2;
            message = 'Oh Noes! score is going Down';
        }
    }
    document.getElementById('playerScore').innerHTML = playerScore;
    document.getElementById('message').innerHTML = message;

}
function clickCtr(){
    click++
    document.getElementById('click').innerHTML = click;
}