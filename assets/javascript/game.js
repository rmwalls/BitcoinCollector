function startGame() {
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
    outcome = "are playing!";
    outcomeText.textContent = "You " + outcome;
  }

  function didIWin(){
    if (yourScore === numToMatch) {
    outcome = "won!"
    outcomeText.textContent = "You " + outcome; 
    prompt("You won. Play again!");
    wins++;
    winsText.textContent = "Wins: " + wins;
    resetGame();
    } else if (yourScore > numToMatch) {
    outcome = "lost";
    outcomeText.textContent = "You " + outcome;
    alert("Sorry! You lost. Try again")
    losses++
    lossesText.textContent = "Losses: " + losses;
    resetGame();
    } else {
    console.log("keep going");
    
          }}}