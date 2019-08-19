var timer;
var counter = 20;
var score = 0;
var correctAnswer = 0;
var incorrectAnswer = 0;

var correctText = document.getElementById("correct-text");
var incorrectText = document.getElementById("incorrect-text");

// the start of my game. The document is ready and once I click a button the game will go to the isChecked funtion to make sure I am only able to click
// one option (true or false) as I move down the question range.
$(document).ready(function () {

    $("#Trivia-Game").hide();
    $("#startQuizButton").show();
    $("#GameResults").hide();

   $("#startQuizButton").on("click", function (){

    $("#startQuizButton").hide();
    $("#Trivia-Game").show();
   });


    function buttonClick (){

        $("#btnSubmit").on("click", function(){
    
            isChecked();
        });

        
    }
    buttonClick(); // calls button click function.
    startGame();
})

function correctAnswer (){

    var radioButtonVal = $("input[name ='question1']:checked").val();
     
    if(radioButtonVal === "True"){
        correctAnswer++;
        
    }
        else{
            incorrectAnswer++;
        }
        
   var radionButtonVal2 = $("input[name ='question2']:checked").val();
     
   if(radioButtonVal2 === "True"){
       correctAnswer++;
       
   }
       else{
           incorrectAnswer++;
       }

       var radionButtonVal3 = $("input[name ='question3']:checked").val();
     
       if(radioButtonVal3 === "True"){
           correctAnswer++;
           
       }
           else{
               incorrectAnswer++;
           }
        
           var radionButtonVal4 = $("input[name ='question4']:checked").val();
     
   if(radioButtonVal4 === "True"){
       correctAnswer++;
       
   }
       else{
           incorrectAnswer++;
       }

       var radionButtonVal5= $("input[name ='question5']:checked").val();
     
   if(radioButtonVal5 === "True"){
       correctAnswer++;
       
   }
       else{
           incorrectAnswer++;
       }
}

//counter = 0;
function countDown () {
    counter --;
    $("#time").html( "Time remaining: " + counter + " secs");

    if(counter <= 0) {
        clearInterval(timer);

        $("#Trivia-Game").hide();
        $("#GameResults").show();
    
    }
}

function startGame () {
    counter = 20;
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



function submit () {
    ("#submitQuizButton").click(function() {

        //displayResults();
        correctAnswer();
    })
}


correctText.textContent = "Correct Answers: " + correctAnswer;
incorrectAnswer.textContent = "Incorrect Answers: " + incorrectAnswer;