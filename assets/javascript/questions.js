var count = localStorage.getItem("count");
$("#question").html("");
var i = 0;
var interval;
var counter = 0;
var timeLeft = 150;
var timer = document.querySelector("#time");
var gameResult= {};
var highscoreList;
var initialsCurrent;
localStorage.getItem(highscoreList);
/*
console.log(highscoreList);
$("#initials-1").text(highscoreList[0].initials);
$("#score-1").text(highscoreList[0].score);
$("#initials-2").text(highscoreList[1].initials);
$("#score-2").text(highscoreList[1].score);
$("#initials-3").text(highscoreList[2].initials);
$("#score-3").text(highscoreList[2].score);

*/

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

  function timeIt(){
    counter++;
    count = timeLeft - counter;
    $(timer).html(count);
    if (counter >= timeLeft){
      clearInterval(interval);
      alert("Time's up!");
    }
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
      alert("Congrats. You won!");
      clearInterval(interval);
      localStorage.setItem("count", count);
//put count array info here
var countArray = localStorage.getItem("count");
countArray = countArray ? countArray.split(',') : [];

      var initialsCurrent = prompt("What are your initials?");
      var initialsArray = localStorage.getItem("initials");
      initialsArray = initialsArray ? initialsArray.split(',') : [];
      initialsArray.push(initialsCurrent);
      localStorage.setItem("initials", initialsArray.toString());
      console.log(count);
      console.log(initialsCurrent);
    }}


$(".start-button").click(function() {
    $("#time").html(0);
    setInterval(timeIt, 1000);
    timeIt();

    document.getElementById("start-button").style.visibility = "hidden";

    $("#question").text(questions[i].title);
    $("#letter_a").text(questions[i].choices[0]);
    $("#letter_b").text(questions[i].choices[1]);
    $("#letter_c").text(questions[i].choices[2]);
    $("#letter_d").text(questions[i].choices[3]);

    document.getElementById("ornament_a").addEventListener("click", function(){
      if (questions[i].choices[0] == questions[i].answer){
        alert("That's correct!");
        nextQuestion();
      }

      else if (questions[i].choices[0] != questions[i].answer){
        alert("That's not correct. Try again.");
        clearInterval(interval);
        count -= 15;
        localStorage.setItem("count", count);
        timeLeft = count;
        timeIt();
      }
      
    });

    document.getElementById("ornament_b").addEventListener("click", function(){
      if (questions[i].choices[1] == questions[i].answer){
        alert("That's correct!");
        nextQuestion();
      }

      else if (questions[i].choices[1] != questions[i].answer){
        alert("That's not correct. Try again.");
        clearInterval(interval);
        count -= 15;
        localStorage.setItem("count", count);
        timeLeft = count;
        timeIt();
      }
      
    });

    document.getElementById("ornament_c").addEventListener("click", function(){
      if (questions[i].choices[2] == questions[i].answer){
        alert("That's correct!");
        nextQuestion();
      }

      else if (questions[i].choices[2] != questions[i].answer){
        alert("That's not correct. Try again.");
        clearInterval(interval);
        count -= 15;
        localStorage.setItem("count", count);
        timeLeft = count;
        timeIt();
      }
      
    });

    document.getElementById("ornament_d").addEventListener("click", function(){
      if (questions[i].choices[3] == questions[i].answer){
        alert("That's correct!");
        nextQuestion();
      }

      else if (questions[i].choices[3] != questions[i].answer){
        alert("That's not correct. Try again.");
        /*count -=1;
        localStorage.setItem("count", count);
        score.textContent = count; */
        clearInterval(interval);
        count -= 15;
        localStorage.setItem("count", count);
        timeLeft = count;
        timeIt();
      }
      
    });
  });


function toHighscoreList() {
  /*  gameResult = {initials: initials, count: count};
    highscoreList.push(gameResult);
    localStorage.setItem("highscoreList", JSON.stringify(highscoreList));
    highscoreList.sort(function(a,b) { return (b.count - a.count ) }); */
    var initialsArray = localStorage.getItem(initials);
    initialsArray = initialsArray ? initialsArray.split(',') : [];
    initialsArray.push(initialsCurrent);
    localStorage.setItem(initials, initialsArray.toString());
    /*
    function receive(data,status,resobj){
      var table=document.getElementById("scoretable");
      table.innerHTML="<tr> <th >Initials</th><th >Score</th></tr>";
      for (var j=0; j<data.length;j++){
        entryJSONObject = data[j];
        var initials = entryJSONObject.initials;
        var count = entryJSONObject.count;
        var newRow = document.createElement("tr");
        newRow.innerHTML="<td>"+initials+"</td><td>"+count+"</td>";
        table.appendChild(newRow);
      }
    }
    receive();
    /*
$("#initials-1").text(highscoreList[0].initials);
$("#score-1").text(highscoreList[0].score);
$("#initials-2").text(highscoreList[1].initials);
$("#score-2").text(highscoreList[1].score);
$("#initials-3").text(highscoreList[2].initials);
$("#score-3").text(highscoreList[2].score);
localStorage.setItem(highscoreList);
$("#high-score-list").text(highscoreList);
*/
$('#scoretable').text(highscoreList[0].initials + " - score: "+ highscoreList[0].score);
//localStorage.getItem("hi")

};

function fromHighscoreList(){
  var initials = localStorage.getItem("initials");
  var count = localStorage.getItem("count");
  $("#scoretable").text(initials + ": " + count);
}







document.getElementById("high-scores").addEventListener("click", function(){
  document.getElementById("scoretable").style.visibility = "visible";
  fromHighscoreList();
  console.log(highscoreList);
    });
