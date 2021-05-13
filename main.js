var minutes=25;
var seconds="00";

//to initialize the timer as soon as the page loads
function initialize() {
    document.getElementById("minutes").innerHTML= minutes;
    document.getElementById("seconds").innerHTML= seconds;
}

//to start the timer after clicking the button
function start() {
    minutes=24;
    seconds=59;

    document.getElementById("minutes").innerHTML= minutes;
    document.getElementById("seconds").innerHTML= seconds;

    var minutes_interval = setInterval (minutesTimer, 60000);
    var seconds_interval = setInterval(secondsTimer, 1000);

    function minutesTimer() {
        minutes=minutes-1;
        document.getElementById("minutes").innerHTML=minutes;
    }

    function secondsTimer() {
        seconds=seconds-1;
        document.getElementById("seconds").innerHTML=seconds;

        if (seconds<=0) {
            if(minutes<=0) {
                clearInterval(minutes_interval);
                clearInterval(seconds_interval);

                document.getElementById("done").innerHTML= "Good job! You did it!"

                document.getElementById("done").classList.add("show_msg");
            }
            seconds=60;
        }
    }
}

