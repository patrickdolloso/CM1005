/*

Officer: 1382801
CaseNum: 303-2-62459759-1382801

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:











This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var RestrictedStorageComb0;
var RestrictedStorageComb1;
var RestrictedStorageComb2;
var RestrictedStorageComb3;
var RestrictedStorageComb4;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	RestrictedStorageComb0 = 0;
	RestrictedStorageComb1 = 0;
	RestrictedStorageComb2 = 0;
	RestrictedStorageComb3 = 0;
	RestrictedStorageComb4 = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...

// Whilst the mouse is being dragged:
// - Make RestrictedStorageComb0 equal to the value of mouseX
// - Use the 'max' function to prevent RestrictedStorageComb0 from falling below 3

// Whilst the mouse is being dragged:
// - Decrement RestrictedStorageComb1 by 3
// - Use the 'max' function to prevent RestrictedStorageComb1 from falling below 2

// Whilst the mouse is being dragged:
// - Make RestrictedStorageComb2 equal to the value of mouseY
// - Use the 'max' function to prevent RestrictedStorageComb2 from falling below 2

function mouseDragged() {
	console.log("mouseDragged", mouseX, mouseY);
	RestrictedStorageComb0 = mouseX;
	RestrictedStorageComb0 = max(RestrictedStorageComb0, 3);
	RestrictedStorageComb1 -= 3;
	RestrictedStorageComb1 = max(RestrictedStorageComb1, 2);
	RestrictedStorageComb2 = mouseY;
	RestrictedStorageComb2 = max(RestrictedStorageComb2, 2)
}

// When the mouse button is pressed:
// - Decrement RestrictedStorageComb3 by 1
// - Use the 'min' function to prevent RestrictedStorageComb3 from going above 10
function mousePressed() {
	console.log("mousePressed", mouseX, mouseY);
	RestrictedStorageComb3 -= 1;
	RestrictedStorageComb3 = min(RestrictedStorageComb3, 10);
}

// Whilst the mouse is moving:
// - Make RestrictedStorageComb4 equal to the value of mouseY
// - Use the 'min' function to prevent RestrictedStorageComb4 from going above 80
function mouseMoved() {
	console.log("mouseMoved");
	RestrictedStorageComb4 = mouseY;
	RestrictedStorageComb4 = min(RestrictedStorageComb4, 80);
}

///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dials
	push();
	translate(120,170);
	drawDial(140,RestrictedStorageComb0, 16);
	pop();

	push();
	translate(120,380);
	drawDial(140,RestrictedStorageComb1, 15);
	pop();

	push();
	translate(280,170);
	drawDial(140,RestrictedStorageComb2, 13);
	pop();

	push();
	translate(280,380);
	drawDial(140,RestrictedStorageComb3, 13);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(RestrictedStorageComb4);
	pop();


}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}
