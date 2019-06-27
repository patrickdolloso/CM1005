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

	//set canyon position & width
	canyon = {x_pos: 20,	width: 200};

	//set collectible item
	collectable = {x_pos: 100, y_pos: 100, size: 50};

    // set mountain position and size
    mountain = {x_pos: 250, y_pos: floorPos_y, width: 225, height: 300, offset: 70};
    
    // set cloud position and size
    cloud = {x_pos: 720, y_pos: 120, size: 250};

}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground

	//draw cloud
	noStroke();
    fill(255,255,255);
    ellipse(cloud.x_pos,cloud.y_pos,cloud.size,cloud.size/4);
    ellipse(cloud.x_pos+50,cloud.y_pos+20,cloud.size,cloud.size/4);
    ellipse(cloud.x_pos+100,cloud.y_pos-10,cloud.size,cloud.size/4);


    //draw mountain
    fill(180, 180, 180);
    stroke(255, 255, 255);
    strokeWeight(3);
    triangle(mountain.x_pos, mountain.y_pos ,mountain.x_pos + mountain.width, 
             mountain.y_pos, mountain.x_pos + mountain.width/2, mountain.y_pos - mountain.height);
    triangle(mountain.x_pos + mountain.offset, mountain.y_pos, mountain.x_pos + mountain.offset + mountain.width,
             mountain.y_pos, mountain.x_pos + mountain.offset + mountain.width/2, mountain.y_pos - mountain.height);
    

	//draw tree
	stroke(0);
	fill(106, 83, 47);
	rect(treePos_x,treePos_y+90,20,55);
	fill(85,107,47)
	triangle(treePos_x+10,treePos_y,treePos_x-40,treePos_y+100,treePos_x+60,treePos_y+100);

	//draw canyon
	noStroke();
	fill(100,155,255);
	rect(canyon.x_pos,432,canyon.width,144);
	fill(50,50,50,100);
	rect(canyon.x_pos,462,canyon.width,114);

	//draw collectible item: coin
	fill(0);
	ellipse(collectable.x_pos,collectable.y_pos,collectable.size);
	fill(255,255,0);
	ellipse(collectable.x_pos,collectable.y_pos,collectable.size-10);	


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
}

function mousePressed()
{

	gameChar_x = mouseX;
	gameChar_y = mouseY;

}
