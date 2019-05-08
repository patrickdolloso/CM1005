/*
The case of the Python Syndicate
Stage 1

Officer: 1382801
CaseNum: 301-0-98925553-1382801

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
var lina_lovelace_image;
var anna_karpinski_image;
var rocky_kray_image;
var cecil_karpinski_image;
var pawel_karpinski_image;
var bones_karpinski_image;



//declare your new variables below
var pawel_karpinski_pos_x = 408;
var pawel_karpinski_pos_y = 309;

var lina_lovelace_pos_x = 115;
var lina_lovelace_pos_y = 40;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	lina_lovelace_image = loadImage("lina.png");
	anna_karpinski_image = loadImage("karpinskiWoman.png");
	rocky_kray_image = loadImage("krayBrothers1.png");
	cecil_karpinski_image = loadImage("karpinskiBros1.png");
	pawel_karpinski_image = loadImage("karpinskiBros2.png");
	bones_karpinski_image = loadImage("karpinskiDog.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(pawel_karpinski_image, pawel_karpinski_pos_x, pawel_karpinski_pos_y);
    
    image(lina_lovelace_image, 
    lina_lovelace_pos_x,
    lina-lovelace_pos_y);

	// image(lina_lovelace_image, 115, 40);
	//image(anna_karpinski_image, 408, 40);
	//image(rocky_kray_image, 701, 40);
	//image(cecil_karpinski_image, 115, 309);
	//image(bones_karpinski_image, 701, 309);

}