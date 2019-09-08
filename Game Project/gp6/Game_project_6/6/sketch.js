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

var clouds;
var mountains;
var trees_x;

var canyons;
var collectables;

// How fast the character moves
var move_speed = 5;
var gravity = 3;

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
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height/4); // draw some green ground

    // Scrolling
    push();
    translate(scrollPos,0);
    
	// Draw clouds.
    drawClouds();

	// Draw mountains.
    drawMountains();

	// Draw trees.
    drawTrees();

	// Draw canyons.
    for(var i=0; i < canyons.length; i++)
    {
        drawCanyon(canyons[i]);
        checkCanyon(canyons[i]);
    }
    
	// Draw collectable items.
    for(var i=0; i < collectables.length; i++)
    {       
        if(!collectables[i].isFound)
        {
            drawCollectable(collectables[i]);
            checkCollectable(collectables[i]);
        }
    }

    renderFlagpole();
    
    // Pop back to original drawing state.
    pop();
    
	// Draw game character.
	drawGameChar();
    
    fill(255);
    noStroke();
    text("score: " + game_score, 20, 20);
    
    // Draw life tokens
    text("lives:", 20, 40);
    for(var i=0; i < lives; i++)
    {
        drawLifeTokens(i*30);
    }

    if(lives<1)
    {
        fill(255);
        noStroke();
        text( "Game over. Press space to continue.",
              width/2 - 100,
              height/2);
        return;
    }
    
    if(flagpole.isReached)
    {
        fill(255);
        noStroke();
        text( "Level complete. Press space to continue.",
              width/2 - 100,
              height/2); 
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
        gameChar_y += gravity;
        isFalling = true;
    }else
    {
        isFalling = false;
    }

    if(flagpole.isReached == false)
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
    
    if(keyCode == 37) // left arrow key on keyboard
    {
        isLeft = true;
    }
    else if(keyCode == 39) // right arrow key on keyboard
    {
        isRight = true;
    }
    else if(keyCode == 32) // space key on keyboard
    {
        if(gameChar_y >= floorPos_y)
        {

            gameChar_y -= 100;
            isFalling = true;
        }
    }

}

function keyReleased()
{

    if(keyCode == 37)
    {
        isLeft = false;
    }
    else if(keyCode == 39)
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
    
    //the game character
    if(isLeft && isFalling)
    {
        // add your jumping-left code

        //-----------------------------
        // Left - Jump (Start)
        //----------------------------- 

        offset_x = 0;
        offset_y = 0;

        // Foot - Right
        fill(153,76,0);
        triangle( // Point 1
                  gameChar_x +offset_x - 5,
                  gameChar_y +offset_y,

                  // Point 2
                  gameChar_x +offset_x - 20,
                  gameChar_y +offset_y - 10,

                  // Point 3
                  gameChar_x +offset_x - 5,
                  gameChar_y +offset_y - 10);

        // Body
        fill(220,220,0);
        ellipse( gameChar_x +offset_x,
                 gameChar_y - 20 +offset_y, 
                 35);

        // Ear - Left
        fill(153,76,0);
        ellipse( gameChar_x +offset_x,
                 gameChar_y - 40 +offset_y-20, 
                 7,
                 15);

        // Head
        fill(220,220,0);
        ellipse( gameChar_x +offset_x,
                 gameChar_y - 40 +offset_y, 
                 30);

        // Mouth
        fill(0,0,0);
        ellipse(gameChar_x +offset_x -7,
                gameChar_y +offset_y-35,
                5);

        // Eye - Left
        //
        // Black part
        fill(0,0,0);
        ellipse( gameChar_x +offset_x - 5,
                 gameChar_y - 40 +offset_y - 3, 
                 7);
        //
        // White part
        fill(255,255,255);
        ellipse( gameChar_x +offset_x -6,
                 gameChar_y - 40 +offset_y - 4, 
                 3);

        // Arm - Right
        fill(153,76,0);
        rect(gameChar_x +offset_x + 5,
             gameChar_y +offset_y - 40,
             5,
             15);


        //-----------------------------
        // Left - Jump (End)
        //----------------------------- 

    }
    else if(isRight && isFalling)
    {
        // add your jumping-right code

        //-----------------------------
        // Right - Jump (Start)
        //----------------------------- 

        offset_x = 0;
        offset_y = 0;

        // Foot - Left
        fill(153,76,0);
        triangle( // Point 1
                  gameChar_x +offset_x + 5,
                  gameChar_y +offset_y,

                  // Point 2
                  gameChar_x +offset_x + 20,
                  gameChar_y +offset_y - 10,

                  // Point 3
                  gameChar_x +offset_x + 5,
                  gameChar_y +offset_y - 10);

        // Body
        fill(220,220,0);
        ellipse( gameChar_x +offset_x,
                 gameChar_y - 20 +offset_y, 
                 35);

        // Ear - Left
        fill(153,76,0);
        ellipse( gameChar_x +offset_x,
                 gameChar_y - 40 +offset_y-20, 
                 7,
                 15);

        // Head
        fill(220,220,0);
        ellipse( gameChar_x +offset_x,
                 gameChar_y - 40 +offset_y, 
                 30);

        // Mouth
        fill(0,0,0);
        ellipse(gameChar_x +offset_x +7,
                gameChar_y +offset_y-35,
                5);

        // Eye - Left
        //
        // Black part
        fill(0,0,0);
        ellipse( gameChar_x +offset_x + 5,
                 gameChar_y - 40 +offset_y - 3, 
                 7);
        //
        // White part
        fill(255,255,255);
        ellipse( gameChar_x +offset_x +6,
                 gameChar_y - 40 +offset_y - 4, 
                 3);

        // Arm - Right
        fill(153,76,0);
        rect(gameChar_x +offset_x - 10,
             gameChar_y +offset_y - 40,
             5,
             15);


        //-----------------------------
        // Right - Jump (End)
        //----------------------------- 


    }
    else if(isLeft)
    {
        // add your walking left code

        //-----------------------------
        // Left - Walk (Start)
        //----------------------------- 

        offset_x = 0;
        offset_y = 0;


        // Foot - Right
        fill(153,76,0);
        triangle( // Point 1
                  gameChar_x +offset_x ,
                  gameChar_y +offset_y,

                  // Point 2
                  gameChar_x +offset_x - 10,
                  gameChar_y +offset_y,

                  // Point 3
                  gameChar_x +offset_x,
                  gameChar_y +offset_y - 10);


        // Body
        fill(220,220,0);
        ellipse( gameChar_x +offset_x,
                 gameChar_y - 20 +offset_y, 
                 35);

        // Arm - Right
        fill(153,76,0);
        rect(gameChar_x +offset_x,
             gameChar_y +offset_y - 30,
             5,
             15);


        // Ear - Left
        fill(153,76,0);
        ellipse( gameChar_x +offset_x,
                 gameChar_y - 40 +offset_y-20, 
                 7,
                 15);

        // Head
        fill(220,220,0);
        ellipse( gameChar_x +offset_x,
                 gameChar_y - 40 +offset_y, 
                 30);

        // Mouth
        push();
        //
        // Line color
        stroke(0);
        //
        // Line thickness
        strokeWeight(2);
        line(gameChar_x +offset_x-7,
             gameChar_y +offset_y-35,
             gameChar_x +offset_x-2,
             gameChar_y +offset_y-35);

        pop();

        // Eye - Left
        //
        // Black part
        fill(0,0,0);
        ellipse( gameChar_x +offset_x - 5,
                 gameChar_y - 40 +offset_y - 3, 
                 7);
        //
        // White part
        fill(255,255,255);
        ellipse( gameChar_x +offset_x -6,
                 gameChar_y - 40 +offset_y - 4, 
                 3);



        //-----------------------------
        // Left - Walk (End)
        //-----------------------------

    }
    else if(isRight)
    {
        // add your walking right code

        //-----------------------------
        // Right - Walk (Start)
        //----------------------------- 

        offset_x = 0;
        offset_y = 0;

        // Foot - Left
        fill(153,76,0);
        triangle( // Point 1
                  gameChar_x +offset_x,
                  gameChar_y +offset_y,

                  // Point 2
                  gameChar_x +offset_x + 10,
                  gameChar_y +offset_y,

                  // Point 3
                  gameChar_x +offset_x,
                  gameChar_y +offset_y - 10);

        // Body
        fill(220,220,0);
        ellipse( gameChar_x +offset_x,
                 gameChar_y - 20 +offset_y, 
                 35);

        // Arm - Right
        fill(153,76,0);
        rect(gameChar_x +offset_x-5,
             gameChar_y +offset_y - 30,
             5,
             15);

        // Ear - Left
        fill(153,76,0);
        ellipse( gameChar_x +offset_x,
                 gameChar_y - 40 +offset_y-20, 
                 7,
                 15);

        // Head
        fill(220,220,0);
        ellipse( gameChar_x +offset_x,
                 gameChar_y - 40 +offset_y, 
                 30);

        // Mouth
        push();
        //
        // Line color
        stroke(0);
        //
        // Line thickness
        strokeWeight(2);
        line(gameChar_x +offset_x+7,
             gameChar_y +offset_y-35,
             gameChar_x +offset_x+2,
             gameChar_y +offset_y-35);

        pop();

        // Eye - Left
        //
        // Black part
        fill(0,0,0);
        ellipse( gameChar_x +offset_x + 5,
                 gameChar_y - 40 +offset_y - 3, 
                 7);
        //
        // White part
        fill(255,255,255);
        ellipse( gameChar_x +offset_x +6,
                 gameChar_y - 40 +offset_y - 4, 
                 3);



        //-----------------------------
        // Right - Walk (End)
        //-----------------------------

    }
    else if(isFalling || isPlummeting)
    {
        // add your jumping facing forwards code

        //-----------------------------
        // Front - Jumping (Start)
        //----------------------------- 

        offset_x = 0;
        offset_y = 0;


        // Foot - Right
        fill(153,76,0);
        triangle( // Point 1
                  gameChar_x +offset_x - 5,
                  gameChar_y +offset_y,

                  // Point 2
                  gameChar_x +offset_x - 20,
                  gameChar_y +offset_y - 10,

                  // Point 3
                  gameChar_x +offset_x - 5,
                  gameChar_y +offset_y - 10);

        // Foot - Left
        fill(153,76,0);
        triangle( // Point 1
                  gameChar_x +offset_x + 5,
                  gameChar_y +offset_y,

                  // Point 2
                  gameChar_x +offset_x + 20,
                  gameChar_y +offset_y - 10,

                  // Point 3
                  gameChar_x +offset_x + 5,
                  gameChar_y +offset_y - 10);

        // Body
        fill(220,220,0);
        ellipse( gameChar_x +offset_x,
                 gameChar_y - 20 +offset_y, 
                 35);

        // Arm - Right
        fill(153,76,0);
        rect(gameChar_x +offset_x - 20,
             gameChar_y +offset_y - 40,
             5,
             15);

        // Arm - Left
        fill(153,76,0);
        rect(gameChar_x +offset_x + 15,
             gameChar_y +offset_y - 40,
             5,
             15);

        // Ear - Right
        fill(153,76,0);
        ellipse( gameChar_x +offset_x-7,
                 gameChar_y - 40 +offset_y-20, 
                 7,
                 15);

        // Ear - Left
        fill(153,76,0);
        ellipse( gameChar_x +offset_x+7,
                 gameChar_y - 40 +offset_y-20, 
                 7,
                 15);

        // Head
        fill(220,220,0);
        ellipse( gameChar_x +offset_x,
                 gameChar_y - 40 +offset_y, 
                 30);

        // Mouth
        fill(0,0,0);
        ellipse(gameChar_x +offset_x,
                gameChar_y +offset_y-35,
                5);

        // Eye - Right
        //
        // Black part
        fill(0,0,0);
        ellipse( gameChar_x +offset_x - 6,
                 gameChar_y - 40 +offset_y - 3, 
                 7);
        //
        // White part
        fill(255,255,255);
        ellipse( gameChar_x +offset_x - 5,
                 gameChar_y - 40 +offset_y - 4, 
                 3);

        // Eye - Left
        //
        // Black part
        fill(0,0,0);
        ellipse( gameChar_x +offset_x + 6,
                 gameChar_y - 40 +offset_y - 3, 
                 7);
        //
        // White part
        fill(255,255,255);
        ellipse( gameChar_x +offset_x + 7,
                 gameChar_y - 40 +offset_y - 4, 
                 3);



        //-----------------------------
        // Front - Jumping (End)
        //-----------------------------

    }
    else
    {
        // add your standing front facing code

        //-----------------------------
        // Front - Standing (Start)
        //----------------------------- 

        offset_x = 0;
        offset_y = 0;


        // Foot - Right
        fill(153,76,0);
        triangle( // Point 1
                  gameChar_x +offset_x - 5,
                  gameChar_y +offset_y,

                  // Point 2
                  gameChar_x +offset_x - 15,
                  gameChar_y +offset_y,

                  // Point 3
                  gameChar_x +offset_x - 5,
                  gameChar_y +offset_y - 10);

        // Foot - Left
        fill(153,76,0);
        triangle( // Point 1
                  gameChar_x +offset_x + 5,
                  gameChar_y +offset_y,

                  // Point 2
                  gameChar_x +offset_x + 15,
                  gameChar_y +offset_y,

                  // Point 3
                  gameChar_x +offset_x + 5,
                  gameChar_y +offset_y - 10);

        // Body
        fill(220,220,0);
        ellipse( gameChar_x +offset_x,
                 gameChar_y - 20 +offset_y, 
                 35);

        // Arm - Right
        fill(153,76,0);
        rect(gameChar_x +offset_x - 10,
             gameChar_y +offset_y - 30,
             5,
             15);

        // Arm - Left
        fill(153,76,0);
        rect(gameChar_x +offset_x + 5,
             gameChar_y +offset_y - 30,
             5,
             15);

        // Ear - Right
        fill(153,76,0);
        ellipse( gameChar_x +offset_x-7,
                 gameChar_y - 40 +offset_y-20, 
                 7,
                 15);

        // Ear - Left
        fill(153,76,0);
        ellipse( gameChar_x +offset_x+7,
                 gameChar_y - 40 +offset_y-20, 
                 7,
                 15);

        // Head
        fill(220,220,0);
        ellipse( gameChar_x +offset_x,
                 gameChar_y - 40 +offset_y, 
                 30);

        // Mouth
        push();
        //
        // Line color
        stroke(0);
        //
        // Line thickness
        strokeWeight(2);
        line(gameChar_x +offset_x-5,
             gameChar_y +offset_y-35,
             gameChar_x +offset_x+5,
             gameChar_y +offset_y-35);

        pop();

        // Eye - Right
        //
        // Black part
        fill(0,0,0);
        ellipse( gameChar_x +offset_x - 6,
                 gameChar_y - 40 +offset_y - 3, 
                 7);
        //
        // White part
        fill(255,255,255);
        ellipse( gameChar_x +offset_x - 5,
                 gameChar_y - 40 +offset_y - 4, 
                 3);

        // Eye - Left
        //
        // Black part
        fill(0,0,0);
        ellipse( gameChar_x +offset_x + 6,
                 gameChar_y - 40 +offset_y - 3, 
                 7);
        //
        // White part
        fill(255,255,255);
        ellipse( gameChar_x +offset_x + 7,
                 gameChar_y - 40 +offset_y - 4, 
                 3);



        //-----------------------------
        // Front - Standing (End)
        //----------------------------- 

    }
}

// ---------------------------
// Background render functions
// ---------------------------

// Function to draw cloud objects.
function drawClouds()
{
    // Draw clouds.
    for(var i=0; i < clouds.length; i++)
    {

        // Update variable to use the one provided in this code.
        cloud = clouds[i]

        // Draw Cloud
        var cloud_center_x = cloud.x_pos;
        var cloud_center_y = cloud.y_pos;
        fill(255, 255, 255);
        ellipse(cloud_center_x,cloud_center_y, cloud.size*80);
        ellipse(cloud_center_x - cloud.size*50,cloud_center_y, cloud.size*60);
        ellipse(cloud_center_x + cloud.size*50,cloud_center_y, cloud.size*60);

    }
}

// Function to draw mountains objects.
function drawMountains()
{
    for(var i=0; i < mountains.length; i++)
    {
        // Update variable to work with this code
        mountain = mountains[i];
        
        //
        // NOTE: Got value for y from green ground drawing
        var mountain_center_x = mountain.x_pos;
        var mountain_center_y = mountain.y_pos;
        fill(128,128,128);
        triangle( // Point 1
                  mountain_center_x-80*mountain.size, 
                  mountain_center_y, 

                  // Point 2
                  mountain_center_x, 
                  mountain_center_y - 200*mountain.size,

                  // Point 3
                  mountain_center_x + 80*mountain.size, 
                  mountain_center_y );
    }
}

// Function to draw trees objects.
function drawTrees()
{
	// Draw trees.
    for(var i=0; i < trees_x.length; i++)
    {
    
        // Update variable here to use the variable
        // provided with this code.
        treePos_x = trees_x[i];
        treePos_y = 432;

        // Draw Tree
        //
        // NOTE: In my original code, I already had drawn everything relative to a point.
        var tree_center_x = treePos_x;
        var tree_center_y = treePos_y;
        //
        // Compensating to keep tree centered
        var tree_width = 60;
        var tree_height = 150;
        fill(150, 100, 50);
        rect( tree_center_x - tree_width/2.0, 
              tree_center_y - tree_height, 
              tree_width, 
              tree_height);
        // branches
        fill(0, 155, 0);

        // Branch 1
        triangle( // Point 1
                  tree_center_x - 80, 
                  (tree_center_y - 282) + tree_height,

                  // Point 2
                  tree_center_x,
                  (tree_center_y - 282) + tree_height - 100 , 

                  // Point 3
                  tree_center_x + 80,
                  (tree_center_y - 282) + tree_height);

        // Branch 2
        triangle( // Point 1
                  tree_center_x - 80, 
                  (tree_center_y - 320) + tree_height,

                  // Point 2
                  tree_center_x,
                  (tree_center_y - 320) + tree_height - 100 , 

                  // Point 3
                  tree_center_x + 80,
                  (tree_center_y - 320) + tree_height);
    
    }
}


// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyon)
{

    // Draw Canyon
    //
    //	- Modify the code so that the property `x_pos` controls where the
    //	canyon is on the x-axis
    // NOTE: In my original code, I already had drawn everything relative to a point.
    var canyon_center_x = t_canyon.x_pos;
    //
    // NOTE: Got value for y from green ground drawing
    var canyon_center_y = 432;
    //
    //	- Modify the code so that the property `width` controls how wide
    //	the canyon is
    // NOTE: In my original code, I already width controlled by a variable.
    var canyon_width = t_canyon.width;
    var canyon_height = 144;
    fill(100, 100, 100);
    rect( canyon_center_x - canyon_width/2.0,
          canyon_center_y,
          canyon_width,
          canyon_height);
    
}

// Function to check character is over a canyon.

function checkCanyon(t_canyon)
{
    // Falling down the canyon
    if( (gameChar_world_x > t_canyon.x_pos - t_canyon.width/2.0) 
         && 
        (gameChar_world_x < t_canyon.x_pos + t_canyon.width/2.0) )
    {
        // Jumping over the canyon 
        // Only fall IF the character is on the ground
        if( gameChar_y >= floorPos_y)
        {
        
            isPlummeting = true;
            
        }
        
    }
    
    //detects when `isPlummeting` is `true`.
    if( isPlummeting )
    {
        gameChar_y += 10;
    }
}

// ----------------------------------
// Collectable items render and check functions
// ----------------------------------

// Function to draw collectable objects.

function drawCollectable(t_collectable)
{

    // NOTE: In my original code, I already had drawn everything relative to a point.
    var collectable_center_x = t_collectable.x_pos;
    //var collectable_center_y = 300;
    var collectable_diameter = t_collectable.size;
    //
    // Override y center based on radius (diameter/2.0)
    // NOTE: 432 is the height of the ground
    collectable_center_y = t_collectable.y_pos - collectable_diameter/2.0;
    fill(255, 0, 0);
    //
    // Outer circle - red
    ellipse( collectable_center_x, 
             collectable_center_y, 
             collectable_diameter,
             collectable_diameter);
    fill(255, 255, 255);
    //
    // Middle circle - white
    ellipse( collectable_center_x, 
             collectable_center_y, 
             collectable_diameter*(2.0/3.0),
             collectable_diameter*(2.0/3.0));
    fill(255, 0, 0);
    //
    // Inner circle - red
    ellipse( collectable_center_x, 
             collectable_center_y, 
             collectable_diameter*(1.0/3.0),
             collectable_diameter*(1.0/3.0));
    
}

// Function to check character has collected an item.

function checkCollectable(t_collectable)
{

    if( dist( gameChar_world_x,
              gameChar_y,
              t_collectable.x_pos,
              t_collectable.y_pos) 
        < 
        t_collectable.size/2.0)
    {
        t_collectable.isFound = true;
        game_score += 1;
    }

}

function renderFlagpole()
{
    push();
    strokeWeight(5);
    stroke(180);
    line(flagpole.x_pos, floorPos_y, flagpole.x_pos, floorPos_y - 250);
    fill(255,0,255);

    noStroke();
    if(flagpole.isReached)
    {
        rect(flagpole.x_pos,floorPos_y - 250, 50, 50);
    }
    else
    {
        rect(flagpole.x_pos,floorPos_y - 50, 50, 50);
    }
    
    pop();
}

function checkFlagpole()
{
    var d = abs(gameChar_world_x - flagpole.x_pos);
    
    if(d < 15)
    {
        flagpole.isReached = true;        
    }
}

function checkPlayerDie()
{
    if(gameChar_y > 576)
    {
        lives -= 1;
        
        if( lives>0 )
        {
           startGame();
        }
    }
}

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
    trees_x = [ // off screen left
                -1500, -1350, -1000,  -300, -100,  
        
                // on screen
                100, 300, 
         
                // Off screen right
                500, 1000, 1400, 1700, 19000, 2200, 2500 ];
    

    clouds = [ // Off screen left
               { x_pos : -600, y_pos : 100, size : 1.0},
               { x_pos : -800, y_pos : 200, size : 0.7},
               { x_pos : -1100, y_pos : 300, size : 1.5},
               { x_pos : -1700, y_pos : 30, size : 0.5},
               { x_pos : -1900, y_pos : 700, size : 0.7},
               { x_pos : -2300, y_pos : 150, size : 1.5},
               { x_pos : -2700, y_pos : 40, size : 1.7},
        
               // on screen
               { x_pos : 100, y_pos : 200, size : 1.0},
        
               // Off screen right
               { x_pos : 600, y_pos : 100, size : 1.0},
               { x_pos : 800, y_pos : 200, size : 0.7},
               { x_pos : 1100, y_pos : 300, size : 1.5},
               { x_pos : 1700, y_pos : 30, size : 0.5},
               { x_pos : 1900, y_pos : 700, size : 0.7},
               { x_pos : 2300, y_pos : 150, size : 1.5},
               { x_pos : 2700, y_pos : 40, size : 1.7} ]
    
    mountains = [ // Off screen left
                  { x_pos: -650, y_pos: 432, size: 2.5 },
                  { x_pos: -950, y_pos: 432, size: 1.5 },
    
                  { x_pos: -1300, y_pos: 432, size: 2.5 },
                  { x_pos: -1750, y_pos: 432, size: 1.5 },
                  { x_pos: -2250, y_pos: 432, size: 0.75 },
                  { x_pos: -2700, y_pos: 432, size: 1.75 },
        
                  // on screen
                  { x_pos: 350, y_pos: 432, size: 2.0 },
        
                  // Off screen right
                  { x_pos: 650, y_pos: 432, size: 2.5 },
                  { x_pos: 950, y_pos: 432, size: 1.5 },
                  { x_pos: 1300, y_pos: 432, size: 2.5 },
                  { x_pos: 1750, y_pos: 432, size: 1.5 },
                  { x_pos: 2250, y_pos: 432, size: 0.75 },
                  { x_pos: 2700, y_pos: 432, size: 1.75 } ]
    
    canyons = [ // Off screen left
                { x_pos: -750, width: 100 },
                { x_pos: -1100, width: 100 },
                { x_pos: -2200, width: 100 },
        
                // on screen
                { x_pos: 200, width: 100 },
        
                 // Off screen right
                { x_pos: 750, width: 100 },
                { x_pos: 1100, width: 100 },
                { x_pos: 2200, width: 100 } ]
    
    collectables = [ // Off screen left
                     {x_pos: -900, y_pos: 432, size: 50, isFound:false},
                     {x_pos: -1300, y_pos: 432, size: 50, isFound:false},
                     {x_pos: -1900, y_pos: 432, size: 50, isFound:false},
                     {x_pos: -2700, y_pos: 432, size: 50, isFound:false},
        
                     // on screen
                     {x_pos: 350, y_pos: 432, size: 50, isFound:false},
        
                     // Off screen right
                     {x_pos: 900, y_pos: 432, size: 50, isFound:false},
                     {x_pos: 1300, y_pos: 432, size: 50, isFound:false},
                     {x_pos: 1800, y_pos: 432, size: 50, isFound:false},
                     {x_pos: 2700, y_pos: 432, size: 50, isFound:false}  ];
    
    game_score = 0;
    flagpole = {isReached: false, x_pos: 3000};
}

function drawLifeTokens(life_pos)
{
    fill(250,0,255);
    rect(50+life_pos, 30, 20, 30);   
}
