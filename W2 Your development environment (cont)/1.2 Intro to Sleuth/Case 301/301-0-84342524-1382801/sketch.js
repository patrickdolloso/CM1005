/*
The case of the Python Syndicate
Stage 1

Officer: 1382801
CaseNum: 301-0-84342524-1382801

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Find coordinates for the mugshot and initialise your variable with these
values.
- Replace the hard-coded constants in the corresponding image command so that
the mugshot appears in its designated position.

*/

var photoBoard;
var linaLovelaceImg;
var cecilKarpinskiImg;
var countessHamiltonImg;
var bonesKarpinskiImg;
var robbieKrayImg;
var pawelKarpinskiImg;



//declare your new variables below
var robbieKrayPositionX = 408;
var robbieKrayPositionY = 309;

var linaLovelacePositionX = 115;
var linaLovelacePositionY = 40;

var cecilKarpinskiPositionX = 408;
var cecilKarpinskiPositionY = 40;

var countessHamiltonPositionX = 701;
var countessHamiltonPositionY = 40;

var bonesKarpinskiPositionX = 115;
var bonesKarpinskiPositionY = 309;

var pawelKarpinskiPositionX = 701;
var pawelKarpinskiPositionY = 309;

function preload()
{
	photoBoard = loadImage('photoBoard.png');
	linaLovelaceImg = loadImage("lina.png");
	cecilKarpinskiImg = loadImage("karpinskiBros1.png");
	countessHamiltonImg = loadImage("countessHamilton.png");
	bonesKarpinskiImg = loadImage("karpinskiDog.png");
	robbieKrayImg = loadImage("krayBrothers2.png");
	pawelKarpinskiImg = loadImage("karpinskiBros2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(robbieKrayImg, robbieKrayPositionX, robbieKrayPositionY);

	image(linaLovelaceImg, linaLovelacePositionX, linaLovelacePositionY);
	image(cecilKarpinskiImg, cecilKarpinskiPositionX, cecilKarpinskiPositionY);
	image(countessHamiltonImg, countessHamiltonPositionX, countessHamiltonPositionY);
	image(bonesKarpinskiImg, bonesKarpinskiPositionX, bonesKarpinskiPositionY);
	image(pawelKarpinskiImg, pawelKarpinskiPositionX, pawelKarpinskiPositionY);

}