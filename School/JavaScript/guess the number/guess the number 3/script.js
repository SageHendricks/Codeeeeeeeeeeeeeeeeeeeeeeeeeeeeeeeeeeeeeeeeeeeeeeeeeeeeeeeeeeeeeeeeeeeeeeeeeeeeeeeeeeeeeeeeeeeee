var guesses = [];
var score = 0;
var random;
var highscore = -9999999999999999999999999999999999999999999;
var correct = 0;

function randomNum(){
    var ranNum = Math.floor(Math.random() * 20 + 1);
    random = ranNum;
    console.log(random);
}
window.onload = randomNum();


function myFunction(){
    var x, text;
    x = document.getElementById('num').value;
    //1 to 20 only
    if(1 <= x && x <= 20){
        //array
        if(guesses.includes(x) == false){
            guesses.push(x);
            //win
            if(x == random){
                text = 'congrat';
                score += 5;

                document.getElementById('reset').disabled = false;
                document.getElementById('answer').innerHTML = 'correct answer was ' + random + '! nice work!!';

                correct += 1;
                document.getElementById('correctG').innerHTML = 'correct guesses: ' + correct;
            //lose
            }else{
                if(x > random){
                    text = 'bit lower';
                }else{
                    text = 'bit higher';
                }
                score -= 2;
            }
        }else{
            text = 'you already guessed that';
        }
    //error
    }else{
        text = '1 - 20 only';
    }

    if(correct >= 20){
        document.getElementById('submit').disabled = true;
        document.getElementById('reset').disabled = true;
        alert('game over');
        //highscore
        if(highscore < score){
            highscore = score;
            document.getElementById('highscore').innerHTML = 'highscore: ' + highscore;
        }
        document.getElementById('fullReset').disabled = false;
    }

    document.getElementById('response').innerHTML = text;
    document.getElementById('guess').innerHTML = 'you\'ve guessed : ' + guesses;
    document.getElementById('score').innerHTML = 'score: ' + score;
}

//reset
function reset(){
    randomNum();
    guesses = [];
    correct++
    document.getElementById('reset').disabled = true;
}

//full reset
function fullReset(){
    guesses = [];
    correct = 0;
    score = 0;
    document.getElementById('guess').innerHTML = 'you\'ve guessed : ' + guesses;
    document.getElementById('score').innerHTML = 'score: ' + score;
    document.getElementById('correctG').innerHTML = 'correct guesses: ' + correct;
    document.getElementById('reset').disabled = false;
    document.getElementById('submit').disabled = false;

}