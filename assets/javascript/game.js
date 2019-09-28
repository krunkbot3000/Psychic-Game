var wins = 0;
var losses = 0;
var guessesLeft = 10;
var userGuesses = [];
var guessOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var directionsText = document.getElementById ("directions-text");
var gameTitle = document.getElementById ("game-title");
var promptText = document.getElementById ("prompt-text");
var winsText = document.getElementById ("wins-text");
var lossesText = document.getElementById ("losses-text");
var guessLeftText = document.getElementById ("guesses-left");
var userGuessText = document.getElementById ("user-guesses");
var psychicGuess = guessOptions[Math.floor(Math.random() * guessOptions.length)];
    console.log ("New winning letter is: " + psychicGuess)


document.onkeyup = function (event) {
    
    var userLetter= event.key;
    
        console.log ("User Guess: " + userLetter);
        console.log ("Psychic guess: " + psychicGuess);
    // SINGLE GUESSES
    if (userGuesses.includes(userLetter)) {
        alert("NO NO NO, invalid key. Guess again!")
        return;  
    }


    
    // INVALID KEY ALERT
    if (event.keyCode > 64 && event.keyCode < 91) {
        console.log ("user selected a letter");
      


        //LETTER MATCH
        if (userLetter === psychicGuess) {
            winner()
            reset();
            return;
            };
            console.log ("Wins: " + wins);
      

        if (userLetter != psychicGuess) {
            userGuesses += " " + userLetter + ",";
            remainingGuessFunction();
            }
    }

    else alert("ONLY LETTERS ARE ALLOWED!");



    //FUNCTIONS
    function remainingGuessFunction() {
        if (guessesLeft <= 1) {
            losses++;
            reset();
            } 
        else if (guessesLeft > 0) {
            guessesLeft--;
        }
    }



    // If Win
    function winner() {
        wins++;
        document.getElementById("wins-text").innerHTML = "Wins: " + wins;
    }



    // No Guesses Remaining
    function reset() {
        userGuesses = [];
        document.getElementById("user-guesses").innerHTML = "You guessed: " + userGuesses;
        guessesLeft = 10;
        document.getElementById("guesses-left").innerHTML = "Guesses remaining: " + guessesLeft;
        psychicGuess = guessOptions[Math.floor(Math.random() * guessOptions.length)];
        console.log ("New winning letter is: " + psychicGuess); 
    }

    

    
    directionsText.textContent = ""; 
    gameTitle.textContent = "The Psychic Game";
    promptText.textContent = "Guess what letter I am thinking of...";
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessLeftText.textContent = "Guesses remaining: " + guessesLeft;
    userGuessText.textContent = "Your guesAS: " + userGuesses;
};