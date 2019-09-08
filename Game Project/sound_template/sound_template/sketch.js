/* Final Game Project Submission
University of London B.Sc. Computer Science (AI & ML)
CM1005 Introduction to Programming I
Date: Sep 9 2019
Name: Patrick Dolloso

------------------------------------------
Extensions
------------------------------------------

--------------------
1. Add sound
--------------------
* your extension: the jump sound extension from game project 7 was added. The sound is triggered whenever the player hits the spacebar, but not when restarting the game
* the bits you found difficult: placing the sound code in the correct line to trigger the sound correctly, and creading code that outputs once instead of a constant output, causing the sound to be triggered at 60x/second.
* the skills you learnt/practised by implementing it: learned how to use assets and presets to load files such as sounds, images, etc. into a p5.js project.

--------------------
2. Add Platforms
--------------------
* your extension: created platforms which cause the character to stop falling once contact has been made with it. 
* the bits you found difficult: setting up the factory pattern in the beginning and creating the checkContact function which allows the character to stand on top of the platform.
* the skills you learnt/practiced by implementing it: Created factory patterns not to re-do work. Setting up conditions for the character to perform a certain behaviour once contact has been made with an object.

*/


//declare varables
var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var gameChar_world_x;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;

var collectables;
var trees_x;

var worldEnd_x;
var flagpole;
var game_score;
var lives;
var isEndOfLevel; // variable to track if there is need to restart the game

// declare platforms array for factory pattern
var platforms  = [];
platforms.push(createPlatforms(600, 345, 120))
platforms.push(createPlatforms(1000, 325, 90))
platforms.push(createPlatforms(1500, 325, 120))
platforms.push(createPlatforms(2300, 325, 100))

var jumpSound;
var isDebugging;


function preload()
{
    soundFormats('mp3','wav');
    
    //load your sounds here
    jumpSound = loadSound('assets/jump.wav');
    jumpSound.setVolume(0.1);
}


function setup()
{
    createCanvas(1024, 576);
    floorPos_y = height * 3 / 4;
    lives = 3;
    game_score = 0; // we reset game_score only if game is over

    isDebugging = false;

    startGame();
}

function startGame() {

    isEndOfLevel = false;

    gameChar_x = width / 2;
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
    trees_x = [73, -40, 300, 400, 1000, 1400, 2700];
    clouds = [{
        x_pos: 100,
        y_pos: 180,
        width: 130,
        height: 70
    }, {
        x_pos: 600,
        y_pos: 100,
        width: 130,
        height: 70
    }, {
        x_pos: 800,
        y_pos: 150,
        width: 130,
        height: 70
    }];

    mountains = [{
        x_pos: 100,
        y_pos: floorPos_y,
        width: 200,
        height: 230
    }, {
        x_pos: 800,
        y_pos: floorPos_y,
        width: 100,
        height: 150
    }, {
        x_pos: 1200,
        y_pos: floorPos_y,
        width: 300,
        height: 280
    }, {
        x_pos: 2000,
        y_pos: floorPos_y,
        width: 220,
        height: 300
    }, {
        x_pos: 2500,
        y_pos: floorPos_y,
        width: 120,
        height: 210
    }];

    canyons = [{
        x_pos: 0,
        width: 50
    }, {
        x_pos: 100,
        width: 100
    }, {
        x_pos: 1700,
        width: 80
    }, {
        x_pos: 2300,
        width: 120
    }];

    collectables = [{
        x_pos: 40,
        y_pos: floorPos_y,
        size: 50,
        isFound: false
    }, {
        x_pos: 620,
        y_pos: floorPos_y - 100,
        size: 30,
        isFound: false
    }, {
        x_pos: 1200,
        y_pos: floorPos_y,
        size: 70,
        isFound: false
    }, {
        x_pos: 1600,
        y_pos: floorPos_y,
        size: 40,
        isFound: false
    }, {
        x_pos: 2750,
        y_pos: floorPos_y,
        size: 50,
        isFound: false
    }, {
        x_pos: 1750,
        y_pos: floorPos_y,
        size: 50,
        isFound: false
    },

    {
        x_pos: 1050,
        y_pos: floorPos_y - 150,
        size: 50,
        isFound: false
    }

]

    // game mechanics variables
    worldEnd_x = 3000;
    flagpole = {
        isReached: false,
        x_pos: worldEnd_x,
        height: 200,
        flagHeight: 50
    }
}

function draw() {
    background(100, 155, 255); // fill the sky blue

    noStroke();
    fill(0, 120, 20);
    rect(0, floorPos_y, width, height / 4); // draw some green ground

    push();
    translate(scrollPos, 0);

    // Draw clouds.
    drawClouds();

    // Draw mountains.
    drawMountains();

    // Draw trees.
   drawTrees();

    // Draw and check canyons.
    for (var i = 0; i < canyons.length; i++) {
        drawCanyon(canyons[i]);
        checkCanyon(canyons[i]);
    }

    // Draw and check collectable items.
    for (var i = 0; i < collectables.length; i++) {
        if (!collectables[i].isFound) {
            drawCollectable(collectables[i]);
            checkCollectable(collectables[i]);
        }
    }

    for(var i = 0; i < platforms.length; i++)
    {
        platforms[i].draw();
    }

    renderFlagpole();

    pop();

    // Draw game character.
    drawGameChar();

    drawScorer();
    drawLives();

    // Logic to make the game character move or the background scroll.
    if (isLeft) {
        if (gameChar_x > width * 0.2) {
            gameChar_x -= 5;
        } else {
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
    // gravity
    if (gameChar_y < floorPos_y) {
    
        var isContact = false;
        for(var i=0; i < platforms.length; i++)
        {
            if(platforms[i].checkContact(gameChar_world_x, gameChar_y)==true)
            {
                isContact = true;
                break;
            }
        }
        if(isContact == false)
        {
            gameChar_y += 3;
            isFalling = true;
        }

    }
    else {
        isFalling = false;
    }

    if (isPlummeting) {
        gameChar_y += 3;
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

function keyPressed() {

    if (isDebugging) {
        console.log("keyPressed: " + key);
        console.log("keyPressed: " + keyCode);
    }
    if (keyCode == 37) {
        isLeft = true;
        if (isDebugging) {
            console.log("left pressed", isLeft);
        }
    }
    if (keyCode == 39) {
        isRight = true;
        if (isDebugging) {
            console.log("right pressed", isRight);
        }
    }

    // jump
    if (key == " ") {
        if (isEndOfLevel) {
            if (lives < 1) {
                game_score = 0;
                lives = 3;
            }
            startGame();
            return;
        }
        if (gameChar_y == floorPos_y) {
            gameChar_y -= 150;
            jumpSound.play();
        }
    }

}

function keyReleased() {

    if (isDebugging) {
        console.log("keyReleased: " + key);
        console.log("keyReleased: " + keyCode);
    }
    if (keyCode == 37) {
        isLeft = false;
        if (isDebugging) {
            console.log("left up", isLeft);
        }
    }
    if (keyCode == 39) {
        isRight = false;
        if (isDebugging) {
            console.log("right up", isRight);
        }
    }

}


// ------------------------------
// Game character render function
// ------------------------------

// Function to draw the game character.
function drawGameChar() {
    // draw game character
    if (isLeft && isFalling) {
        // add your jumping-left code
        drawCharacterJumpingLeft();

    } else if (isRight && isFalling) {
        // add your jumping-right code
        drawCharacterJumpingRight();

    } else if (isLeft) {
        // add your walking left code
        drawCharacterWalkingLeft();

    } else if (isRight) {
        // add your walking right code
        drawCharacterWalkingRight();

    } else if (isFalling || isPlummeting) {
        // add your jumping facing forwards code
        drawCharacterJumpingFacingForwards();

    } else {
        // add your standing front facing code
        drawCharacterStandingFrontFacing();
    }
}


function drawCharacterStandingFrontFacing() {

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

function drawCharacterJumpingFacingForwards() {

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

function drawCharacterWalkingLeft() {
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

function drawCharacterWalkingRight() {
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

function drawCharacterJumpingRight() {
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

function drawCharacterJumpingLeft() {
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

// ---------------------------
// Background render functions
// ---------------------------

// Function to draw cloud objects.
function drawClouds() {
    for (var i = 0; i < clouds.length; i++) {
        drawCloud(clouds[i]);
    }
}

function drawCloud(cloud) {
    fill(255, 255, 255);
    var bottom_height = cloud.height * 3 / 7;
    rect(cloud.x_pos,
        cloud.y_pos - bottom_height,
        cloud.width,
        bottom_height,
        bottom_height / 2); 
    ellipse(cloud.x_pos + cloud.width / 3,
        cloud.y_pos - bottom_height + 5,
        cloud.width * 5 / 12,
        cloud.height * 4 / 7);
    ellipse(cloud.x_pos + cloud.width * 3 / 5,
        cloud.y_pos - bottom_height,
        cloud.width * 7 / 12,
        cloud.height * 6 / 7);
}

// Function to draw mountains objects.
function drawMountains() {
    for (var i = 0; i < mountains.length; i++) {
        drawMountain(mountains[i]);
    }
}

function drawMountain(mountain) {
    fill(100,80,70);
    //mountain 1
    var mountain_mid_x = mountain.x_pos + mountain.width / 2;
    triangle(mountain.x_pos,
        mountain.y_pos,
        mountain.x_pos + mountain.width * 7 / 20,
        mountain.y_pos - mountain.height * 4 /5,
        mountain.x_pos + mountain.width * 7 / 2.5,
        mountain.y_pos);
    
    //mountain 2
    var mountain_mid_x = mountain.x_pos + mountain.width / 2;
    stroke(40)
    triangle(mountain.x_pos - 200,
        mountain.y_pos,
        mountain.x_pos + mountain.width * 7 / 30,
        mountain.y_pos - mountain.height * 4 / 5,
        mountain.x_pos + mountain.width * 7 / 9,
        mountain.y_pos);
    

    //mountain 3
    triangle(mountain.x_pos,
        mountain.y_pos,
        mountain_mid_x,
        mountain.y_pos - mountain.height,
        mountain.x_pos + mountain.width,
        mountain.y_pos);
    // snow
    fill(250);
    var snow_height = mountain.height * 3 / 20;
    triangle(mountain.x_pos + mountain.width / 2 * (1 - snow_height / mountain.height),
        mountain.y_pos - mountain.height + snow_height,
        mountain_mid_x,
        mountain.y_pos - mountain.height,
        mountain.x_pos + mountain.width / 2 * (1 + snow_height / mountain.height),
        mountain.y_pos - mountain.height + snow_height);
}

// Function to draw trees objects.
function drawTrees() {
    for (var i = 0; i < trees_x.length; i++) {
        drawTree(trees_x[i]);
    }
}

function drawTree(tree_x) {
    fill(160, 100, 40);
    rect(tree_x - 30, floorPos_y - 150, 60, 150);

    // branches
    noStroke();
    fill(0, 120, 0);
    triangle(tree_x - 70, floorPos_y - 100,
        tree_x, floorPos_y - 200,
        tree_x + 70, floorPos_y - 100);
    triangle(tree_x - 80, floorPos_y - 60,
        tree_x, floorPos_y - 160,
        tree_x + 80, floorPos_y - 60);
}


// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyon) {

    beginShape();

    fill(50);
    vertex(t_canyon.x_pos, floorPos_y); // top
    vertex(t_canyon.x_pos - 30, floorPos_y + 55);
    vertex(t_canyon.x_pos - 10, floorPos_y + 50);
    vertex(t_canyon.x_pos - 40, floorPos_y + 105);
    vertex(t_canyon.x_pos - 20, floorPos_y + 100);
    vertex(t_canyon.x_pos - 50, floorPos_y + 144); // bottom
    vertex(t_canyon.x_pos + t_canyon.width + 20, floorPos_y + 144); // bottom
    vertex(t_canyon.x_pos + t_canyon.width + 20, floorPos_y + 100);
    vertex(t_canyon.x_pos + t_canyon.width + 10, floorPos_y + 105);
    vertex(t_canyon.x_pos + t_canyon.width + 40 - 50 + 20, floorPos_y + 50);
    vertex(t_canyon.x_pos + t_canyon.width + 20 - 50 + 30, floorPos_y + 55);
    vertex(t_canyon.x_pos + t_canyon.width, floorPos_y); // top

    endShape(CLOSE);
}

// Function to check character is over a canyon.

function checkCanyon(t_canyon) {
    if (gameChar_world_x > t_canyon.x_pos &&
        gameChar_world_x < t_canyon.x_pos + t_canyon.width &&
        gameChar_y >= floorPos_y) {
        isPlummeting = true;
    }
}

// ----------------------------------
// Collectable items render and check functions
// ----------------------------------

// Function to draw collectable objects.

function drawCollectable(t_collectable) {
    var head_width = t_collectable.size;
    var head_height = t_collectable.size / 2;
    // head
    fill(255, 255, 0, 50);
    rect(t_collectable.x_pos, t_collectable.y_pos - t_collectable.size,
        head_width, head_height*1.5,
        50, 50, 50, 50);
    fill(250,200,300);
    ellipse(t_collectable.x_pos + head_width / 2,
        t_collectable.y_pos - t_collectable.size + head_height / 2,
        head_width / 2, head_height / 2);
}

// Function to check character has collected an item.

function checkCollectable(t_collectable) {
    if (dist(gameChar_world_x,
            gameChar_y - 30,
            t_collectable.x_pos + t_collectable.size / 2,
            t_collectable.y_pos - t_collectable.size / 2) < t_collectable.size * 0.8) {
        if (!t_collectable.isFound) {
            t_collectable.isFound = true;
            game_score++;
        }
    }
}

// Game mechanics
function drawScorer() {
    textSize(26);
    fill(200, 100, 100);
    text("Souls collected: " + game_score.toString(), 50, 50);
    text("Health", 50, 90)
}

function renderFlagpole() {
    var flag_y = flagpole.isReached ?
        floorPos_y - 10 :
        floorPos_y - flagpole.height + flagpole.flagHeight + 10;

    fill(100, 80, 20);
    rect(flagpole.x_pos, floorPos_y - flagpole.height,
        10, flagpole.height,
        5, 5, 0, 0);

    fill(0, 200, 30);
    triangle(flagpole.x_pos + 2, flag_y - flagpole.flagHeight,
        flagpole.x_pos + 2, flag_y,
        flagpole.x_pos - flagpole.flagHeight + 2, flag_y - flagpole.flagHeight / 2);
}

function checkFlagpole() {
    if (abs(gameChar_world_x - flagpole.x_pos) < 5) {
        flagpole.isReached = true;
    }
}

function createPlatforms(x ,y, length)

{
    var p = 
    {
        x: x,
        y: y,
        length: length,
        draw: function()
        {
            stroke(50);
            fill(100);
            rect(this.x, this.y, this.length, 20);        
        },
        checkContact: function(gameChar_x, gameChar_y)
        {
            if(gameChar_x > this.x && gameChar_x < this.x + this.length)
            {
                var d = this.y - gameChar_y;
                if(d >= 0 && d < 5)
                {
                    return true;
                    console.log('on platform')
                }

                return false;
            }
        }
    }
    return p;
}

function checkPlayerDie() {
    if (gameChar_y > height) {
        lives--;
        if (lives > 0) {
            startGame();
        }
    }
}

function drawLives() {
    for (var i = 0; i < lives; i++) {
        drawLive(i);
    }
}

function drawLive(index) {
    var heart = {
        pos_x: 50 + 50 * index,
        pos_y: 130,
        width: 30
    }
    fill(255, 100, 255);
    stroke(0);
    fill(255, 200, 200);
    rect(heart.pos_x+12.5,heart.pos_y-20,4,30)
    rect(heart.pos_x+5,heart.pos_y-10,20,4)
}

function drawGameOver() {
    push();
    stroke(0);
    strokeWeight(2);
    fill(200, 0, 0);

    textSize(36);
    textAlign(CENTER);
     text("You died.\n Press space to restart.",
        width / 4, height / 4,
        width / 2, height / 2);
    pop();
}

function drawLevelComlete() {
    push();
    stroke(255, 255, 255);
    strokeWeight(2);
    fill(255, 255, 0);


    textSize(36);
    textStyle(BOLD);
    textAlign(CENTER);
    text("Winner winner chicken dinner! \n press space to start agan.",
        width / 4, height / 4,
        width / 2, height / 2);
    pop();
}

