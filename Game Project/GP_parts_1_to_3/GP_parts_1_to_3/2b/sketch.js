/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = width/2;
	treePos_y = height/2;
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground

	//draw the game character
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

	//draw tree
}

function mousePressed()
{

	gameChar_x = mouseX;
	gameChar_y = mouseY;

}
