var score = document.querySelector("#score");
var count = localStorage.getItem("count");
count = 0;
score.textContent = count;

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
    document.getElementById("letter_a").append("/");
    document.getElementById("letter_b").append(".");
    document.getElementById("letter_c").append(";");
    document.getElementById("letter_d").append(":");
    document.getElementById("ornament_a").addEventListener("click", function(){
        alert("That's not correct. Try again.");
        count -= 1;
        localStorage.setItem("count", count);
        score.textContent = count;
      });
      document.getElementById("ornament_b").addEventListener("click", function(){
        alert("That's not correct. Try again.");
        count -= 1;
        localStorage.setItem("count", count);
        score.textContent = count;
        var firstCorrect = true;
      });
      document.getElementById("ornament_c").addEventListener("click", function(){
        alert("That's correct!");
        count += 4;
        localStorage.setItem("count", count);
        score.textContent = count;
      });
      document.getElementById("ornament_d").addEventListener("click", function(){
        alert("That's not correct. Try again.");
        count -= 1;
        localStorage.setItem("count", count);
        score.textContent = count;
      });

      if (firstCorrect = true){
        $("#question").html("2. What does '==' mean?");
      }
});