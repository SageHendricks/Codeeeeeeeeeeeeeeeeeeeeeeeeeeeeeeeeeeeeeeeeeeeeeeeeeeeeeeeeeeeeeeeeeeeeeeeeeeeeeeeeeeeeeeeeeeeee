var guessedNumbers = [];





//random number generator
function randomNumberGen(randonNumber){
    var randomNumber = Math.floor(Math.random() * 10 + 1);
    console.log('Random Number is ' + randomNumber);
    return randomNumber;
}
randomNumber = randomNumberGen();

//start btn
function myFunction(){
    var text, x;
    x = document.getElementById('DAVE').value;
    //checks player guess
    if(x >= 1 && x <= 20) {
        if(x == randomNumber){
            text = 'NICE WORK YOU LAZY BAG OF BONES!!! YOU DID IT!!!';
        }else{
            text = 'sorry bud, better luck next time :/';
        }
        //adds guesses to an array
        if(guessedNumbers.includes(x) == true){
            
        }
        guessedNumbers.push(x)
    }else{
        text = 'N-no! Bad!! Stop it!! 1 - 20 ONLY!! Grrrrr';
    }
    document.getElementById('JAMIE').innerHTML = text;
    document.getElementById('numbersGuessed').innerHTML = guessedNumbers;
};