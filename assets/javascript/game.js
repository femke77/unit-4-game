//$("#wins").append("1")


$(document).ready(function() {

    var gameNumber = getRandom(19, 120);
    var crystal1 = getRandom(1, 12);
    var crystal2 = getRandom(1, 12);
    var crystal3 = getRandom(1, 12);
    var crystal4 = getRandom(1, 12);
    var numWins = 0;
    var numLosses = 0;
    var currentScore = 0;

   
    $(".gameGoal").append(gameNumber);

    $("#crystal-1").on("click", function() {
        $(this).val(crystal1);
        currentScore += parseInt($(this).val());
        $(".currentCount").text("Current score: " + currentScore);
        checkWinLose();
    });


    function getRandom(low, high){
        var random = Math.floor(Math.random() * high) + low;
        return random;
    }
    
    function checkWinLose() {
        if (currentScore === gameNumber){
            // numWins++;
            $("#wins").text("Wins: " + ++numWins);
            newGame();
        }
        else if (currentScore > gameNumber){
            // numLosses++;
            $("#losses").text("Losses: " + ++numLosses);
            newGame();
        }
       
    }

    function newGame(){
        currentScore = 0;
        $(".currentCount").text("Current score: " + currentScore);
        gameNumber = getRandom(19, 120);
        $(".gameGoal").text(gameNumber);
        crystal1 = getRandom(1, 12);
        crystal2 = getRandom(1, 12);
        crystal3 = getRandom(1, 12);
        crystal4 = getRandom(1, 12);


    }

});

