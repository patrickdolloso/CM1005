/* Patrick Dolloso
CM1015 Introduction to Programming I

The Game Project 4 - Side scrolling

Week 6

// README INSTRUCTIONS
### The Game Project 4 – Side scrolling ###

1. Inspect the code. [0 marks]

2. Add your game character to the sketch. [0 marks]
	- As previously, use the
	`gameChar_x` and `gameChar_y` variables to control the position of
	the character on the canvas.
	- You only need to use your facing-forward character for this task.
 	- Check your character moves left and right when the corresponding
     keys are pressed.

3. Make an array of tree positions [1 marks]
	- In `setup`, initialise the `trees_x` variable with an array of
	numbers.
	- Each number should represent the x-position at which a
   tree will be drawn on the canvas.

4. Draw the trees [2 marks]
	- In the `draw` function create a for loop to traverse the `trees_x` array.
	HINT: you need to use `trees_x.length` to make sure you loop over every item
	in the array.
	- Copy your tree drawing code from part 2 b into the body of the for loop
	- Now modify your code so that each tree is drawn using the corresponding x position
	from `trees_x`. HINT: If your for loop uses a variable called `i` you can get the x position by using `trees_x[i]`
	- You should end up with lots of trees in different positions.

5. Make an array of clouds [1 marks]
	- In `setup`, initialise the `clouds` variable with an array
	containing some cloud objects (e.g. at least 3). HINT: you can copy these
	from part 2b but vary the x and y positions of each object.

6. Draw the clouds [2 marks]
	- In the `draw` function create a for loop to traverse the `clouds` array.
	- Copy your cloud drawing code from part 2 b into the body of the for loop.
	- Now modify your code so that each cloud is drawn with the position and size determined by
	the corresponding object in the array

7. And now for the mountains [1 mark]
	- Repeat stages 5 and 6 for the mountains

8. And now for the canyons and collectables [1 mark]
	- Repeat two more time for the canyons and collectables

9. Implement scrolling [2 marks]
	- We need to make the background scenery scroll when the character moves towards
	the left and right edges of the canvas. We can achieve this by using p5’s [`translate`](https://p5js.org/reference/#/p5/translate) function in combination
	with [`push`](https://p5js.org/reference/#/p5/push) and [`pop`](https://p5js.org/reference/#/p5/pop)
	- Make sure you've read about how these work before attempting the following steps.
	- Make sure that the sections of code which draw the clouds, mountains, trees etc. are each placed correctly below the comments in the template
	- *Before* the insert the command `push()` followed by the command `translate(scrollPos, 0)`
	- *Before* the code to draw the game character and *after* the code to draw the trees insert the command `pop()`
	- Now when the game character reaches the edge of the screen all these background items will be moved in the opposite direction to the game character, creating the illusion of motion
	- Once you've got your head around what is going on, try adding more items in the 'off screen' space so that the game character has more game world to explore
/////////////////////////

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var scrollPos;

// initialize variables
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

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Initialise arrays of scenery objects.

	//trees
	trees_x = [620,300,500,1000,450,520,850,1145,1600,1630,1660];
	
	//clouds
	clouds = [
		{pos_x: 100, pos_y: 120},
		{pos_x: 600, pos_y: 100},
		{pos_x: 800, pos_y: 125},
		{pos_x: 430, pos_y: 105},
		{pos_x: 890, pos_y: 105},
		{pos_x: 1090, pos_y: 135}

	];

	//mountains
	mountain = [
		{x_pos: 550, y_pos: floorPos_y, width: 225, height: 300, offset: 70},
		{x_pos: 1650, y_pos: floorPos_y, width: 205, height: 360, offset: 100}
	];

	//canyon
	canyon = [
		{x_pos:40,width:100},
		{x_pos:400,width:40},
		{x_pos:1460,width:40}
	];

	// collectable
	collectable = [
		{x_pos: 1400, y_pos: floorPos_y, size: 50},{x_pos: 190, y_pos: floorPos_y, size: 50},{x_pos: 1800, y_pos: floorPos_y, size: 50}];

};


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
	for(var i = 0; i < mountain.length; i++) {
		fill(165, 42, 42);
		stroke(210,180,140);
		strokeWeight(3);
		triangle(mountain[i].x_pos, mountain[i].y_pos ,mountain[i].x_pos + mountain[i].width, 
				 mountain[i].y_pos, mountain[i].x_pos + mountain[i].width/2, mountain[i].y_pos - mountain[i].height);
		triangle(mountain[i].x_pos + mountain[i].offset, mountain[i].y_pos, mountain[i].x_pos + mountain[i].offset+400 + mountain[i].width,
				 mountain[i].y_pos, mountain[i].x_pos + mountain[i].offset+200 + mountain[i].width/2, mountain[i].y_pos - mountain[i].height);

	}

    


	// Draw trees.
	for(var i = 0; i < trees_x.length; i++){
		stroke(0);
		fill(106, 83, 47);
		rect(trees_x[i],floorPos_y,20,-55);
		fill(85,107,47)
		triangle(trees_x[i]+10,floorPos_y-150,trees_x[i]-40,floorPos_y-30,trees_x[i]+60,floorPos_y-30);	
	};

	// Draw canyons
	for(var i = 0; i < canyon.length; i++){
		noStroke();
		fill(100,155,255);
		rect(canyon[i].x_pos,432,canyon[i].width,144);
		fill(50,50,50,100);
		rect(canyon[i].x_pos,462,canyon[i].width,114);
	}

	
	// sun
	noStroke();
	fill(255,250,0);
	ellipse(350,20,150);

	// Draw collectable items

	for(var i = 0; i < collectable.length; i++) {
		fill(255,255,0,50);
		ellipse(collectable[i].x_pos,collectable[i].y_pos-20,collectable[i].size);
		fill(55,245,0);
		ellipse(collectable[i].x_pos,collectable[i].y_pos-20,collectable[i].size-25);
	}



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
