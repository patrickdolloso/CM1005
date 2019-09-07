/*

Officer: 1382801
CaseNum: 701-2-34949270-1382801

Case 701 - Recognisable robber - stage 3

Kid you’re becoming a victim of your own success.
I just had a call from DI Max down at the precinct. He specifically requested your services.
They finally have a reliable witness for a robber who has been causing mayhem for some months.
Luckily they have a witness statement from bridget zetland. You know what to do kid.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchProperties(suspectObj){}
 - if()

Witness statement:

It was last Thursday, I heard noises outside so I looked out and saw a person in the steet. Their expression seemed depressed. They were fairly tall, I think between a height of 168 and 210 cm. They seemed to be between the age of 22 and 52 years old. It was so scary! They wore very thin glasses. It was very dark and I could barely see, I'll never forget their brown eyes. They were wearing a black overcoat. The person I saw was female. They brobably weigh between 52 and 78 kg. I hope I never have to go through that again. 

*/

var usualSuspects = [
	{ 
		"name": "JESUS BROADVIEW",
		"eyes": "brown",
		"expression": "confused",
		"coat": "green jacket",
		"glasses": "red",
		"weight": 77,
		"age": 35,
		"height": 161
	},
	{ 
		"name": "JACQUELINE DAVISWOOD",
		"eyes": "pale",
		"expression": "menacing",
		"coat": "yellow poncho",
		"glasses": "white",
		"weight": 79,
		"age": 32,
		"height": 178
	},
	{ 
		"name": "LINETTE WILLMAR",
		"eyes": "black",
		"expression": "sad",
		"coat": "red parka",
		"glasses": "blue",
		"weight": 73,
		"age": 40,
		"height": 173
	},
	{ 
		"name": "TU MOHWAWK",
		"eyes": "grey",
		"expression": "nerveous",
		"coat": "green army coat",
		"glasses": "cheap plastic",
		"weight": 78,
		"age": 50,
		"height": 182
	},
	{ 
		"name": "NELSON MYRLE",
		"eyes": "green",
		"expression": "nerveous",
		"coat": "black hoodie",
		"glasses": "very thick",
		"weight": 89,
		"age": 36,
		"height": 179
	},
	{ 
		"name": "JAUNITA CASIMERE",
		"eyes": "brown",
		"expression": "depressed",
		"coat": "black overcoat",
		"glasses": "very thin",
		"weight": 68,
		"age": 42,
		"height": 204
	},
	{ 
		"name": "DRUSILLA OORIN",
		"eyes": "blue",
		"expression": "blank",
		"coat": "white fur coat",
		"glasses": "thin metallic",
		"weight": 74,
		"age": 42,
		"height": 157
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
function matchProperties(suspectObj)
{
	if
	(
		suspectObj.expression == "depressed" &&
		suspectObj.height < 210 &&
		suspectObj.height > 168 &&
		suspectObj.age > 22 &&
		suspectObj.age < 52 &&
		suspectObj.coat == "black overcoat" &&
		suspectObj.weight > 52 &&
		suspectObj.weight < 78 &&
		suspectObj.eyes == "brown" &&
		suspectObj.glasses == "very thin"
	)
	{
		return true;
	}


	return false;
}



function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < usualSuspects.length; i++){
    let matchingProperties = matchProperties(usualSuspects[i]);
    fill(50 * matchingProperties,250 - (50 * matchingProperties),0);
    text("found " + matchingProperties + " matching properties for " + usualSuspects[i].name, 60, 60 + i * 20);
  }
}
