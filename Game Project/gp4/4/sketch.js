/*

The Game Project 4 - Side scrolling

Week 6

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var scrollPos;

var clouds;
var mountains;
var trees_x;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Initialise arrays of scenery objects.

	trees_x = [100,300,500,1000];
	clouds = [
		{pos_x: 100, pos_y: 120},
		{pos_x: 600, pos_y: 120},
		{pos_x: 800, pos_y: 120}
	];

	mountains_x = [];
}

function draw()
{
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height/4); // draw some green ground

	push();
	translate(scrollPos,0);

	// Draw clouds.
	for(var i = 0; i < clouds.length; i++){
		noStroke();
		fill(255,255,255,75);
		ellipse(clouds[i].pos_x,clouds[i].pos_y,65,40);
		ellipse(clouds[i].pos_x+25,clouds[i].pos_y,55);
		ellipse(clouds[i].pos_x+45,clouds[i].pos_y,65,40);
	};

	// Draw mountains.

	// Draw trees.
	for(var i = 0; i < trees_x.length; i++){
		stroke(0);
		fill(106, 83, 47);
		rect(trees_x[i],floorPos_y,20,-55);
		fill(85,107,47)
		triangle(trees_x[i]+10,floorPos_y-150,trees_x[i]-40,floorPos_y-30,trees_x[i]+60,floorPos_y-30);	
	}

	// Draw canyons

	// Draw collectable items

	pop();
	// Draw the game character - this must be last
	fill(255,223,196);
	ellipse(gameChar_x, gameChar_y-50, 35);

	fill(255,0,0)
	rect(gameChar_x-13,gameChar_y-35,26,30);

	fill(0);
	rect(gameChar_x-15,gameChar_y-5,10,10);

	fill(0);
	rect(gameChar_x+5,gameChar_y-5,10,10);


	ellipse(gameChar_x-5,gameChar_y-55,5);
	ellipse(gameChar_x+5,gameChar_y-55,5);

	rect(gameChar_x-7,gameChar_y-45,15,2);
	
	fill(255,223,196);
	stroke(0)
	rect(gameChar_x-20,gameChar_y-35,10,25);
	rect(gameChar_x+10,gameChar_y-35,10,25);


	//////// Game character logic ///////
	// Logic to move

	if(isLeft)
	{
		if(gameChar_x > width * 0.2)
		{
			gameChar_x -= 5;
		}
		else
		{
			scrollPos += 5;
		}
	}

	if(isRight)
	{
		if(gameChar_x < width * 0.8)
		{
			gameChar_x  += 5;
		}
		else
		{
			scrollPos -= 5; // negative for moving against the background
		}

	}
}

function keyPressed()
{

	if(key == 'A' || keyCode == 37)
	{
		isLeft = true;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = true;
	}

}

function keyReleased()
{
	if(key == 'A' || keyCode == 37)
	{
		isLeft = false;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = false;
	}
}
