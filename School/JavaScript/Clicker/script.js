//timer
var sec = 15;
function startTimerFunction() {
    if (document.getElementById("playerClicks").innerHTML == 0 || document.getElementById("playerClicks").innerHTML == "(Player Score)") {
        var timer = setInterval(myClock, 1000);
        //reset value VERRYY ImpoRTANT
        var sec = 15;
        //countdown
        function myClock() {
            //counts down
            document.getElementById("countdownClock").innerHTML = --sec;
            //stops countdown when timer reaches 0
            if (sec == 0) {
                clearInterval(timer);
            };
        };
    };
};

//player click counter
var clickNumber = 0;
function scoreFunction(){
    //prevents counting before timer starts and stops counter a 0 sec
    if(document.getElementById("countdownClock").innerHTML != 0 && document.getElementById("countdownClock").innerHTML != "--"){
        clickNumber += 1;
    };
    document.getElementById("playerClicks").innerHTML = clickNumber;
    if(sec == 0){
    };
    //highscore
    if (document.getElementById("countdownClock").innerHTML == 0 && clickNumber > document.getElementById("highScore").innerHTML){
        alert("Congrats, you are the highest score. Think you can beat it?");
    }
    if (document.getElementById("countdownClock").innerHTML == 0 && clickNumber < document.getElementById("highScore").innerHTML){
        alert("You are not the highest score. Try again.");
    }
    if (clickNumber > document.getElementById("highScore").innerHTML && document.getElementById("countdownClock").innerHTML == 0){
        document.getElementById("highScore").innerHTML = clickNumber;
    };
    //clicks per second
    document.getElementById("clicksPerSecond").innerHTML = Math.round(clickNumber/(15-document.getElementById("countdownClock").innerHTML));
};

//reset
function resetFunction(){
    //stops timer reseting prematurely
    if(document.getElementById("countdownClock").innerHTML <= 0){
    //timer update
    document.getElementById("countdownClock").innerHTML = "--";
    //click update
    clickNumber = 0;
    document.getElementById("playerClicks").innerHTML = clickNumber;
    } else{
        alert('Please wait for timer to finish before reseting!');
    }
};

//sound effects
function playSound(){
    var sound = document.audio("shot")
    sound.play();
}
