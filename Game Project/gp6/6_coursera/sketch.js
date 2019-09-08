/*

The Game Project 5 - Bring it all together

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

var trees_x;
var mountain;
var collectables;
var clouds;
var canyon;

var game_score;
var flagpole;
var lives;
var worldEnd_x;
var isEndofLevel;

var isDebugging;

function setup()
{

	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	lives = 3;
	game_score = 0;
	isDebugging = false;

	startGame();

}

function starGame() {

	isEndofLevel = false;
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
	trees_x = [
		620,
		300,
		500,
		1000,
		450,
		520,
		850,
		1145,
		1600,
		1630,
		1660];

	canyon = [
		{x_pos:40,width:100},
		{x_pos:400,width:40},
		{x_pos:1460,width:40}
	];
	

	mountain = [
		{x_pos: 550, y_pos: floorPos_y, width: 225, height: 300, offset: 70},
		{x_pos: 1650, y_pos: floorPos_y, width: 205, height: 360, offset: 100}
	];

	collectable = [
		{x_pos: 1400, y_pos: floorPos_y, size: 50},
		{x_pos: 190, y_pos: floorPos_y, size: 50},
		{x_pos: 1800, y_pos: floorPos_y, size: 50}];

    clouds = [{ x_pos: 200, y_pos: 150, width: 80}, { x_pos: 400, y_pos: 150, width: 80}, { x_pos: 600, y_pos: 150, width: 80}, { x_pos: 800, y_pos: 150, width: 80}, { x_pos: 1000, y_pos: 150, width: 80}, { x_pos: 1200, y_pos: 150, width: 80}, { x_pos: 1400, y_pos: 150, width: 80}];	

	flagpole = {isReached: false, x_pos: 1200};
}

function draw()
{
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height/4); // draw some green ground

	push();
	translate(scrollPos,0);

	// Draw clouds.
	drawClouds();

	// Draw mountains.
	drawMountain()

	// Draw trees.
	drawTrees()

	// Draw canyons.
    for (var i = 0; i < canyons.length; i++) {
        drawCanyon(canyons[i]);
        checkCanyon(canyons[i]);
    }

	// Draw collectable items.
    for (var i = 0; i < collectables.length; i++) {
        if (!collectables[i].isFound) {
            drawCollectable(collectables[i]);
            checkCollectable(collectables[i]);
        }
    }


	renderFlagpole();

	pop();
	// Draw game character.

    drawScorer();
    drawLives();

	drawGameChar();

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

    if (isRight) {
        // do not allow character to go outside the world
        if (gameChar_x - scrollPos <= worldEnd_x) {
            if (gameChar_x < width * 0.8) {
                gameChar_x += 5;
            } else {
                scrollPos -= 5; // negative for moving against the background
            }
        }
    }

	// Logic to make the game character rise and fall.
    if (gameChar_y < floorPos_y) {
        gameChar_y += 1;
        isFalling = true;
    } else {
        isFalling = false;
    }

    if (isPlummeting) {
        gameChar_y += 10;
    }

    // Update real position of gameChar for collision detection.
    gameChar_world_x = gameChar_x - scrollPos;

    // end of game or level
    if (lives < 1) {
        drawGameOver();
        isEndOfLevel = true;
        return;
    }
    if (flagpole.isReached) {
        drawLevelComlete();
        isEndOfLevel = true;
        return;
    }

    // flagpole
    if (!flagpole.isReached) {
        checkFlagpole();
    }

    checkPlayerDie();
}



// ---------------------
// Key control functions
// ---------------------

function keyPressed(){

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


// ------------------------------
// Game character render function
// ------------------------------

// Function to draw the game character.


function drawGameChar()
{
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
}

// ---------------------------
// Background render functions
// ---------------------------

// Function to draw cloud objects.
function drawClouds()
{
    for(var i=0; i < clouds.length; i++)
    {
        fill(255, 255, 255);
        ellipse(clouds[i].x_pos, clouds[i].y_pos, clouds[i].width, clouds[i].width);
        ellipse(clouds[i].x_pos - clouds[i].width/2, clouds[i].y_pos, 3*clouds[i].width/4, 3*clouds[i].width/4);
        ellipse(clouds[i].x_pos + clouds[i].width/2, clouds[i].y_pos, 3*clouds[i].width/4, 3*clouds[i].width/4);
        
    }
}

// Function to draw mountains objects.
function drawMountain()
{
	for(var i = 0; i < mountain.length; i++) {
		fill(165, 42, 42);
		stroke(210,180,140);
		strokeWeight(3);
		triangle(mountain[i].x_pos, mountain[i].y_pos ,mountain[i].x_pos + mountain[i].width, 
				 mountain[i].y_pos, mountain[i].x_pos + mountain[i].width/2, mountain[i].y_pos - mountain[i].height);
		triangle(mountain[i].x_pos + mountain[i].offset, mountain[i].y_pos, mountain[i].x_pos + mountain[i].offset+400 + mountain[i].width,
				 mountain[i].y_pos, mountain[i].x_pos + mountain[i].offset+200 + mountain[i].width/2, mountain[i].y_pos - mountain[i].height);

	}
}

// Function to draw trees objects.
function drawTrees()
{
	for(var i = 0; i < trees_x.length; i++){
		stroke(0);
		fill(106, 83, 47);
		rect(trees_x[i],floorPos_y,20,-55);
		fill(85,107,47)
		triangle(trees_x[i]+10,floorPos_y-150,trees_x[i]-40,floorPos_y-30,trees_x[i]+60,floorPos_y-30);	
	};	
}

// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyon)
{
	for(var i = 0; i < canyon.length; i++){
		noStroke();
		fill(100,155,255);
		rect(canyon[i].x_pos,432,canyon[i].width,144);
		fill(50,50,50,100);
		rect(canyon[i].x_pos,462,canyon[i].width,114);
	};
}

// Function to check character is over a canyon.

function checkCanyon(t_canyon)
{
    if((gameChar_world_x > t_canyon.x_pos && (gameChar_world_x < (t_canyon.x_pos + t_canyon.width))) || gameChar_y > floorPos_y)
    {
        isPlummeting = true;
    }
    else{
        isPlummeting = false;
    }
 }

 function renderFlagpole()
 {
	 push();
	 strokeWeight(5);
	 stroke(100);
	 line(flagpole.x_pos, floorPos_y, flagpole.x_pos, floorPos_y - 250);
	 fill(255,0,255)
	 noStroke()

	 if(flagpole.isReached)
	 {
		rect(flagpole.x_pos,floorPos_y - 250, 50, 50)
	 }

	 else
	 {
		rect(flagpole.x_pos,floorPos_y - 50, 50, 50)
	 }

	 pop();
 }

function checkFlagpole()
{
	var d = abs(gameChar_world_x - flagpole.x_pos);
	console.log(d);

	if(d < 15)
	{
		flagpole.isReached = true;
	}
}

// ----------------------------------
// Collectable items render and check functions
// ----------------------------------

// Function to draw collectable objects.

function drawCollectable(t_collectable)
{
	fill(255,255,0,50);
	ellipse(t_collectable.x_pos,t_collectable.y_pos-20,t_collectable.size);
	fill(55,245,0);
	ellipse(t_collectable.x_pos,t_collectable.y_pos-20,t_collectable.size-25);
}

// Function to check character has collected an item.

function checkCollectable(t_collectable)
{
    if(dist(gameChar_world_x, gameChar_y, t_collectable.x_pos, t_collectable.y_pos) < 50)
        {
			t_collectable.isFound = true;
			console.log('yay');
			game_score += 1;
		}
}
