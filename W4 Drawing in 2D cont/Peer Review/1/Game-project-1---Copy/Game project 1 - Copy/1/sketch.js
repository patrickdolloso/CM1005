/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.


WARNING: Do not get too carried away. If you're shape takes more than 5 lines
of code to draw then you've probably over done it.


*/

function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, 432, 1024, 144); //draw some green ground

	//1. a cloud in the sky
	//... add your code here
    
    //cloud
    fill(255);
    ellipse(200,170,80,80);
    ellipse(230,150,100,90);
    ellipse(260,170,80,80);
    ellipse(230,180,80,80);
    ellipse(270,175,80,80);
    ellipse(275,160,80,80);
    ellipse(285,170,80,80);

	noStroke();
	fill(255);
	text("cloud", 200, 100);

	//2. a mountain in the distance
	//... add your code here
    
    //tall mountain
    fill(150,150,150);
    triangle(500,432,650,100,800,432);
    //snow cap tall mountain
    fill(255);
    triangle(627,150,650,100,673,150);
    //medium mountain
    fill(200,200,200);
    triangle(350,432,500,250,800,432);
    //small mountain
    fill(220,220,220);
    triangle(300,432,400,350,450,432);

    
	noStroke();
	fill(250,250,250);
	text("mountain", 500, 256);
    
   	//3. a tree
	//... add your code here
    
    //Tree trunk
    fill(120,100,40);
    rect(900,282,60,150);
    
    //Tree Branches
    fill(0,155,0);
    triangle(830,332,930,170,1030,332);
    triangle(850,250,930,82,1010,250);

	noStroke();
	fill(255);
	text("tree", 800, 346);

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen

	//... add your code here
    
    //canyon blue fill
    fill(100,155,255);
    rect(80,432,210,144);
    
    //canyon rocks
    fill(120,100,40);
    triangle(90,576,110,500,120,576);
    triangle(200,576,190,480,240,576);
    triangle(110,576,130,520,150,576);
    triangle(160,576,180,540,210,576);
    
    //canyon shadow
    fill(50,50,50,100);
    rect(80,462,210,114);
   
    //canyon rounded edges
    fill(0,155,0);
    rect(200,432,100,144,20,0,0,0);
    rect(0,432,100,144,0,20,0,0);

	noStroke();
	fill(255);
	text("canyon", 100, 480);

	//5. a collectable token - eg. a jewel, fruit, coins
	//... add your code here
    
    fill(212,175,55);
    ellipse(432,414,30,30);
    
    fill(207,181,59);
    ellipse(432,414,20,20);
    
    fill(255,233,0);
    ellipse(432,414,5,15);
    
	noStroke();
	fill(255);
	text("collectable item", 400, 400);
}
