//#region itteration code

var text = '';
var i = 0;

function loop(){
    while ( i < 10 ) {
            text += '<br>The number is ' + i;
            i++;
            console.log(text)
}
document.getElementById('demo').innerHTML = text;

};

function clear(){
    document.getElementById('demo').innerHTML = " ";
};
//#endregion

//#region GUESS MA NUMBER 
var totalGuesses = 0;
document.getElementById("submitBTN").disabled = true;

//this should be in a fiuntion
var randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber)

function JOHNATHIN(){
    document.getElementById("submitBTN").disabled = false;
}
function DANIEL(){
    var x, text;
    x = document.getElementById('num').value;

    if(x<1 || x>10) {
        text = "N-no! Bad!! Stop it!! 1 - 10 ONLY!! Grrrrr";
        document.getElementById('responce').innerHTML = text;
       
    }else if( x == randomNumber){
        text = 'NICE WORK YOU LAZY BAG O BONES!!! YOU DID IT!!!';
        document.getElementById('responce').innerHTML = text;
    }else{
        text = 'sorry bud, better luck next time :/'
        document.getElementById('responce').innerHTML = text;
    }
}
//#endregion