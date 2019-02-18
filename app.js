function Quiz(question)
{
    this.question = question;
    this.questionIndex = 0;
    this.score = 0;
}
Quiz.prototype.getquestionIndex = function()
{
    return this.question[this.questionIndex];
}

Quiz.prototype.ifended = function()
{
        return this.question.length === this.questionIndex
}

Quiz.prototype.guess = function(answer)
{
   
if(this.getquestionIndex().correctAnswer(answer))
{
    this.score++;
}
this.questionIndex++;

}


// The function to loads in the questions
function populate()
{
    if(quiz.ifended())
    {
        showScore();
    }else
    {
        // Showing the question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getquestionIndex().text;

        // Showing the choice
        var choice = quiz.getquestionIndex().choice;
        for(i =0 ; i < choice.length; i++)
        {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choice[i];

            guess("btn" + i, choice[i])
        }

        showProgress();
    }
}

// The function to show the score
function showScore()
{
    var gameOver = "<h2 id='score'>Result </h2>";
    gameOver += "<h2 > Your score :" + quiz.score + "</h2>";
    // Replacing theb html with the results
    var replace =  document.getElementById("quiz");
    replace.innerHTML = gameOver;
}
// Show score function ends


// Function showing your progress
    function showProgress()
    {
        var currentquestionNumber = quiz.questionIndex +1;
        var element = document.getElementById("progress");
        element.innerHTML =" Question " + currentquestionNumber + " of " + quiz.question.length;
    }

// Show progress function ends



// The function to guess if answer is wrong or right
function guess(id,guess)
{
    var button = document.getElementById(id);
    button.onclick = function()
    {
        quiz.guess(guess);
        populate();  
    }
}
// The function ends



var question = [
     new Question("What is the name of the author of this book", ["Dinayen Stephanie","steph","stacy","stephnie"],
      "Dinayen Stephanie"),
    new Question("When did she start her career as a programmer?",["2020","2016","2017","2018"],"2018"),
    new Question("Which school did she attend?",["Uba","UBC","LAHIBA","N-Tech"],"N-Tech"),
    new Question("What impression do you have about the author?",["Optimist","Persimist","Brave","Courageous"],
    "Persimist")
    
];

// This other quiz is a function created in the quiz_controller.js
var quiz = new Quiz(question);

populate();

