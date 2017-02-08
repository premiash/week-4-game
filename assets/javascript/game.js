

var minNumber = 19;
var maxNumber = 120

var counter = 0;

var randomNumber = randomNumberFromRange(minNumber, maxNumber);

function randomNumberFromRange(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

$("#targetScore").text("Target Score : " + randomNumber);
console.log(randomNumber);	
	
$(document).on("click", "img", function() 




/*	$("#crystal-imageOne").on("click", function() 
	{
		var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
		// var randomCrystalNumber = [];

		randomCrystalNumber = numberOptions[Math.floor(Math.random() * numberOptions.length)];

		console.log ("random number is: " + randomCrystalNumber); 
		$("#yourScore").html(randomCrystalNumber)
		
	});

	$("#crystal-imageTwo").on("click", function() 
	{
		var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
		// var randomCrystalNumber = [];

		randomCrystalNumber = numberOptions[Math.floor(Math.random() * numberOptions.length)];

		console.log ("random number is: " + randomCrystalNumber); 
		$("#yourScore").html(randomCrystalNumber)

		
	}); */





