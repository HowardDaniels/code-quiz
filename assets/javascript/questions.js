var score = document.querySelector("#score");

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

$(".start-button").click(function() {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
    document.getElementById("start-button").style.visibility = "hidden";
    document.getElementById("question").append("1. What goes on the end of every statement in JavaScript?");
    document.getElementById("ornament_a").append("/");
    document.getElementById("ornament_b").append(".");
    document.getElementById("ornament_c").append(";");
    document.getElementById("ornament_d").append(":");
    $("ornament_a").click(function() {
        alert("That's not correct. Try again.");
        score -= score;
    });
    $("ornament_b").click(function(){
        alert("")
      });
});