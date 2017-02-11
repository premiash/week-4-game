var minNumber = 19;
var maxNumber = 120

var wins = 0;
var losses = 0;

var crystalValues = [];
var excludedValues = [];

var targetScore;
var yourScore;

var initializeGame = function()
{
	crystalValues = [];
	excludedValues = [];

	targetScore = calculateRandomNumber(minNumber, maxNumber); //FromRange
	yourScore = 0;

	calculateCrystalValues();

	$("#targetScore").text("Target Score: " + targetScore);

	$("#yourScore").text("Your Score: " + yourScore);
}

initializeGame();

$("#crystal-imageone").on('click', function(event) {
	updateYourScore(crystalValues[0]);
});

$("#crystal-imagetwo").on('click', function(event) {
	updateYourScore(crystalValues[1]);
});

$("#crystal-imagethree").on('click', function(event) {
	updateYourScore(crystalValues[2]);
});
	
$("#crystal-imagefour").on('click', function(event) {
	updateYourScore(crystalValues[3]);
});

function updateYourScore(crystalScore)
{
	

	yourScore += crystalScore;

	$("#yourScore").text("Your Score: " + yourScore);

	if(yourScore > targetScore)
	{
		losses++;

		$("#loses").html("Losses: " + losses);

		console.log("losses :" + losses);
		
		//alert("You lost!!");
		initializeGame();

	} 
	else if (yourScore === targetScore)
	{
		wins++;

		$("#wins").html("Wins: " + wins);
		console.log("Wins :" + wins);
		//alert("You won!!!");
		initializeGame();
	}
}

function calculateRandomNumber(minNumber, maxNumber)
{
    return Math.floor(Math.random()*(maxNumber-minNumber+1)+minNumber);
}

function calculateCrystalValues()
{
	for(var i=0; i<4; i++)
	{
		crystalValues.push(calculateRandomNumber2())
	}
	console.log(crystalValues);
}

function calculateRandomNumber2()
{
	var hasRandomNo = false;
	var randomNumber;

	do
	{
		randomNumber = calculateRandomNumber(1, 12);

		if(isNotExcludedValues(randomNumber, excludedValues))
		{
			hasRandomNo = true;
		}
	}
	while (!hasRandomNo);
	
	excludedValues.push(randomNumber);
	
	return randomNumber;
}

function isNotExcludedValues(randomNumber, excludedValues)
{
	for(var i=0; i < excludedValues.length; i++)
	{
		if(excludedValues[i] === randomNumber)
		{
			return false;
		}
	}
	return true;
}