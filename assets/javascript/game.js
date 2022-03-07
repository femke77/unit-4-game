

$(document).ready(function() {

    var gameNumber;
    var crystal1;
    var crystal2;
    var crystal3;
    var crystal4;
    var numWins = 0;
    var numLosses = 0;
    var currentScore = 0;
   
    newGame();

    $("#crystal-1").on("click", function() {
        $(this).val(crystal1);
        currentScore += crystal1;
        click();
    });

    $("#crystal-2").on("click", function() {
        $(this).val(crystal2);
        currentScore += crystal2;
        click();
    });

    $("#crystal-3").on("click", function() {
        $(this).val(crystal3);
        currentScore += crystal3;
        click();
    });

    $("#crystal-4").on("click", function() {
        $(this).val(crystal4);
        currentScore += crystal4;
        click();
        
    });


    function getRandom(low, high){
        var random = Math.floor(Math.random() * high) + low;
        return random;
    }
    
    function click(){
        $(".currentCount").text("Current score: " + currentScore);
        checkWinLose();
    }

    function checkWinLose() {
        if (currentScore === gameNumber){
            $("#wins").text("Wins: " + (++numWins));
        }
        else if (currentScore > gameNumber){
            $("#losses").text("Losses: " + (++numLosses));
        }     
        newGame(); 
    }

    function newGame(){
        currentScore = 0;
        $(".currentCount").text("Current score: " + currentScore);
        gameNumber = getRandom(19, 120);
        $("#gameNumber").text(gameNumber);
        crystal1 = getRandom(1, 12);
        crystal2 = getRandom(1, 12);
        crystal3 = getRandom(1, 12);
        crystal4 = getRandom(1, 12);
    }

});

