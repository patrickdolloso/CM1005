/*
The case of the Python Syndicate
Stage 3


Officer: 1382801
CaseNum: 301-2-48730429-1382801

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Lina lovelace has been declared and initialised
- Modify the x and y parameters of each image command using the x and y
properties from the Lina lovelace object so the images remain at their correct
positions on the board.
- To do this you will need to combine add and subtract operators with the
relevant property for each parameter



*/

var photoBoard;
var robbieKrayImage;
var countessHamiltonImage;
var rockyKrayImage;
var annaKarpinskiImage;
var linaLovelaceImage;
var bonesKarpinskiImage;

var linaLovelaceObject;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	robbieKrayImage = loadImage("krayBrothers2.png");
	countessHamiltonImage = loadImage("countessHamilton.png");
	rockyKrayImage = loadImage("krayBrothers1.png");
	annaKarpinskiImage = loadImage("karpinskiWoman.png");
	linaLovelaceImage = loadImage("lina.png");
	bonesKarpinskiImage = loadImage("karpinskiDog.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	linaLovelaceObject = {
		x: 408,
		y: 309,
		image: linaLovelaceImage
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(linaLovelaceObject.image, linaLovelaceObject.x, linaLovelaceObject.y);

	image(robbieKrayImage, linaLovelaceObject.x - 293, linaLovelaceObject.y - 269);
	image(countessHamiltonImage, linaLovelaceObject.x, linaLovelaceObject.y - 269);
	image(rockyKrayImage, linaLovelaceObject.x + 293, linaLovelaceObject.y - 269);
	image(annaKarpinskiImage, linaLovelaceObject.x - 293, linaLovelaceObject.y);
	image(bonesKarpinskiImage, linaLovelaceObject.x + 293, linaLovelaceObject.y);

}