function startTimer(duration, display){
    var timer = duration, minutes, seconds;
    setInterval(
        function(){
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0){
            timer = 0;
        }
    }, 1000);
}

window.onclick = function(){
    var time = 30 / 2,
        display = document.querySelector('#TimerDisplay');
    startTimer(time, display);
};


var clicks = 0;
function clicker(){
        if (document.getElementById("TimerDisplay").innerHTML != "00:00"){
            clicks += 1;
        };

    document.getElementById("clicks").innerHTML = clicks;
};

