var initializeGame = function()
	{
		var counter = 0;
		var crystalValues = 0;

		var targetScore = calculateRandomNumber(minNumber, maxNumber); //FromRange
		var yourScore = 0;

		$("#targetScore").text("Target Score : " + targetScore);

	}

var minNumber = 19;
var maxNumber = 120

var counter = 0;

var crystalValues = [];
var excludedValues = [];

var targetScore = calculateRandomNumber(minNumber, maxNumber); //FromRange
var yourScore = 0;

var gameover = false;

var wins = 0;
var losses = 0;

var yourScore = initializeGame();


$("#targetScore").text("Target Score : " + targetScore);

calculateCrystalValues();

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

	$("#yourScore").text("Your Score : " + yourScore);

	if(yourScore > targetScore)
	{
		loses++;

		$("#loses").html("Loses :" + loses);

		console.log(loses);
		// alert("You lost!!");
		gameover = true;

	} else if (yourScore === targetScore)
	{
		wins++;

		$("#wins").html("Wins :" + wins);
		// alert("You won!!!");
		gameover = true;
	}

	if (gameover) 
	{
		gameover = false;
		yourScore = initializeGame();
		return;
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
	// var test = 0;

	do
	{
		randomNumber = calculateRandomNumber(1, 12);

		if(isNotExcludedValues(randomNumber, excludedValues))
		{
			hasRandomNo = true;
		}
		// test++;
		// console.log('test');
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


