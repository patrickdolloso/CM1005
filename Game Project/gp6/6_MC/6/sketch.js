/*

The Game Project 6 - Adding Game Mechanics

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var gameChar_world_x;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;

var canyons;
var clouds;
var collectable;
var mountains;
var trees_x;

var game_score;
var flagpole;
var lives;

function setup()
{
	createCanvas(1024, 576);
	
	floorPos_y = height * 3/4;
	lives = 3;
	
	startGame();	
}

function draw()
{
	background(204,255,255); // fill the sky blue

	noStroke();
	fill(76,153,0);
	rect(0, floorPos_y, width, height/4); // draw some green ground

	push();
	translate(scrollPos, 0);
	// Draw clouds.
	drawClouds();

	// Draw mountains.
	drawMountains();

	// Draw trees.
	drawTrees();

	// Draw canyons.
	for(var i = 0; i < canyons.length; i++){
		drawCanyon(canyons[i]);
		checkCanyon(canyons[i]);
	}
	
	// Draw collectable items.
	for(var i = 0; i < collectable.length; i++){
		if(collectable[i].isFound == false){
			drawCollectable(collectable[i]);
			checkCollectable(collectable[i]);
		}
	}

	// Draw flagpole.
	renderFlagpole();	

	pop();

	// Draw game character.
	drawGameChar();

	// Game score.
	fill(92,64,51);
	noStroke();
	textSize(16);
	textAlign(RIGHT);
	text("Score: " + game_score, width - 20, 30);

	// Lives.
	fill(92,64,51);
	noStroke();
	textSize(16);
	textAlign(LEFT);
	text("Lives: " + lives, 20, 30);

	// Game over.
	if(lives < 1)
	{
		fill(92,64,51);
		textSize(16);
		textAlign(CENTER);
		text("Game over! Press space to continue.", width/2, 30);
		return;
	}

	// Level finished.
	if(flagpole.isReached)
	{
		fill(92,64,51);
		textSize(16);
		textAlign(CENTER);
		text("Level complete! Press space to continue.", width/2, 30);
		return;
	}

	// Logic to make the game character move or the background scroll.
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

	// Logic to make the game character rise and fall.
	if(gameChar_y < floorPos_y)
	{
		gameChar_y += 4; 
		isFalling = true;
	}
	else
	{
		isFalling = false;
	}

	if(isPlummeting)
	{
		gameChar_y += 5;
  	}
	
	// Logic for flagpole. 
	if(!flagpole.isReached)
	{
		checkFlagpole();  
	}

	// Update real position of gameChar for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;

	checkPlayerDie();
}


// ---------------------
// Key control functions
// ---------------------

function keyPressed(){

	if(keyCode == 37)	
	{
		isLeft = true;
	}

	if(keyCode == 39)	
	{
		isRight = true;
	}

	if(keyCode == 32 && gameChar_y == floorPos_y)
	{
		gameChar_y -= 100;
	}

}

function keyReleased()
{

	if(keyCode == 37)	
	{
		isLeft = false;
	}

	if(keyCode == 39)	
	{
		isRight = false;
	}

}

// ------------------------------
// Game character render function
// ------------------------------

// Function to draw the game character.

function drawGameChar()
{
	// draw game character
	if(isLeft && isFalling)
	{
		// add your jumping-left code
		fill(109, 85, 166);
		ellipse(gameChar_x, gameChar_y - 29, 12, 50);
		fill(231, 212, 171);
		ellipse(gameChar_x, gameChar_y - 54, 24, 24);
		rect(gameChar_x - 15, gameChar_y - 39, 18, 6, 5);
		rect(gameChar_x - 4, gameChar_y - 7, 6, 10, 8);
		stroke(157, 141, 105);
		line(gameChar_x - 7, gameChar_y - 54, gameChar_x - 2, gameChar_y - 54);
		line(gameChar_x +1, gameChar_y - 54, gameChar_x + 6, gameChar_y - 54);
		line(gameChar_x - 2, gameChar_y - 49, gameChar_x + 1, gameChar_y - 49);

	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
		fill(109, 85, 166);
		ellipse(gameChar_x, gameChar_y - 29, 12, 50);
		fill(231, 212, 171);
		ellipse(gameChar_x, gameChar_y - 54, 24, 24);
		rect(gameChar_x - 3, gameChar_y - 39, 18, 6, 5);
		rect(gameChar_x - 2, gameChar_y - 7, 6, 10, 8);
		stroke(157, 141, 105);
		line(gameChar_x - 7, gameChar_y - 54, gameChar_x - 2, gameChar_y - 54);
		line(gameChar_x +1, gameChar_y - 54, gameChar_x + 6, gameChar_y - 54);
		line(gameChar_x - 2, gameChar_y - 49, gameChar_x + 1, gameChar_y - 49);

	}
	else if(isLeft)
	{
		// add your walking left code
		fill(109, 85, 166);
		ellipse(gameChar_x, gameChar_y - 25, 12, 50);
		fill(231, 212, 171);
		ellipse(gameChar_x, gameChar_y - 50, 24, 24);
		rect(gameChar_x - 3, gameChar_y - 35, 6, 18, 5);
		rect(gameChar_x - 8, gameChar_y - 3, 10, 6, 8);
		stroke(157, 141, 105);
		line(gameChar_x - 7, gameChar_y - 50, gameChar_x - 2, gameChar_y - 50);
		line(gameChar_x +1, gameChar_y - 50, gameChar_x + 6, gameChar_y - 50);
		line(gameChar_x - 2, gameChar_y - 45, gameChar_x + 1, gameChar_y - 45);

	}
	else if(isRight)
	{
		// add your walking right code
		fill(109, 85, 166);
		ellipse(gameChar_x, gameChar_y - 25, 12, 50);
		fill(231, 212, 171);
		ellipse(gameChar_x, gameChar_y - 50, 24, 24);
		rect(gameChar_x - 3, gameChar_y - 35, 6, 18, 5);
		rect(gameChar_x - 2, gameChar_y - 3, 10, 6, 8);
		stroke(157, 141, 105);
		line(gameChar_x - 7, gameChar_y - 50, gameChar_x - 2, gameChar_y - 50);
		line(gameChar_x +1, gameChar_y - 50, gameChar_x + 6, gameChar_y - 50);
		line(gameChar_x - 2, gameChar_y - 45, gameChar_x + 1, gameChar_y - 45);

	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
		fill(109, 85, 166);
		ellipse(gameChar_x, gameChar_y - 29, 24, 50);
		fill(231, 212, 171);
		ellipse(gameChar_x, gameChar_y - 54, 24, 24);
		rect(gameChar_x - 18, gameChar_y - 39, 14, 6, 5);
		rect(gameChar_x + 4, gameChar_y - 39, 14, 6, 5);
		rect(gameChar_x + 2, gameChar_y - 8, 6, 10, 8);
		rect(gameChar_x - 8, gameChar_y - 8, 6, 10, 8);
		stroke(157, 141, 105);
		line(gameChar_x - 7, gameChar_y - 54, gameChar_x - 2, gameChar_y - 54);
		line(gameChar_x +1, gameChar_y - 54, gameChar_x + 6, gameChar_y - 54);
		line(gameChar_x - 2, gameChar_y - 49, gameChar_x + 1, gameChar_y - 49);

	}
	else
	{
		// add your standing front facing code
		fill(109, 85, 166);
		ellipse(gameChar_x, gameChar_y - 25, 24, 50);
		fill(231, 212, 171);
		ellipse(gameChar_x, gameChar_y - 50, 24, 24);
		rect(gameChar_x - 15, gameChar_y - 35, 6, 18, 5);
		rect(gameChar_x + 9, gameChar_y - 35, 6, 18, 5);
		rect(gameChar_x, gameChar_y - 3, 10, 6, 8);
		rect(gameChar_x - 10, gameChar_y - 3, 10, 6, 8);
		stroke(157, 141, 105);
		line(gameChar_x - 7, gameChar_y - 50, gameChar_x - 2, gameChar_y - 50);
		line(gameChar_x +1, gameChar_y - 50, gameChar_x + 6, gameChar_y - 50);
		line(gameChar_x - 2, gameChar_y - 45, gameChar_x + 1, gameChar_y - 45);

	}
}

// ---------------------------
// Background render functions
// ---------------------------

// Function to draw cloud objects.
function drawClouds()
{
	for(var i = 0; i < clouds.length; i++)	
	{
		fill(255,255,255);
		ellipse(clouds[i].x_pos, clouds[i].y_pos, 65, 65);
		ellipse(clouds[i].x_pos - 30, clouds[i].y_pos + 4, 55, 50);
		ellipse(clouds[i].x_pos + 30, clouds[i].y_pos + 4, 55, 50);
	}
}

// Function to draw mountains objects.
function drawMountains()
{
	for(var i = 0; i < mountains.length; i++)	
	{
		fill(140,140,120);
		triangle(mountains[i], floorPos_y,
				 mountains[i] + 100, floorPos_y - 182,
				 mountains[i] + 200, floorPos_y);
		fill(160,150,130);
		triangle(mountains[i] - 100, floorPos_y,
				 mountains[i], floorPos_y - 232,
				 mountains[i] + 130, floorPos_y);
		
		fill(255,255,255,80);
		beginShape();
		vertex(mountains[i] - 30, floorPos_y - 162);
		vertex(mountains[i], floorPos_y - 232);
		vertex(mountains[i] + 46, floorPos_y - 150);
		vertex(mountains[i], floorPos_y - 176);
		endShape(CLOSE);
		beginShape();
		vertex(mountains[i] + 72, floorPos_y - 132);
		vertex(mountains[i] + 100, floorPos_y - 182);
		vertex(mountains[i] + 122, floorPos_y - 142);
		vertex(mountains[i] + 100, floorPos_y - 145);
		endShape(CLOSE);
	}
}

// Function to draw trees objects.
function drawTrees()
{
	for(var i = 0; i < trees_x.length; i++)
	{
		fill(92,64,51);
		rect(trees_x[i], floorPos_y - 70, 12, 70);
		fill(16,111,42);
		triangle(trees_x[i] - 18, floorPos_y - 20,
				 trees_x[i] + 6, floorPos_y - 70,
				 trees_x[i] + 30, floorPos_y - 20);
		fill(11,102,35);
		triangle(trees_x[i] - 18, floorPos_y - 36,
				 trees_x[i] + 6, floorPos_y - 86,
				 trees_x[i] + 30, floorPos_y - 36);
		fill(16,111,42);
		triangle(trees_x[i] - 18, floorPos_y - 52,
				 trees_x[i] + 6, floorPos_y - 102,
				 trees_x[i] + 30, floorPos_y - 52);
		fill(11,102,35);
		triangle(trees_x[i] - 18, floorPos_y - 68,
				 trees_x[i] + 6, floorPos_y - 118,
				 trees_x[i] + 30, floorPos_y - 68);
	}
}


// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyon)
{
	fill(139,64,0);
	rect(t_canyon.x_pos, floorPos_y, t_canyon.width, height - floorPos_y);
	fill(204,255,255);
	rect(t_canyon.x_pos, floorPos_y, t_canyon.width * 0.75, height - floorPos_y);
}

// Function to check character is over a canyon.

function checkCanyon(t_canyon)
{
	if(gameChar_world_x > t_canyon.x_pos && gameChar_world_x < (t_canyon.x_pos + t_canyon.width - 20) && gameChar_y >= floorPos_y)
	{
		isPlummeting = true;
	}
}

// ----------------------------------
// Collectable items render and check functions
// ----------------------------------

// Function to draw collectable objects.

function drawCollectable(t_collectable)
{
	fill(255,223,0);
    triangle(t_collectable.x_pos,t_collectable.y_pos,
            t_collectable.x_pos - 8,t_collectable.y_pos - 26,
            t_collectable.x_pos + 8,t_collectable.y_pos - 26);
	fill(255,232,75);
    triangle(t_collectable.x_pos - 8,t_collectable.y_pos - 26,
            t_collectable.x_pos,t_collectable.y_pos - 52,
            t_collectable.x_pos + 8,t_collectable.y_pos - 26);
}

// Function to check character has collected an item.

function checkCollectable(t_collectable)
{
	if(dist(gameChar_world_x, gameChar_y, t_collectable.x_pos, t_collectable.y_pos) < 20)
	{
		t_collectable.isFound = true;
		game_score += 1;
	}
}

// Function to draw flagpole.

function renderFlagpole()
{
	push();
	
	// Flag
	fill(85,121,166);
	noStroke();
	if(flagpole.isReached)
	{
		rect(flagpole.x_pos, floorPos_y - 150, 40, 20);
	}
	else	
	{
		rect(flagpole.x_pos, floorPos_y - 40, 40, 20);
	}
	
	// Pole
	strokeWeight(5);
	stroke(222,222,232);
	line(flagpole.x_pos, floorPos_y, flagpole.x_pos, floorPos_y - 150);

	pop();
}

// Function to check flagpole.

function checkFlagpole()
{
	var d = abs(gameChar_world_x - flagpole.x_pos);
	if(d < 20)
	{
		flagpole.isReached = true;
	}
}

// Function to check player.

function checkPlayerDie()
{
	if(gameChar_y >= height + 65)
	{
		lives -= 1;
		
		if(lives > 0)
		{
			startGame();
		}
	}
	
	
}

// Function to start game.

function startGame()
{
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Variable to store the real position of the gameChar in the game
	// world. Needed for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;

	// Initialise arrays of scenery objects.
	canyons = [{x_pos: 600, width: 100},
			   {x_pos: 1200, width: 100},
			   {x_pos: 2400, width: 100}
	];
	clouds = [{x_pos: -520, y_pos: 110},
			  {x_pos: -180, y_pos: 140},
			  {x_pos: 180, y_pos: 110},
			  {x_pos: 480, y_pos: 140},
			  {x_pos: 840, y_pos: 100},
			  {x_pos: 1340, y_pos: 140},
			  {x_pos: 1640, y_pos: 100},
			  {x_pos: 2000, y_pos: 140},
			  {x_pos: 2280, y_pos: 110}
	];
	collectable = [{x_pos: -600, y_pos: floorPos_y, size: 50, isFound: false},
			 		{x_pos: 400, y_pos: floorPos_y, size: 50, isFound: false},
			  		{x_pos: 900, y_pos: floorPos_y, size: 50, isFound: false},
				    {x_pos: 1750, y_pos: floorPos_y, size: 50, isFound: false}
	];
	mountains = [-400, -200, 300, 850, 950, 1500, 1900, 2100];
	trees_x = [-320, 30, 300, 480, 960, 1340, 2000, 2100];

	game_score = 0;

	flagpole = {x_pos: 1500, isReached: false};
}