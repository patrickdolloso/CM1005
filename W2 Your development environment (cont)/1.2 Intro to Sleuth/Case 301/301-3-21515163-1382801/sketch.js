/*
The case of the Python Syndicate
Stage 4

Officer: 1382801
CaseNum: 301-3-21515163-1382801

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

Organise each syndicate member into an object. I’ve done one for you as an example.
Be sure to replicate the naming conventions for your own objects.
Use image command together with the objects you created to organise the mugshots.

- Once you have done this you can comment out or delete the old variables.

*/

var photoBoard;
var cecil_karpinski_img;
var bones_karpinski_img;
var rocky_kray_img;
var pawel_karpinski_img;
var robbie_kray_img;
var anna_karpinski_img;

var bones_karpinski_object;


//declare your new objects below


// var cecil_karpinski_loc_x = 115;
// var cecil_karpinski_loc_y = 40;
// var rocky_kray_loc_x = 701;
// var rocky_kray_loc_y = 40;
// var pawel_karpinski_loc_x = 115;
// var pawel_karpinski_loc_y = 309;
// var robbie_kray_loc_x = 408;
// var robbie_kray_loc_y = 309;
// var anna_karpinski_loc_x = 701;
// var anna_karpinski_loc_y = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	cecil_karpinski_img = loadImage("karpinskiBros1.png");
	bones_karpinski_img = loadImage("karpinskiDog.png");
	rocky_kray_img = loadImage("krayBrothers1.png");
	pawel_karpinski_img = loadImage("karpinskiBros2.png");
	robbie_kray_img = loadImage("krayBrothers2.png");
	anna_karpinski_img = loadImage("karpinskiWoman.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	bones_karpinski_object = {
		x: 408,
		y: 40,
		image: bones_karpinski_img
	};

	//define your new objects below

	cecil_karpinski_object = {
		x: 115,
		y: 40,
		image: cecil_karpinski_img
	};

	rocky_kray_object = {
		x: 701,
		y: 40,
		image: rocky_kray_img
	};

	pawel_karpinski_object = {
		x: 115,
		y: 309,
		image: pawel_karpinski_img
	};

	robbie_kray_object = {
		x: 408,
		y: 309,
		image: robbie_kray_img
	};

	anna_karpinski_object = {
		x: 701,
		y: 309,
		image: anna_karpinski_img
	};


}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(cecil_karpinski_object.image, cecil_karpinski_object.x, cecil_karpinski_object.y);
	image(bones_karpinski_object.image, bones_karpinski_object.x, bones_karpinski_object.y);
	image(rocky_kray_object.image, rocky_kray_object.x, rocky_kray_object.y);
	image(pawel_karpinski_object.image, pawel_karpinski_object.x, pawel_karpinski_object.y);
	image(robbie_kray_object.image, robbie_kray_object.x, robbie_kray_object.y);
	image(anna_karpinski_object.image, anna_karpinski_object.x, anna_karpinski_object.y);


}