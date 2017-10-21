function check() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 0;


    if (question1 == "sixth") {
        correct++;
    }
    if (question2 == "Tactical Studies Rules") {
        correct++;
    }
    if (question3 == "Otto") {
        correct++;
    }

    var pictures = ["assets/images/win.jpg", "assets/images/meh.jpg", "assets/images/lose.jpg"];
    var messages = ["You are a Sorcerer!", "You are a Warrior", "You are a Revenant"];
    var score;

    if (correct == 0) {
        score = 2;
    }

    if (correct > 0 && correct < 3) {
        score = 1;
    }

    if (correct == 3) {
        score = 0;
    }

    //adds score and brings up picture
    document.getElementById("message").innerHTML = messages[score];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
    document.getElementById("picture").src = pictures[score];
}
//reset button
function ResetButton() {
    location.reload();
}

//timer
var count = 10;

var counter = setInterval(timer, 1000);

function timer() {
    count = count - 1;
    if (count <= 0) {
        clearInterval(counter);
        //counter ended
        document.getElementById("timer").innerHTML = "Times Up.";
        
        return;
    }
    document.getElementById("timer").innerHTML = count + " secs";
}