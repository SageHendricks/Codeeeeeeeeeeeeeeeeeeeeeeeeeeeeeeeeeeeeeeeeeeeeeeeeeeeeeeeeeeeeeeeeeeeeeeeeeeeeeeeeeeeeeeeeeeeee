var pastGuesses = [];
var score = 0;
var number;
var correctGuesses= 0;
var highScore = -99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;

//random number
function randomNumber(){
    var randomNumber = Math.floor(Math.random() * 20) + 1;
    console.log(randomNumber);
    number = randomNumber;
};
window.onload = randomNumber();

//start function
function myFunction(){
    var x, text;
    x = document.getElementById('DAVE').value;

//Player cant put letters or number abover/bellow 1-10 
    if(x >= 1 && x <= 20) {
        if( x == number){
            text = 'NICE WORK YOU LAZY BAG OF BONES!!! YOU DID IT!!!';
            document.getElementById('GEORGE').innerHTML = 'The Number I chose was ' + number;
            score+=5;
            correctGuesses++;
            randomNumber()
        }else{
            text = 'sorry bud, better luck next time :/';
            score-=2;
        };
    }else{
        text = 'N-no! Bad!! Stop it!! 1 - 20 ONLY!! Grrrrr';
    };
    document.getElementById('JAMIE').innerHTML = text;

    //Player guesses
    pastGuesses.push(x);
    document.getElementById('numbersGuessed').innerHTML = 'You chose: ' + pastGuesses;

    document.getElementById('MIKE').innerHTML = 'Correct Guesses: ' + correctGuesses;

    //score log
    document.getElementById('MICHAEL').innerHTML = 'Score: ' + score;

    
    //end game (refused to work as global)
    if(correctGuesses >= 20){
        document.getElementById("JOHN").disabled = true;
        if(score>highScore){
            highScore = score;
            document.getElementById('JERRY').innerHTML = 'Highcore: ' + highScore;
        }
    };
};
*/

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


*/