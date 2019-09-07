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
var treePos_y;

var clouds;
var mountains;
var trees_x;

var canyon;
var collectable;



function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
    treePos_y = floorPos_y - 150;

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
    trees_x = [100, 300, 500, 700, 1000, 1200, 1400, 1600, 1800];
    
    clouds = [{ x_pos: 200, y_pos: 150, width: 80}, { x_pos: 400, y_pos: 150, width: 80}, { x_pos: 600, y_pos: 150, width: 80}, { x_pos: 800, y_pos: 150, width: 80}, { x_pos: 1000, y_pos: 150, width: 80}, { x_pos: 1200, y_pos: 150, width: 80}, { x_pos: 1400, y_pos: 150, width: 80}];
    
    mountain = [{ x_pos: 0, width: 500, height: 382}, { x_pos: 250, width: 500, height: 382}, { x_pos: 500, width: 500, height: 382}, { x_pos: 750, width: 500, height: 382}, { x_pos: 1000, width: 500, height: 382}, { x_pos: 1250, width: 500, height: 382}]
    
    canyon = [{x_pos: 0, width: 100}, {x_pos: 300, width: 100}, {x_pos: 600, width: 50}, {x_pos: 750, width: 50}, {x_pos: 900, width: 100}, {x_pos: 1100, width: 100}]
    
    collectable = [{x_pos: 200, y_pos: floorPos_y, size: 50, isFound: false}, {x_pos: 400, y_pos: floorPos_y, size: 50, isFound: false}, {x_pos: 500, y_pos: floorPos_y, size: 50, isFound: false}, {x_pos: 800, y_pos: floorPos_y, size: 50, isFound: false}, {x_pos: 1000, y_pos: floorPos_y, size: 50, isFound: false}, {x_pos: 1200, y_pos: floorPos_y, size: 50, isFound: false}]

}

function draw()
{
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0,155,0);
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
    
    for(var i=0; i< canyon.length; i++)
    {
        drawCanyon(canyon[i]);
        checkCanyon(canyon[i]);
        if(isPlummeting == true)
        {
            gameChar_y += 2;
        }
    }
    
	// Draw collectable items
    for(var i=0; i< collectable.length; i++)
    {
        checkCollectable(collectable[i]);
        if(collectable[i].isFound == false)
            {
                drawCollectable(collectable[i]);
            }
    }

    pop();
	// Draw game character.
	
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
        isPlummeting = true;
        gameChar_y+=2;
    }
    else{
        isPlummeting = false;
    }
    
    
    
    

	// Update real position of gameChar for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;
}


// ---------------------
// Key control functions
// ---------------------

function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.
    
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
            isLeft = false;
        }
    if(keyCode == 39)
        {
            isRight = false;
        }
	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
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
        fill(200, 100, 10);
        ellipse(gameChar_x, gameChar_y - 60, 30, 35);
    
        fill(255,0,0);
        rect(gameChar_x - 10, gameChar_y - 45, 20, 30);
    
        fill(0);
        quad(gameChar_x + 1, gameChar_y - 5, gameChar_x - 8, gameChar_y - 5, gameChar_x - 12, gameChar_y - 15, gameChar_x - 2, gameChar_y - 15);
        quad(gameChar_x + 6, gameChar_y - 5, gameChar_x + 16 , gameChar_y - 5, gameChar_x + 13, gameChar_y - 15, gameChar_x + 3, gameChar_y - 15);
    
        fill(200, 100, 10);
        rect(gameChar_x - 10, gameChar_y - 45, 10, 10);
        rect(gameChar_x + 8, gameChar_y - 45, 10, 10);


	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
        
        fill(200, 100, 10);
        ellipse(gameChar_x, gameChar_y - 60, 30, 35);
    
        fill(255,0,0);
        rect(gameChar_x - 10, gameChar_y - 45, 20, 30);
    
        fill(0);
        quad(gameChar_x - 15, gameChar_y - 5, gameChar_x - 5, gameChar_y - 5, gameChar_x, gameChar_y - 15, gameChar_x - 10, gameChar_y - 15);
        quad(gameChar_x , gameChar_y - 5, gameChar_x + 10 , gameChar_y - 5, gameChar_x + 13, gameChar_y - 15, gameChar_x + 3, gameChar_y - 15);
    
        fill(200, 100, 10);
        rect(gameChar_x - 18, gameChar_y - 45, 10, 10);
        rect(gameChar_x , gameChar_y - 45, 10, 10);


	}
	else if(isLeft)
	{
		// add your walking left code
        fill(200, 100, 10);
        ellipse(gameChar_x, gameChar_y - 50, 30, 35);
    
        fill(255,0,0);
        rect(gameChar_x - 10, gameChar_y - 35, 20, 30);
    
        fill(0);
        quad(gameChar_x + 1, gameChar_y + 5, gameChar_x - 8, gameChar_y + 5, gameChar_x - 12, gameChar_y - 5, gameChar_x - 2, gameChar_y - 5);
        quad(gameChar_x + 6, gameChar_y + 5, gameChar_x + 16 , gameChar_y + 5, gameChar_x + 13, gameChar_y - 5, gameChar_x + 3, gameChar_y - 5);


	}
	else if(isRight)
	{
		// add your walking right code
        fill(200, 100, 10);
        ellipse(gameChar_x, gameChar_y - 50, 30, 35);
    
        fill(255,0,0);
        rect(gameChar_x - 10, gameChar_y - 35, 20, 30);
    
        fill(0);
        quad(gameChar_x - 15, gameChar_y + 5, gameChar_x - 5, gameChar_y + 5, gameChar_x, gameChar_y - 5, gameChar_x - 10, gameChar_y - 5);
        quad(gameChar_x , gameChar_y + 5, gameChar_x + 10 , gameChar_y + 5, gameChar_x + 13, gameChar_y - 5, gameChar_x + 3, gameChar_y - 5);

        

	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
        fill(200, 100, 10);
        ellipse(gameChar_x, gameChar_y - 60, 35);
    
        fill(255,0,0);
        rect(gameChar_x - 13, gameChar_y - 45, 26, 30);
    
        fill(0);
        rect(gameChar_x - 15, gameChar_y - 15, 10, 10);
        rect(gameChar_x + 5, gameChar_y - 15, 10, 10);
    
        fill(200, 100, 10);
        rect(gameChar_x - 23, gameChar_y - 45, 10, 10);
        rect(gameChar_x + 13, gameChar_y - 45, 10, 10);

	}
	else
	{
		// add your standing front facing code
        fill(200, 100, 10);
        ellipse(gameChar_x, gameChar_y - 50, 35);
    
        fill(255,0,0);
        rect(gameChar_x - 13, gameChar_y - 35, 26, 30);
    
        fill(0);
        rect(gameChar_x - 15, gameChar_y - 5, 10, 10);
        rect(gameChar_x + 5, gameChar_y - 5, 10, 10);

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
function drawMountains()
{
    for(var i=0; i< mountain.length; i++)
    {
        fill(150, 141, 153);
        triangle(mountain[i].x_pos, floorPos_y, mountain[i].x_pos + mountain[i].width, floorPos_y, mountain[i].x_pos + mountain[i].width/2, floorPos_y - mountain[i].height);
        
    }
}

// Function to draw trees objects.
function drawTrees()
{
    for(var i =0; i <trees_x.length; i++)
    {
        fill(120, 100, 40);
        rect(trees_x[i], treePos_y, 60, 150);
        fill(0, 155, 0);
        triangle(trees_x[i]- 50, treePos_y + 50, trees_x[i] + 30, treePos_y - 50, trees_x[i] + 110, treePos_y + 50);
        triangle(trees_x[i] - 50, treePos_y, trees_x[i] + 30, treePos_y - 100, trees_x[i] + 110, treePos_y);
        
    }
}


// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyon)
{
    fill(100, 155, 255);
    rect(t_canyon.x_pos, floorPos_y, t_canyon.width, height - floorPos_y);

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

// ----------------------------------
// Collectable items render and check functions
// ----------------------------------

// Function to draw collectable objects.

function drawCollectable(t_collectable)
{
    fill(185, 242, 255);
    triangle(t_collectable.x_pos, t_collectable.y_pos, t_collectable.x_pos + t_collectable.size, t_collectable.y_pos, t_collectable.x_pos + t_collectable.size/2, t_collectable.y_pos + 2*t_collectable.size/3);
    quad(t_collectable.x_pos, t_collectable.y_pos, t_collectable.x_pos + t_collectable.size, t_collectable.y_pos, t_collectable.x_pos + 3*t_collectable.size/4, t_collectable.y_pos - t_collectable.size/3, t_collectable.x_pos + t_collectable.size/4, t_collectable.y_pos - t_collectable.size/3);    
}

// Function to check character has collected an item.

function checkCollectable(t_collectable)
{
    if(dist(gameChar_world_x, gameChar_y, t_collectable.x_pos, t_collectable.y_pos) < 50)
        {
            t_collectable.isFound = true;
        }
    else
    {
        t_collectable.isFound = false;
    }
}
