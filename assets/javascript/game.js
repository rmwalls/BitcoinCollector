function startGame() { //sets up the page and variables
  var wins=0;
  var losses=0;
  var yourScore=0;
  var outcome="are Playing!";
  var winsText = document.getElementById("wins-text");
  winsText.textContent = "Wins: " + wins;

  var lossesText = document.getElementById("losses-text"); 
  lossesText.textContent = "Losses: " + losses;

  var outcomeText = document.getElementById("outcome-text");
  outcomeText.textContent = "You " + outcome;
  
  
	var numToMatch = Math.floor(Math.random() * (120 - 19) + 19); 
    console.log(numToMatch + " is the match number");
  $("#random-number").text(numToMatch);

  //Generate random number for each bitcoin
  var bit1= Math.floor(Math.random()*12+1);
  console.log("#1 is " + bit1);
  var bit2= Math.floor(Math.random()*12+1);
  console.log("#2 is " + bit2);
  var bit3= Math.floor(Math.random()*12+1);
  console.log("#3 is " + bit3);
  var bit4= Math.floor(Math.random()*12+1);
  console.log("#4 is " + bit4); 
	
  // when button is clicked the button value is added to the score & displayed on the page
  // then the didIWin function is called 
  $("#button-one").on("click", function(){
  yourScore = yourScore + bit1;
  $("#calculated-score").text(yourScore);
  console.log(yourScore);
  didIWin();
  })

  $("#button-two").on("click", function(){
  yourScore = yourScore + bit2;
  $("#calculated-score").text(yourScore);
  console.log(yourScore);
  didIWin();
  })

  $("#button-three").on("click", function(){
  yourScore = yourScore + bit3;
  $("#calculated-score").text(yourScore);
  console.log(yourScore);
  didIWin();
  })

  $("#button-four").on("click", function(){
  yourScore = yourScore + bit4;
  $("#calculated-score").text(yourScore);
  console.log(yourScore);
  didIWin();
  })

  // this function retains wins/losses but starts a new game
  function resetGame(){
    numToMatch = Math.floor(Math.random() * (120 - 19) + 19); 
    console.log(numToMatch + " is the new match number");
    $("#random-number").text(numToMatch);
     //Regenerate random number for each bitcoin
      bit1= Math.floor(Math.random()*12+1);
      console.log("#1 is " + bit1);
      bit2= Math.floor(Math.random()*12+1);
      console.log("#2 is " + bit2);
      bit3= Math.floor(Math.random()*12+1);
      console.log("#3 is " + bit3);
      bit4= Math.floor(Math.random()*12+1);
      console.log("#4 is " + bit4); 
    yourScore = 0;
    $("#calculated-score").text(yourScore);
    outcome = "are playing!";
  }

    // this function compares the current score to the random number to determine win/no win
  function didIWin(){
    if (yourScore === numToMatch) {
    outcome = "won!"
    outcomeText.textContent = "You " + outcome; 
    alert("You won. Play again!");
    wins++;
    winsText.textContent = "Wins: " + wins;
    resetGame();
    } else if (yourScore > numToMatch) {
    outcome = "lost :(";
    outcomeText.textContent = "You " + outcome;
    alert("Sorry! You lost. Try again")
    losses++
    lossesText.textContent = "Losses: " + losses;
    resetGame();
    } else {
    console.log("keep going");
  }}}