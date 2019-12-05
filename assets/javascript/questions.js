var score = document.querySelector("#score");
var count = localStorage.getItem("count");
count = 0;
score.textContent = count;
$("#question").html("");
var i = 0;
function nextQuestion(){
  if (i < 9){
  i += 1;
  $("#question").text(questions[i].title);
  $("#letter_a").text(questions[i].choices[0]);
  $("#letter_b").text(questions[i].choices[1]);
  $("#letter_c").text(questions[i].choices[2]);
  $("#letter_d").text(questions[i].choices[3]);
  }

  else if (i = 10){
    i+=0;
    alert("Game over!");
    function stopTimer(){
      if ( seconds !== 0 || minutes !== 0 || hours !== 0 ) { /* display the full time before reseting the stop watch */ 
        var fulltime = document .getElementById( "fulltime" ); //display the full time fulltime.style.display = "block"; var time = gethours + mins + secs; fulltime.innerHTML = 'Fulltime: ' + time; // reset the stop watch seconds = 0; minutes = 0; hours = 0; secs = '0' + seconds; mins = '0' + minutes + ': '; gethours = '0' + hours + ': '; /* display the stopwatch after it's been stopped */ var x = document.getElementById ("timer"); var stopTime = gethours + mins + secs; x.innerHTML = stopTime; /* display all stop watch control buttons */ var showStart = document.getElementById ('start'); showStart.style.display = "inline-block"; var showStop = document.getElementById ("stop"); showStop.style.display = "inline-block"; /* clear the stop watch using the setTimeout( ) return value 'clearTime' as ID */ clearTimeout( clearTime ); } // if () } // stopTime() /* you need to call the stopTime( ) function to terminate the stop watch */ window.addEventListener( 'load', function ( ) { var stop = document.getElementById ("stop"); stop.addEventListener( 'click', stopTime ); }); // stopwatch.js end 
    }
  }
}

var questions = [
    {
      title: "What goes on the end of every statement in JavaScript?",
      choices: [";", ".", ":", "="],
      answer: ";"
    },
    {
      title: "What does '==' mean in JavaScript?",
      choices: ["sets a variable", "strictly equal (value and type the same)", "equal in value but not necessarily in type", "comment"],
      answer: "strictly equal (value and type the same)"
    },
    {
        title: "What does console.log() do in JavaScript?",
        choices: ["calls a function", "displays a value in the console", "provides the logarithm of a numeric value", "converts a statement to a string"],
        answer: "displays a value in the console"

    },
    {
        title: "Which is not a statement name?",
        choices: ["if", "else if", "else", "ifthen"],
        answer: "ifthen"

    },
    {
        title: "What defines a variable?",
        choices: ["v", "variable", "var", "function"],
        answer: "var"

    },
    {
        title: "Which of these means 'and'?",
        choices: ["||", "&&", "::", "//"],
        answer: "&&"

    },
    {
        title: "Which of these means 'or'?",
        choices: ["||", "&&", "::", "//"],
        answer: "||"

    },
    {
        title: "What do JavaScript files end with?",
        choices: [".java", ".ja", ".jv", ".js"],
        answer: ".js"

    },
    {
        title: "What does parseInt() do?",
        choices: ["turns value into an integer", "integrates a function", "turns a value into a string", "nothing"],
        answer: "turns value into an integer"

    },
    {
        title: "Which of the following starts a jQuery statement?",
        choices: ["$", "@", "#", "/"],
        answer: "$"

    },
  ];

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}

$(".start-button").click(function() {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
    document.getElementById("start-button").style.visibility = "hidden";
    $("#question").text(questions[i].title);
    $("#letter_a").text(questions[i].choices[0]);
    $("#letter_b").text(questions[i].choices[1]);
    $("#letter_c").text(questions[i].choices[2]);
    $("#letter_d").text(questions[i].choices[3]);
    document.getElementById("ornament_a").addEventListener("click", function(){
      if (questions[i].choices[0] = questions[0].answer){
        alert("That's correct!");
        count += 4;
        localStorage.setItem("count", count);
        score.textContent = count;
        nextQuestion();
      }
      else if (questions[i].choices[0] != questions[0].answer){
        alert("That's not correct. Try again.")
        count -=1;
        localStorage.setItem("count", count);
        score.textContent = count;
      }
      
    });
    document.getElementById("ornament_b").addEventListener("click", function(){
      if (questions[i].choices[1] = questions[0].answer){
        alert("That's correct!");
        count += 4;
        localStorage.setItem("count", count);
        score.textContent = count;
        nextQuestion();
      }
      else if (questions[i].choices[1] != questions[0].answer){
        alert("That's not correct. Try again.")
        count -=1;
        localStorage.setItem("count", count);
        score.textContent = count;
      }
      
    });
    document.getElementById("ornament_c").addEventListener("click", function(){
      if (questions[i].choices[1] = questions[0].answer){
        alert("That's correct!");
        count += 4;
        localStorage.setItem("count", count);
        score.textContent = count;
        nextQuestion();
      }
      else if (questions[i].choices[1] != questions[0].answer){
        alert("That's not correct. Try again.")
        count -=1;
        localStorage.setItem("count", count);
        score.textContent = count;
      }
      
    });
    document.getElementById("ornament_d").addEventListener("click", function(){
      if (questions[i].choices[1] = questions[0].answer){
        alert("That's correct!");
        count += 4;
        localStorage.setItem("count", count);
        score.textContent = count;
        nextQuestion();
      }
      else if (questions[i].choices[1] != questions[0].answer){
        alert("That's not correct. Try again.")
        count -=1;
        localStorage.setItem("count", count);
        score.textContent = count;
      }
      
    });
  });