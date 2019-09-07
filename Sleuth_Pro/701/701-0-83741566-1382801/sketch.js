/*

Officer: 1382801
CaseNum: 701-0-83741566-1382801

Case 701 - Probable pick pocket - stage 1

There has been a spate of pickpocketing downtown and we’ve been asked to lend a hand down at the precinct.
They’ve managed to collect a witness statement from an unsuspecting tourist majorie jeni and also rounded up a bunch of the usual suspects.
We need you to unravel this mess and work out who is the guilty one.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function testSuspect(suspectObj){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. I remember they had a jellyfish tattoo. I'm not quite sure. Their expression seemed depressed. The person I saw was female. It was very dark and I could barely see, I can't remember anything else about them.

*/

var allSuspects = [
	{ 
		"name": "TU WILLMAR",
		"tattoo": "ox",
		"expression": "angry",
		"gender": "male"
	},
	{ 
		"name": "HANG DEAUVILLE",
		"tattoo": "jellyfish",
		"expression": "depressed",
		"gender": "female"
	},
	{ 
		"name": "RANDEE WARMAN",
		"tattoo": "bull",
		"expression": "blank",
		"gender": "female"
	}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
	createCanvas(640,480);
}

// Declare your function here
function testSuspect(allSuspects)
{

	if(
		allSuspects.gender == "female" && allSuspects.tattoo == "jellyfish" && allSuspects.expression == "depressed")
	{
		return true;
	}

	return false;
}



function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < allSuspects.length; i++){
    if(testSuspect(allSuspects[i]) == true){
      fill(255,0,0);
      text(allSuspects[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,255,0);
      text(allSuspects[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
