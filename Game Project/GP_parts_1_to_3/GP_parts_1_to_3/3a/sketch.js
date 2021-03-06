/*

The Game Project

Week 3

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;

var isLeft;
var isRight;
var isPlummeting;
var isFalling;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	//draw the canyon


	//the game character
	if(isLeft && isFalling)
	{
		// add your jumping-left code
		fill(255,223,196);
		ellipse(gameChar_x, gameChar_y-50, 35);
	
		fill(255,0,0)
		rect(gameChar_x-13,gameChar_y-35,26,30);
	
		fill(0);
		rect(gameChar_x-5,gameChar_y-5,10,10);
	
		ellipse(gameChar_x-5,gameChar_y-55,5);	
		
		fill(255,223,196);
		stroke(0);
		rect(gameChar_x,gameChar_y-55,10,25);
	
		fill(0);
		ellipse(gameChar_x-7,gameChar_y-45,10);
	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
	fill(255,223,196);
	ellipse(gameChar_x, gameChar_y-50, 35);

	fill(255,0,0)
	rect(gameChar_x-13,gameChar_y-35,26,30);

	fill(0);
	rect(gameChar_x-5,gameChar_y-5,10,10);

	ellipse(gameChar_x+5,gameChar_y-55,5);
	
	fill(255,223,196);
	stroke(0);
	rect(gameChar_x-10,gameChar_y-55,10,25);

	fill(0);
	ellipse(gameChar_x+7,gameChar_y-45,10);


	}
	else if(isLeft)
	{
		// add your walking left code

	fill(255,223,196);
	ellipse(gameChar_x, gameChar_y-50, 35);

	fill(255,0,0)
	rect(gameChar_x-13,gameChar_y-35,26,30);

	fill(0);
	rect(gameChar_x-5,gameChar_y-5,10,10);

	ellipse(gameChar_x-5,gameChar_y-55,5);	
	
	fill(255,223,196);
	stroke(0);
	rect(gameChar_x,gameChar_y-35,10,25);

	fill(0);
	rect(gameChar_x-15,gameChar_y-45,10,2);
	

	}
	else if(isRight)
	{
		// add your walking right code
	fill(255,223,196);
	ellipse(gameChar_x, gameChar_y-50, 35);

	fill(255,0,0)
	rect(gameChar_x-13,gameChar_y-35,26,30);

	fill(0);
	rect(gameChar_x-5,gameChar_y-5,10,10);

	ellipse(gameChar_x+5,gameChar_y-55,5);
	
	fill(255,223,196);
	stroke(0);
	rect(gameChar_x-10,gameChar_y-35,10,25);

	fill(0);
	rect(gameChar_x+5,gameChar_y-45,10,2);


	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
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
	
		ellipse(gameChar_x,gameChar_y-45,15);
		
		fill(255,223,196);
		stroke(0);
		rect(gameChar_x-20,gameChar_y-55,10,25);
		rect(gameChar_x+10,gameChar_y-55,10,25);
		

	}
	else
	{
		// add your standing front facing code
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
	
	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here


	// move left
	if(isLeft == true){
		gameChar_x -=10;
	}

	// move right
	else if(isRight == true){
		gameChar_x +=10;
	}

	// in the air, set to falling
	if(gameChar_y < floorPos_y){
		gameChar_y += 5;
		isFalling = true;
	}
	else {
		gameChar_y < floorPos_y;
		isFalling = false;
	}

}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);

	// Left arrow pressed
	if(keyCode == 37){
		console.log("left arrow");
		isLeft = true;
	}

	// right arrow pressed
	if(keyCode == 39){
		console.log("right arrow");
		isRight = true;
	}

	// spacebar pressed and character on the groud	
	if(keyCode == 32 && gameChar_y == floorPos_y){
		gameChar_y -= 100;		
	}

}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);

	if(keyCode == 37){
		console.log("left arrow");
		isLeft = false;
	}

	if(keyCode == 39){
		console.log("right arrow");
		isRight = false;
	}

	if(keyCode == 32) {
		isFalling = false;
	}

}
