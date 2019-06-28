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
var isFalling;
var isPlummeting;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

    isLeft = false;
    isRight = false;
    isFalling = false;
    isPlummeting = false;
    

}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground


    
    noStroke();
	//the game character
	if(isLeft && isFalling)
	{
		// add your jumping-left code
        //jumping-left
        //head
        fill(255,200,200);
        ellipse(gameChar_x,gameChar_y-63,25);
        //torso
        fill(255,0,0);
        ellipse(gameChar_x,gameChar_y-41,25,25);
        //arms
        fill(255,200,200);
        rect(gameChar_x -20,gameChar_y-48,10,5);
        rect(gameChar_x -20,gameChar_y-41,10,5);
        //legs
        fill(0,0,255);
        quad(gameChar_x -6,gameChar_y-30,gameChar_x -1,gameChar_y-30,
            gameChar_x -5,gameChar_y-16,gameChar_x -10,gameChar_y-16);
        rect(gameChar_x +1,gameChar_y-30,5,15);    
	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
        //jumping-right
        //head
        fill(255,200,200);
        ellipse(gameChar_x,gameChar_y-63,25);
        //torso
        fill(255,0,0);
        ellipse(gameChar_x,gameChar_y-41,25,25);
        //arms
        fill(255,200,200);
        rect(gameChar_x +10,gameChar_y-48,10,5);
        rect(gameChar_x +10,gameChar_y-41,10,5);
        //legs
        fill(0,0,255);
        rect(gameChar_x -6,gameChar_y-30,5,15);
        quad(gameChar_x +1,gameChar_y-30,gameChar_x +6,gameChar_y-30,
            gameChar_x + 11,gameChar_y-16,gameChar_x +5,gameChar_y-16);
	}
	else if(isLeft)
	{
		// add your walking left code
        //walking-left
        //head
        fill(255,200,200);
        ellipse(gameChar_x,gameChar_y-51,25);
        //torso
        fill(255,0,0);
        ellipse(gameChar_x,gameChar_y-26,20,30);
        //arms
        fill(255,200,200);
        rect(gameChar_x -20,gameChar_y-33,10,5);
        rect(gameChar_x -20,gameChar_y-26,10,5);
        //legs
        fill(0,0,255);
        quad(gameChar_x -6,gameChar_y-14,gameChar_x -1,gameChar_y-14,
            gameChar_x -5,gameChar_y,gameChar_x -10,gameChar_y);
        rect(gameChar_x +1,gameChar_y-14,5,15);    
	}
	else if(isRight)
	{
		// add your walking right code
        //walking-right
        //head
        fill(255,200,200);
        ellipse(gameChar_x,gameChar_y-51,25);
        //torso
        fill(255,0,0);
        ellipse(gameChar_x,gameChar_y-26,20,30);
        //arms
        fill(255,200,200);
        rect(gameChar_x +10,gameChar_y-33,10,5);
        rect(gameChar_x +10,gameChar_y-26,10,5);
        //legs
        fill(0,0,255);
        rect(gameChar_x -6,gameChar_y-14,5,15);
        quad(gameChar_x +1,gameChar_y-14,gameChar_x +6,gameChar_y-14,
            gameChar_x + 11,gameChar_y,gameChar_x +5,gameChar_y);
	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
        //jumping-forward
        //head
        fill(255,200,200);
        ellipse(gameChar_x,gameChar_y-63,25);
        //torso
        fill(255,0,0);
        ellipse(gameChar_x,gameChar_y-41,25,25);
        //arms
        fill(255,200,200);
        rect(gameChar_x -20,gameChar_y-48,10,5);
        rect(gameChar_x +10,gameChar_y-48,10,5);
        //legs
        fill(0,0,255);
        rect(gameChar_x -6,gameChar_y-30,5,15);
        rect(gameChar_x +1,gameChar_y-30,5,15);
	}
	else
	{
		// add your standing front facing code
        //standing-front
        //head
        fill(255,200,200);
        ellipse(gameChar_x,gameChar_y-51,25);
        //torso
        fill(255,0,0);
        ellipse(gameChar_x,gameChar_y-26,20,30);
        //arms
        fill(255,200,200);
        rect(gameChar_x -20,gameChar_y-33,10,5);
        rect(gameChar_x +10,gameChar_y-33,10,5);
        //legs
        fill(0,0,255);
        rect(gameChar_x -6,gameChar_y-14,5,15);
        rect(gameChar_x +1,gameChar_y-14,5,15);
	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here

    // move left
    if (isLeft)
    {
        gameChar_x -= 10;
        if (gameChar_x <= 0)
        {
            gameChar_x = width;
        }
    }
    
    // move right
    if (isRight)
    {
        gameChar_x += 10;
        if (gameChar_x >= width)
        {
            gameChar_x = 0;
        }    }

    // in the air, so set to falling
    if(gameChar_y < floorPos_y)
    {
        gameChar_y += 2;
        isFalling = true;
    }
    else
    {
        gameChar_y < floorPos_y;
        isFalling = false;
    }
    

}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.
    
    // left arrow press
    if (keyCode == 37)
    {
        isLeft = true;
    }
    
    // right arrow press
    if (keyCode == 39)
    {
        isRight = true;
    }

    // spacebar press and character on the ground
    if (keyCode == 32 && gameChar_y == floorPos_y)
    {
        gameChar_y -= 100;
    }
    
    console.log("gameChar_y: " + gameChar_y);
    console.log("floorPos_y: " + floorPos_y);
	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

    if (keyCode == 37){
        isLeft = false;
    }
    if (keyCode == 39){
        isRight = false;
    }
    if (keyCode == 32){
        isFalling = false;
    }
    

    console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
}
