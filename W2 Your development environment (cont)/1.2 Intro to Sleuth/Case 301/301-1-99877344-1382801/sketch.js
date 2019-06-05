/*
The case of the Python Syndicate
Stage 2


Officer: 1382801
CaseNum: 301-1-99877344-1382801

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Countess hamilton

- The variables for Countess hamilton have been declared and
initialised.
- Modify the x and y parameters of each image command using these two variables
so the images maintain their correct positions their correct positions on the board.
- To do this you will need to combine add and subtract operators with variables
Countess hamilton for for each parameter.
- Do not create any new variables
- Do not add any additional commands


*/

var photoBoard;
var linaLovelaceImg;
var robbieKrayImg;
var cecilKarpinskiImg;
var annaKarpinskiImg;
var countessHamiltonImg;
var rockyKrayImg;


var countessHamiltonXLocation = 408;
var countessHamiltonYLocation = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	linaLovelaceImg = loadImage("lina.png");
	robbieKrayImg = loadImage("krayBrothers2.png");
	cecilKarpinskiImg = loadImage("karpinskiBros1.png");
	annaKarpinskiImg = loadImage("karpinskiWoman.png");
	countessHamiltonImg = loadImage("countessHamilton.png");
	rockyKrayImg = loadImage("krayBrothers1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(countessHamiltonImg, countessHamiltonXLocation, countessHamiltonYLocation);

	image(linaLovelaceImg, countessHamiltonXLocation - 293, countessHamiltonYLocation - 269);
	image(robbieKrayImg, countessHamiltonXLocation, countessHamiltonYLocation-269);
	image(cecilKarpinskiImg, countessHamiltonXLocation + 293, countessHamiltonYLocation - 269);
	image(annaKarpinskiImg, countessHamiltonXLocation-293, countessHamiltonYLocation);
	image(rockyKrayImg, countessHamiltonXLocation+293, countessHamiltonYLocation);

}