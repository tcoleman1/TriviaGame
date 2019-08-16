var timer;
var counter = 15;
var score = 0;

// the start of my game. The document is ready and once I click a button the game will go to the isChecked funtion to make sure I am only able to click
// one option (true or false) as I move down the question range.
$(document).ready(function () {

   // $('time').html("" + counter);
    function buttonClick (){

        $("#btnSubmit").on("click", function(){
    
         // console.log("You clicked me");
            isChecked();
        });

        
    }
    buttonClick(); // calls button click function.
    startGame();
})


//counter = 0;
function countDown () {
    counter --;
    $("#time").html( "Time remaining: " + counter + " secs");

    if(counter <= 0) {
        clearInterval(timer);
     alert("Game over!");
    //   gameOver();
    }
}

function startGame () {
    counter = 15;
    timer = setInterval(countDown, 1000);
}

function isChecked () {


$("input[type=radio][name='question1']").change(function () {

    if( $('#btnSubmit1').prop('checked')) {
        $('#btnSubmit2').prop('disabled', true);

    }

    else {
        $('#btnSubmit2').prop('disabled', false);
    }

    if( $('#btnSubmit3').prop('checked')) {
        $('#btnSubmit4').prop('disabled', true);

    }

    else {
        $('#btnSubmit4').prop('disabled', false);
    }

    if( $('#btnSubmit5').prop('checked')) {
        $('#btnSubmit6').prop('disabled', true);

    }

    else {
        $('#btnSubmit6').prop('disabled', false);
    }

    if( $('#btnSubmit7').prop('checked')) {
        $('#btnSubmit8').prop('disabled', true);

    }

    else {
        $('#btnSubmit8').prop('disabled', false);
    }
    if( $('#btnSubmit9').prop('checked')) {
        $('#btnSubmit10').prop('disabled', true);

    }

    else {
        $('#btnSubmit10').prop('disabled', false);
    }

    if( $('#btnSubmit11').prop('checked')) {
        $('#btnSubmit11').prop('disabled', true);

    }

    else {
        $('#btnSubmit12').prop('disabled', false);
    }



});
}

// function displayResults () {

//     var result = ``;
//     <p> All done!</p>
//     <p> Correct Answers :  ${score} </p>
//     <p> In-correct Answers: + wrongAnswers</p>


//     $("#Trivia-game").html(result);
// }

function submit () {
    ("#submitQuizButton").click(function() {

        displayResults();
    })
}
// $("#start").click(function () {
//     $(this).hide();
//     counter = setInterval(countDown, 1000)
// })


// function gameOver() {

//    ("#trivia-game").hide();
// }
