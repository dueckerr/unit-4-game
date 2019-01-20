// Start 
$(document).ready(function() {
    
    // Random numbers for gems
    var Gem1 = Math.floor(Math.random() * 12 + 1)
    var Gem2 = Math.floor(Math.random() * 12 + 1)
    var Gem3 = Math.floor(Math.random() * 12 + 1)
    var Gem4 = Math.floor(Math.random() * 12 + 1)
    
    Start();
    console.log(Gem1);
    console.log(Gem2);
    console.log(Gem3);
    console.log(Gem4);

    // In game counters
    var counter = 0;
    var wins = 0;
    var losses = 0;
    var RndNumber = Math.floor(Math.random() * 100) + 20;
    
    console.log(RndNumber);
    
    // Changes HTML 
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#number").text(RndNumber);
    $("#counter").text(counter);
    
    function Start () {

        var counter = 0;

        // Reset HTML
        $("#number").text(RndNumber);
        $("#counter").text(counter);

        console.log(Gem1);
        console.log(Gem2);
        console.log(Gem3);
        console.log(Gem4);
        console.log(RndNumber);

    }


    // Reset
    function reset () {
        // Reset Variables
        RndNumber = Math.floor(Math.random() * 100) + 20;
        counter = 0;
        var Gem1 = Math.floor(Math.random() * 12 + 1)
        var Gem2 = Math.floor(Math.random() * 12 + 1)
        var Gem3 = Math.floor(Math.random() * 12 + 1)
        var Gem4 = Math.floor(Math.random() * 12 + 1)
        // Reset HTML
        $("#number").text(RndNumber);
        $("#counter").text(counter);

        console.log(Gem1);
        console.log(Gem2);
        console.log(Gem3);
        console.log(Gem4);
        console.log(RndNumber);
        
    }

    // Gem click functions
    // Pink Gem 
	$('#pinkGem').on('click', function(){
		counter = counter + Gem1;
        console.log(Gem1);
        console.log(counter);
        $('#counter').text(counter);
			if(counter === RndNumber){
				winner ();
			}
			else if(counter > RndNumber){
				loser ();
			}
    });
    
    // Blue Gem 
	$('#blueGem').on('click', function(){
		counter = counter + Gem2;
        console.log(Gem2);
        console.log(counter);
		$('#counter').text(counter);
			if(counter === RndNumber){
				winner ();
			}
			else if(counter > RndNumber){
				loser ();
			}
    });
    
    // Silver Gem 
	$('#silverGem').on('click', function(){
		counter = counter + Gem3;
        console.log(Gem3);
        console.log(counter);
		$('#counter').text(counter);
			if(counter === RndNumber){
				winner ();
			}
			else if(counter > RndNumber){
				loser ();
			}
    });
    
    // Red Gem 
	$('#redGem').on('click', function(){
		counter = counter + Gem4;
        console.log(Gem4);        
        console.log(counter);
		$('#counter').text(counter);
			if(counter === RndNumber){
				winner ();
			}
			else if(counter > RndNumber){
				loser ();
			}
    });
    
    // Winner Function
    function winner () {
        alert("Congrats you won!")
        wins++;
        console.log(wins);
        $("#wins").text(wins);
        reset();
    }

    // Loser Function
    function loser () {
        alert("You lost. Please try again.")
        losses++;
        $("#losses").text(losses);
        reset(); 
    }
});
