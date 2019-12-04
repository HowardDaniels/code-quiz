var score = document.querySelector("#score");
var count = localStorage.getItem("count");
count = 0;
score.textContent = count;
$("#question").html("");

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
            timer = duration;
        }
    }, 1000);
}

$(".start-button").click(function() {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
    document.getElementById("start-button").style.visibility = "hidden";
    $("#question").text(questions[0].title);
    $("#letter_a").text(questions[0].choices[0]);
    $("#letter_b").text(questions[0].choices[1]);
    $("#letter_c").text(questions[0].choices[2]);
    $("#letter_d").text(questions[0].choices[3]);
    document.getElementById("#submit").addEventListener("click", function(){
        if (input = questions[0].answer){
            alert("That's correct!");
            count += 4;
            localStorage.setItem("count", count);
            score.textContent = count;
        }
    })
});
  /*  $("#question").html("1. What goes on the end of every statement in JavaScript?");
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

      });
      document.getElementById("ornament_d").addEventListener("click", function(){
        alert("That's not correct. Try again.");
        count -= 1;
        localStorage.setItem("count", count);
        score.textContent = count;
      });
    });


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