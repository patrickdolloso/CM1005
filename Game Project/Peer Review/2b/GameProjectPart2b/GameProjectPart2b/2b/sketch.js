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
	treePos_y = height/2 + 62;
    
    // set canyon position and width
    canyon = {x_pos: 200,	width: 250};
    
    // set collectable position and size
    collectable = {x_pos: 370, y_pos: 432, size: 15};
    
    // set mountain position and size
    mountain = {x_pos: 250, y_pos: floorPos_y, width: 225, height: 300, offset: 70};
    
    // set cloud position and size
    cloud = {x_pos: 720, y_pos: 120, size: 250};
}

function draw()
{
	background(100, 155, 255); //fill the sky blue


    
    
    //draw mountain
    noStroke();
    fill(180, 180, 180);
    stroke(255, 255, 255);
    strokeWeight(3);
    triangle(mountain.x_pos, mountain.y_pos ,mountain.x_pos + mountain.width, 
             mountain.y_pos, mountain.x_pos + mountain.width/2, mountain.y_pos - mountain.height);
    triangle(mountain.x_pos + mountain.offset, mountain.y_pos, mountain.x_pos + mountain.offset + mountain.width,
             mountain.y_pos, mountain.x_pos + mountain.offset + mountain.width/2, mountain.y_pos - mountain.height);
    
    
    
	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground
    
    
    

	//draw cloud
    noStroke();
    fill(255,255,255);
    ellipse(cloud.x_pos,cloud.y_pos,cloud.size,cloud.size/4);
    ellipse(cloud.x_pos+50,cloud.y_pos+20,cloud.size,cloud.size/4);
    ellipse(cloud.x_pos+100,cloud.y_pos-10,cloud.size,cloud.size/4);

	//noStroke();
	//fill(255);
	//text("cloud", 200, 100);


    
    
    
    //draw tree
    stroke(77, 38, 0);
    strokeWeight(3);
    fill(153, 77, 0);
    //rect(850,352,30,80);
    rect(treePos_x,treePos_y,30,80);
    
    stroke(0, 50, 0);
    strokeWeight(3);
    fill(0, 100, 0);
    triangle(treePos_x-35,treePos_y+48,treePos_x+55,treePos_y+48,treePos_x+15,treePos_y-62);
    triangle(treePos_x-30,treePos_y+13,treePos_x+60,treePos_y+13,treePos_x+15,treePos_y-77);
    triangle(treePos_x-30,treePos_y+13,treePos_x+60,treePos_y+13,treePos_x+15,treePos_y-77);
    triangle(treePos_x-25,treePos_y-27,treePos_x+55,treePos_y-27,treePos_x+15,treePos_y-92);
    triangle(treePos_x-15,treePos_y-62,treePos_x+45,treePos_y-62,treePos_x+15,treePos_y-102);
    
    
    
    
    //draw canyon
    noStroke();
    fill(65,45,25);
    beginShape();
    vertex(canyon.x_pos - (canyon.width/2)       ,432);  
    vertex(canyon.x_pos - (canyon.width/2) + 20  ,576);  
    vertex(canyon.x_pos + (canyon.width/2) - 20  ,576);  
    vertex(canyon.x_pos + (canyon.width/2)       ,432);
    vertex(canyon.x_pos + (canyon.width/2) - 60  ,432);
    vertex(canyon.x_pos - (canyon.width/2) + 60  ,432);
    endShape(CLOSE);



    stroke(60,30,10);
    line(canyon.x_pos - (canyon.width/2) + 60 ,432, canyon.x_pos - (canyon.width/2) + 70,576);
    line(canyon.x_pos + (canyon.width/2) - 60 ,432, canyon.x_pos + (canyon.width/2) - 70,576);
    
    /*    // part of canyon that has to go behind mountain
    noStroke();
    fill(100, 155, 255);
    stroke(100, 155, 255);
    beginShape();
    vertex(canyon.x_pos - (canyon.width/2)       ,432);  
    vertex(canyon.x_pos + (canyon.width/2)       ,432);
    vertex(canyon.x_pos + (canyon.width/2) - 60 ,485);
    vertex(canyon.x_pos - (canyon.width/2) + 60 ,485);
    endShape(CLOSE);
    */
    
     //draw collectable
    stroke(40,100,60);
    strokeWeight(3);
    line(collectable.x_pos,collectable.y_pos,collectable.x_pos + collectable.size, collectable.y_pos - collectable.size);
    noStroke();
    fill(165,0,40);
    strokeWeight(1);
    stroke(255,0,0);
    ellipse(collectable.x_pos,collectable.y_pos,collectable.size,collectable.size * 1.33);
    ellipse(collectable.x_pos + collectable.size * .333 ,collectable.y_pos,collectable.size,collectable.size * 1.33);
    noFill();

    
    
    
    //draw character here
    //standing-front
    //head
    noStroke();
    fill(255,200,200);
    ellipse(gameChar_x,gameChar_y-51,25);
    //torso
    fill(255,0,0);
    ellipse(gameChar_x,gameChar_y-26,20,30);
    //arms
    fill(255,200,200);
    rect(gameChar_x -20,gameChar_y-33,10,5);
    rect(gameChar_x +10,gameChar_y-33,10,5);
    //legs
    fill(0,0,255);
    rect(gameChar_x -6,gameChar_y-14,5,15);
    rect(gameChar_x +1,gameChar_y-14,5,15);
    
    

    

}

function mousePressed()
{


    gameChar_x = mouseX;
    gameChar_y = mouseY;
    


}
