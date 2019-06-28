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
    
    isLeft = false;
    isRight = false;
    isPlummeting =  false;
    isFalling = false;
    
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
        noStroke();
        fill(130, 60, 0);
        ellipse(gameChar_x - 8, gameChar_y - 10, 20, 8);
        //trunk
        fill(180, 110, 40);
        ellipse(gameChar_x, gameChar_y - 21, 25, 30);
        fill(240, 170, 100);
        ellipse(gameChar_x - 9, gameChar_y - 22, 8, 20);
        fill(130, 60, 0);
        ellipse(gameChar_x - 8, gameChar_y - 20, 20, 8);
        //head
        fill(130, 60, 0);
        ellipse(gameChar_x - 13, gameChar_y - 50, 12, 12);
        ellipse(gameChar_x + 13, gameChar_y - 50, 12, 12);
        fill(240, 170, 100);
        ellipse(gameChar_x - 13, gameChar_y - 50, 6, 6);
        ellipse(gameChar_x + 13, gameChar_y - 50, 6, 6);
        fill(180, 110, 40);
        ellipse(gameChar_x, gameChar_y - 37, 35, 30);
        fill(210, 140, 70);
        ellipse(gameChar_x, gameChar_y - 29, 25, 15);
        fill(240, 170, 100);
        ellipse(gameChar_x, gameChar_y - 32, 9, 9);
        //mouth
        fill(0);
        triangle(gameChar_x, gameChar_y - 34, gameChar_x - 2, gameChar_y - 32, gameChar_x + 2, gameChar_y - 32);
        noFill();
        stroke(1);
        arc(gameChar_x - 1.5, gameChar_y - 32, 3, 3, 0, HALF_PI);
        arc(gameChar_x + 1.5, gameChar_y - 32, 3, 3, 1, PI + QUARTER_PI, TWO_PI);
        //rectangle to modify arc
        noStroke();
        fill(240, 170, 100);
        rect(gameChar_x + 2, gameChar_y - 32, 2, 2);
        //eyes
        fill(0);
        ellipse(gameChar_x - 7, gameChar_y - 40, 3, 4);
        ellipse(gameChar_x + 7, gameChar_y - 40, 3, 4);
        noStroke();
        fill(255);
        ellipse(gameChar_x - 8, gameChar_y - 41, 0.5, 1);
        ellipse(gameChar_x + 6, gameChar_y - 41, 0.5, 1);
	}
	
    else if(isRight && isFalling)
	{
		// add your jumping-right code
        noStroke();
        fill(130, 60, 0);
        ellipse(gameChar_x + 8, gameChar_y - 10, 20, 8);
        //trunk
        fill(180, 110, 40);
        ellipse(gameChar_x, gameChar_y - 21, 25, 30);
        fill(240, 170, 100);
        ellipse(gameChar_x + 9, gameChar_y - 22, 8, 20);
        fill(130, 60, 0);
        ellipse(gameChar_x + 8, gameChar_y - 20, 20, 8);
        //head
        fill(130, 60, 0);
        ellipse(gameChar_x - 13, gameChar_y - 50, 12, 12);
        ellipse(gameChar_x + 13, gameChar_y - 50, 12, 12);
        fill(240, 170, 100);
        ellipse(gameChar_x - 13, gameChar_y - 50, 6, 6);
        ellipse(gameChar_x + 13, gameChar_y - 50, 6, 6);
        fill(180, 110, 40);
        ellipse(gameChar_x, gameChar_y - 37, 35, 30);
        fill(210, 140, 70);
        ellipse(gameChar_x, gameChar_y - 29, 25, 15);
        fill(240, 170, 100);
        ellipse(gameChar_x, gameChar_y - 32, 9, 9);
        //mouth
        fill(0);
        triangle(gameChar_x, gameChar_y - 34, gameChar_x - 2, gameChar_y - 32, gameChar_x + 2, gameChar_y - 32);
        noFill();
        stroke(1);
        arc(gameChar_x - 1.5, gameChar_y - 32, 3, 3, 0, HALF_PI);
        arc(gameChar_x + 1.5, gameChar_y - 32, 3, 3, 1, PI + QUARTER_PI, TWO_PI);
        //rectangle to modify arc
        noStroke();
        fill(240, 170, 100);
        rect(gameChar_x + 2, gameChar_y - 32, 2, 2);
        //eyes
        fill(0);
        ellipse(gameChar_x - 7, gameChar_y - 40, 3, 4);
        ellipse(gameChar_x + 7, gameChar_y - 40, 3, 4);
        noStroke();
        fill(255);
        ellipse(gameChar_x - 8, gameChar_y - 41, 0.5, 1);
        ellipse(gameChar_x + 6, gameChar_y - 41, 0.5, 1);
	}
	
    else if(isLeft)
	{
		// add your walking left code
        noStroke();
        fill(130, 60, 0);
        ellipse(gameChar_x - 8, gameChar_y - 10, 20, 8);
        ellipse(gameChar_x, gameChar_y - 7, 8, 20);
        //trunk
        fill(180, 110, 40);
        ellipse(gameChar_x, gameChar_y - 21, 25, 30);
        fill(130, 60, 0);
        ellipse(gameChar_x, gameChar_y - 17, 8, 20);
        fill(240, 170, 100);
        ellipse(gameChar_x - 9, gameChar_y - 22, 8, 20);
        //head
        fill(130, 60, 0);
        ellipse(gameChar_x - 13, gameChar_y - 50, 12, 12);
        ellipse(gameChar_x + 13, gameChar_y - 50, 12, 12);
        fill(240, 170, 100);
        ellipse(gameChar_x - 13, gameChar_y - 50, 6, 6);
        ellipse(gameChar_x + 13, gameChar_y - 50, 6, 6);
        fill(180, 110, 40);
        ellipse(gameChar_x, gameChar_y - 37, 35, 30);
        fill(210, 140, 70);
        ellipse(gameChar_x, gameChar_y - 29, 25, 15);
        fill(240, 170, 100);
        ellipse(gameChar_x, gameChar_y - 32, 9, 9);
        //mouth
        fill(0);
        triangle(gameChar_x, gameChar_y - 34, gameChar_x - 2, gameChar_y - 32, gameChar_x + 2, gameChar_y - 32);
        noFill();
        stroke(1);
        arc(gameChar_x - 1.5, gameChar_y - 32, 3, 3, 0, HALF_PI);
        arc(gameChar_x + 1.5, gameChar_y - 32, 3, 3, 1, PI + QUARTER_PI, TWO_PI);
        //rectangle to modify arc
        noStroke();
        fill(240, 170, 100);
        rect(gameChar_x + 2, gameChar_y - 32, 2, 2);
        //eyes
        fill(0);
        ellipse(gameChar_x - 7, gameChar_y - 40, 3, 4);
        ellipse(gameChar_x + 7, gameChar_y - 40, 3, 4);
        noStroke();
        fill(255);
        ellipse(gameChar_x - 8, gameChar_y - 41, 0.5, 1);
        ellipse(gameChar_x + 6, gameChar_y - 41, 0.5, 1);
	}
	
    else if(isRight)
	{
		// add your walking right code
        noStroke();
        fill(130, 60, 0);
        ellipse(gameChar_x + 8, gameChar_y - 10, 20, 8);
        ellipse(gameChar_x, gameChar_y - 7, 8, 20);
        //trunk
        fill(180, 110, 40);
        ellipse(gameChar_x, gameChar_y - 21, 25, 30);
        fill(130, 60, 0);
        ellipse(gameChar_x, gameChar_y - 17, 8, 20);
        fill(240, 170, 100);
        ellipse(gameChar_x + 9, gameChar_y - 22, 8, 20);
        //head
        fill(130, 60, 0);
        ellipse(gameChar_x - 13, gameChar_y - 50, 12, 12);
        ellipse(gameChar_x + 13, gameChar_y - 50, 12, 12);
        fill(240, 170, 100);
        ellipse(gameChar_x - 13, gameChar_y - 50, 6, 6);
        ellipse(gameChar_x + 13, gameChar_y - 50, 6, 6);
        fill(180, 110, 40);
        ellipse(gameChar_x, gameChar_y - 37, 35, 30);
        fill(210, 140, 70);
        ellipse(gameChar_x, gameChar_y - 29, 25, 15);
        fill(240, 170, 100);
        ellipse(gameChar_x, gameChar_y - 32, 9, 9);
        //mouth
        fill(0);
        triangle(gameChar_x, gameChar_y - 34, gameChar_x - 2, gameChar_y - 32, gameChar_x + 2, gameChar_y - 32);
        noFill();
        stroke(1);
        arc(gameChar_x - 1.5, gameChar_y - 32, 3, 3, 0, HALF_PI);
        arc(gameChar_x + 1.5, gameChar_y - 32, 3, 3, 1, PI + QUARTER_PI, TWO_PI);
        //rectangle to modify arc
        noStroke();
        fill(240, 170, 100);
        rect(gameChar_x + 2, gameChar_y - 32, 2, 2);
        //eyes
        fill(0);
        ellipse(gameChar_x - 7, gameChar_y - 40, 3, 4);
        ellipse(gameChar_x + 7, gameChar_y - 40, 3, 4);
        noStroke();
        fill(255);
        ellipse(gameChar_x - 8, gameChar_y - 41, 0.5, 1);
        ellipse(gameChar_x + 6, gameChar_y - 41, 0.5, 1);
	}
	
    else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
        noStroke();
        fill(180, 110, 40);
        ellipse(gameChar_x, gameChar_y - 21, 25, 30);
        fill(240, 170, 100);
        ellipse(gameChar_x, gameChar_y - 22, 10, 20);
        ellipse(gameChar_x - 5, gameChar_y - 22, 6, 12);
        ellipse(gameChar_x + 5, gameChar_y - 22, 6, 12);
        //head
        fill(130, 60, 0);
        ellipse(gameChar_x - 13, gameChar_y - 50, 12, 12);
        ellipse(gameChar_x + 13, gameChar_y - 50, 12, 12);
        fill(240, 170, 100);
        ellipse(gameChar_x - 13, gameChar_y - 50, 6, 6);
        ellipse(gameChar_x + 13, gameChar_y - 50, 6, 6);
        fill(180, 110, 40);
        ellipse(gameChar_x, gameChar_y - 37, 35, 30);
        fill(210, 140, 70);
        ellipse(gameChar_x, gameChar_y - 29, 25, 15);
        fill(240, 170, 100);
        ellipse(gameChar_x, gameChar_y - 32, 9, 9);
        //mouth
        fill(0);
        triangle(gameChar_x, gameChar_y - 34, gameChar_x - 2, gameChar_y - 32, gameChar_x + 2, gameChar_y - 32);
        noFill();
        stroke(1);
        arc(gameChar_x - 1.5, gameChar_y - 32, 3, 3, 0, HALF_PI);
        arc(gameChar_x + 1.5, gameChar_y - 32, 3, 3, 1, PI + QUARTER_PI, TWO_PI);
        //rectangle to modify arc
        noStroke();
        fill(240, 170, 100);
        rect(gameChar_x + 2, gameChar_y - 32, 2, 2);
        //eyes
        fill(0);
        ellipse(gameChar_x - 7, gameChar_y - 40, 3, 4);
        ellipse(gameChar_x + 7, gameChar_y - 40, 3, 4);
        noStroke();
        fill(255);
        ellipse(gameChar_x - 8, gameChar_y - 41, 0.5, 1);
        ellipse(gameChar_x + 6, gameChar_y - 41, 0.5, 1);
        //legs and arms
        fill(110, 40, 0);
        ellipse(gameChar_x - 8, gameChar_y - 10, 8, 10);
        ellipse(gameChar_x + 8, gameChar_y - 10, 8, 10);
        fill(130, 60, 0);
        ellipse(gameChar_x - 11, gameChar_y - 30, 8, 20);
        ellipse(gameChar_x + 11, gameChar_y - 30, 8, 20);
        fill(210, 140, 70);
        ellipse(gameChar_x -8, gameChar_y - 12, 2, 2);
        ellipse(gameChar_x -10, gameChar_y - 11, 2, 2);
        ellipse(gameChar_x -6, gameChar_y - 11, 2, 2);
        ellipse(gameChar_x +8, gameChar_y - 12, 2, 2);
        ellipse(gameChar_x +10, gameChar_y - 11, 2, 2);
        ellipse(gameChar_x +6, gameChar_y - 11, 2, 2);
        ellipse(gameChar_x -8, gameChar_y - 8, 3, 4);
        ellipse(gameChar_x +8, gameChar_y - 8, 3, 4);
	}
	
    else
	{
		// add your standing front facing code
        noStroke();
        fill(130, 60, 0);
        ellipse(gameChar_x - 10, gameChar_y - 17, 8, 20);
        ellipse(gameChar_x + 10, gameChar_y - 17, 8, 20);
        ellipse(gameChar_x - 5, gameChar_y - 7, 8, 20);
        ellipse(gameChar_x + 5, gameChar_y - 7, 8, 20);
        //trunk
        fill(180, 110, 40);
        ellipse(gameChar_x, gameChar_y - 21, 25, 30);
        fill(240, 170, 100);
        ellipse(gameChar_x, gameChar_y - 22, 10, 20);
        ellipse(gameChar_x - 5, gameChar_y - 22, 6, 12);
        ellipse(gameChar_x + 5, gameChar_y - 22, 6, 12);
        //head
        fill(130, 60, 0);
        ellipse(gameChar_x - 13, gameChar_y - 50, 12, 12);
        ellipse(gameChar_x + 13, gameChar_y - 50, 12, 12);
        fill(240, 170, 100);
        ellipse(gameChar_x - 13, gameChar_y - 50, 6, 6);
        ellipse(gameChar_x + 13, gameChar_y - 50, 6, 6);
        fill(180, 110, 40);
        ellipse(gameChar_x, gameChar_y - 37, 35, 30);
        fill(210, 140, 70);
        ellipse(gameChar_x, gameChar_y - 29, 25, 15);
        fill(240, 170, 100);
        ellipse(gameChar_x, gameChar_y - 32, 9, 9);
        //mouth
        fill(0);
        triangle(gameChar_x, gameChar_y - 34, gameChar_x - 2, gameChar_y - 32, gameChar_x + 2, gameChar_y - 32);
        noFill();
        stroke(1);
        arc(gameChar_x - 1.5, gameChar_y - 32, 3, 3, 0, HALF_PI);
        arc(gameChar_x + 1.5, gameChar_y - 32, 3, 3, 1, PI + QUARTER_PI, TWO_PI);
        //rectangle to modify arc
        noStroke();
        fill(240, 170, 100);
        rect(gameChar_x + 2, gameChar_y - 32, 2, 2);
        //eyes
        fill(0);
        ellipse(gameChar_x - 7, gameChar_y - 40, 3, 4);
        ellipse(gameChar_x + 7, gameChar_y - 40, 3, 4);
        noStroke();
        fill(255);
        ellipse(gameChar_x - 8, gameChar_y - 41, 0.5, 1);
        ellipse(gameChar_x + 6, gameChar_y - 41, 0.5, 1);
	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
    if(isLeft == true)
    {
        gameChar_x -= 1;
    }
    
    if(isRight == true)
    {
        gameChar_x += 1;
    }
    
    if(gameChar_y < floorPos_y)
    {
        gameChar_y += 5;
        isFalling = true;
    }
    else{
        isFalling = false;
    }
}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.
    if(keyCode == 37)
    {
        console.log("left arrow");
        isLeft = true;
    }
    else if(keyCode == 39)
    {
        console.log("right arrow");
        isRight = true;
    }
    if(keyCode == 32 && gameChar_y == floorPos_y)
    {
        console.log("space bar")
        gameChar_y -= 100; 
        isFalling = false;
    }

	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.
        if(keyCode == 37)
    {
        console.log("left arrow");
        isLeft = false;
    }
    else if(keyCode == 39)
    {
        console.log("right arrow");
        isRight = false;
    }
   

	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
}
