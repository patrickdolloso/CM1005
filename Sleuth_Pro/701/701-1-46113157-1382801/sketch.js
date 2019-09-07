/*

Officer: 1382801
CaseNum: 701-1-46113157-1382801

Case 701 - Credible cat thief - stage 2

Kid they need you down at the precinct again.
This time it's a sneaky cat thief who has been absconding with the neighbourhoods felines for some time.
Luckily old Mrs Olivetti caught a glimpse of them as they disappeared over her back fence.
We’ve a bunch of likely characters lined-up but we need your brains to solve the mystery.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function checkSuspect(suspectObj){}
 - if()

Witness statement:

It was last Thursday, I heard noises outside so I looked out and saw a person in the steet. It's hard to say. They had short black hair. The person I saw was female. I'm not quite sure. I remember they had a ox tattoo. They wore very thin glasses. By the look of them they were younger than 65. I would say they were shorter than 188 cm. That's all I can remember about them. 

*/

var suspectsArray = [
	{ 
		"name": "TU MOHWAWK",
		"tattoo": "bull",
		"hair": "ginger",
		"gender": "female",
		"height": 165,
		"age": 45
	},
	{ 
		"name": "SUMMER COURTWOOD",
		"tattoo": "sword",
		"hair": "shaved",
		"gender": "male",
		"height": 150,
		"age": 43
	},
	{ 
		"name": "LIANNE ASHELY",
		"tattoo": "ox",
		"hair": "short black",
		"gender": "female",
		"height": 182,
		"age": 62
	},
	{ 
		"name": "LAVERNE PORTOS",
		"tattoo": "dragon",
		"hair": "thin blond",
		"gender": "male",
		"height": 175,
		"age": 38
	},
	{ 
		"name": "JULIANA JACQUELIN",
		"tattoo": "big arrow",
		"hair": "thick black",
		"gender": "male",
		"height": 178,
		"age": 36
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
function checkSuspect(suspectsArray)
{
	if(
		suspectsArray.hair == "short black" &&
		suspectsArray.gender == "female" &&
		suspectsArray.tattoo == "ox" &&
		suspectsArray.age < 65 &&
		suspectsArray.height < 188
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

  for(let i = 0 ; i < suspectsArray.length; i++){
    if(checkSuspect(suspectsArray[i]) == true){
      fill(255,0,0);
      text(suspectsArray[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,255,0);
      text(suspectsArray[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
