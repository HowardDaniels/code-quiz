var score = document.querySelector("#score");
var count = localStorage.getItem("count");
count = 0;
score.textContent = count;
$("#question").html("");
var i = 0;
var interval;

var questions = [
    {
      title: "What goes on the end of every statement in JavaScript?",
      choices: [";", ".", ":", "="],
      answer: ";"
    },
    {
      title: "What does '==' mean in JavaScript?",
      choices: ["sets a variable", "strictly equal (value and type the same)", "equal in value but not necessarily in type", "comment"],
      answer: "equal in value but not necessarily in type"
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
            clearInterval(interval);
            alert("Time's up!");
        }
    }, 1000);
}

function nextQuestion(){
  if (i < 9){
  i += 1;
  $("#question").text(questions[i].title);
  $("#letter_a").text(questions[i].choices[0]);
  $("#letter_b").text(questions[i].choices[1]);
  $("#letter_c").text(questions[i].choices[2]);
  $("#letter_d").text(questions[i].choices[3]);
  }

  else if (i = 9){
    i+=0;
    alert("Game over!");
    clearInterval(interval);
      }
}

$(".start-button").click(function() {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
    document.getElementById("start-button").style.visibility = "hidden";
    i=0;
    $("#question").text(questions[i].title);
    $("#letter_a").text(questions[i].choices[0]);
    $("#letter_b").text(questions[i].choices[1]);
    $("#letter_c").text(questions[i].choices[2]);
    $("#letter_d").text(questions[i].choices[3]);
    document.getElementById("ornament_a").addEventListener("click", function(){
      if (questions[i].choices[0] == questions[i].answer){
        alert("That's correct!");
        count += 4;
        localStorage.setItem("count", count);
        score.textContent = count;
        nextQuestion();
      }
      else if (questions[i].choices[0] != questions[i].answer){
        alert("That's not correct. Try again.")
        count -=1;
        localStorage.setItem("count", count);
        score.textContent = count;
      }
      
    });
    document.getElementById("ornament_b").addEventListener("click", function(){
      if (questions[i].choices[1] == questions[i].answer){
        alert("That's correct!");
        count += 4;
        localStorage.setItem("count", count);
        score.textContent = count;
        nextQuestion();
      }
      else if (questions[i].choices[1] != questions[i].answer){
        alert("That's not correct. Try again.")
        count -=1;
        localStorage.setItem("count", count);
        score.textContent = count;
      }
      
    });
    document.getElementById("ornament_c").addEventListener("click", function(){
      if (questions[i].choices[2] == questions[i].answer){
        alert("That's correct!");
        count += 4;
        localStorage.setItem("count", count);
        score.textContent = count;
        nextQuestion();
      }
      else if (questions[i].choices[2] != questions[i].answer){
        alert("That's not correct. Try again.")
        count -=1;
        localStorage.setItem("count", count);
        score.textContent = count;
      }
      
    });
    document.getElementById("ornament_d").addEventListener("click", function(){
      if (questions[i].choices[3] == questions[i].answer){
        alert("That's correct!");
        count += 4;
        localStorage.setItem("count", count);
        score.textContent = count;
        nextQuestion();
      }
      else if (questions[i].choices[3] != questions[i].answer){
        alert("That's not correct. Try again.")
        count -=1;
        localStorage.setItem("count", count);
        score.textContent = count;
      }
      
    });
  });

  console.log(questions[0].choices[1]);
  console.log(questions[0].answer);
  console.log((questions[0].choices[1]) == (questions[0].answer));

  console.log(seconds.textContent);

  console.log(document.getElementById("letter_a"));