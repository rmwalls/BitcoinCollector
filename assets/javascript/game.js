      function startGame() {
        var wins=0;
        var losses=0;
        var yourScore=0;
        var winsText = document.getElementById("wins-text");
        winsText.textContent = "Wins: " + wins;
        var lossesText = document.getElementById("losses-text"); 
        lossesText.textContent = "Losses: " + losses;
  
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
	
	playGame();     

       function playGame() {
        $("#button-one").on("click", function(){
        yourScore = yourScore + bit1;
        console.log(yourScore);
   })
        if (yourScore === numToMatch) {
          alert("you win");
          wins++
          resetGame();
         } else if (yourScore > numToMatch) {
            alert("loser");
            losses++
            resetGame();
          } else {
            alert("update score");
	}}}