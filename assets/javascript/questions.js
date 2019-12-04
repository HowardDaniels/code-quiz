var score = document.querySelector("#score");
var count = localStorage.getItem("count");
count = 0;
score.textContent = count;
$("#question").html("");

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
    $("#question").html("1. What goes on the end of every statement in JavaScript?");
    $("#letter_a").html("/");
    $("#letter_b").html(".");
    $("#letter_c").html(";");
    $("#letter_d").html(":");
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
    });
/*
function question2(){
    $("#question").html("2. What does '==' mean in JavaScript?");
    $("#letter_a").html("sets a variable");
    $("#letter_b").html("strictly equal (value and type the same)");
    $("#letter_c").html("equal in value but not necessarily in type");
    $("#letter_d").html("comment");
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
      });
      document.getElementById("ornament_c").addEventListener("click", function(){
          alert("That's correct!");
          count += 4;
          localStorage.setItem("count", count);
          score.textContent = count;
          question3();
          document.getElementById("ornament_c").removeEventListener("click", function(){
            alert("That's correct!");
            count += 4;
            localStorage.setItem("count", count);
            score.textContent = count;
        });
      });
      document.getElementById("ornament_d").addEventListener("click", function(){
          alert("That's not correct. Try again.");
          count -= 1;
          localStorage.setItem("count", count);
          score.textContent = count;
      });
    }

function question3(){
 $("#question").html("3. What does 'console.log()' do in JavaScript?");
    $("#letter_a").html("calls a function");
    $("#letter_b").html("displays a value in the console");
    $("#letter_c").html("provides the logarithm of a numeric value");
    $("#letter_d").html("converts a statement to a string");
    document.getElementById("ornament_a").addEventListener("click", function(){
        alert("That's not correct. Try again.");
        count -= 1;
        localStorage.setItem("count", count);
        score.textContent = count;
      });
      document.getElementById("ornament_b").removeEventListener("click", function(){
            alert("That's not correct. Try again.");
            count -= 1;
            localStorage.setItem("count", count);
            score.textContent = count;
      });
      document.getElementById("ornament_b").addEventListener("click", function(){
        alert("That's correct!");
        count += 4;
        localStorage.setItem("count", count);
        score.textContent = count;
      });
      document.getElementById("ornament_c").addEventListener("click", function(){
        alert("That's not correct. Try again.");
        count -= 1;
        localStorage.setItem("count", count);
        score.textContent = count;   
      });
      document.getElementById("ornament_d").addEventListener("click", function(){
        alert("That's not correct. Try again.");
        count -= 1;
        localStorage.setItem("count", count);
        score.textContent = count;
      });

      document.getElementById("ornament_d").addEventListener("click", function(){
        alert("That's not correct. Try again.");
        count -= 1;
        localStorage.setItem("count", count);
        score.textContent = count;
      });
    } */