/*

The Game Project

Week 3

Game interaction

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;

var isLeft;
var isRight;
var isFalling;
var isPlummeting; 

var canyon;
var collectable;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
    
    isLeft = false;
    isRight = false;
    isFalling = false;
    isPlummeting = false;
    
    canyon = {
            x_pos:230,
            y_pos:height * 3/4,
            width:100,
    }
    
    collectable = {
            x_pos:300,
            y_pos:350,
            size:40,
            isFound:false
    }

}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	//draw the canyon
    //4. a canyon
    fill(100, 155, 255);
    //canyon redo 
    rect (canyon.x_pos, canyon.y_pos, canyon.width, canyon.width + 136)
    fill (0, 100, 255);
    rect (canyon.x_pos, height - canyon.width/5, canyon.width, canyon.width/5);
    arc (canyon.x_pos + canyon.width/6, height - canyon.width/8, canyon.width/3, canyon.width/3, PI, 0);//arc 1 - wave
    arc (canyon.x_pos + canyon.width/2, height - canyon.width/8, canyon.width/3, canyon.width/3, PI, 0);//arc 1 - wave
    arc (canyon.x_pos + canyon.width/1.20, height - canyon.width/8, canyon.width/3, canyon.width/3, PI, 0);//arc 1 - wave
    

    
    
    //5. a collectable token - wand
    if (dist (gameChar_x, gameChar_y, collectable.x_pos, collectable.y_pos) < 50)
        {
            collectable.isFound = true;
        }
	if (collectable.isFound == false)
        {
            fill (150, 0, 150);
            quad (collectable.x_pos - collectable.size - 3, collectable.y_pos + collectable.size * 0.66, 
                  collectable.x_pos - collectable.size, collectable.y_pos + collectable.size * 0.75, 
                  collectable.x_pos, collectable.y_pos, 
                  collectable.x_pos - 1, collectable.y_pos - 1);
            //magic cirlces
            fill (255, 0, 255, 130);
            ellipse (collectable.x_pos, collectable.y_pos, 
                     collectable.size, collectable.size);
            ellipse (collectable.x_pos + 20, collectable.y_pos + 10, 
                     collectable.size * 0.4, collectable.size * 0.4);
            ellipse (collectable.x_pos + 15, collectable.y_pos - 2, 
                     collectable.size * 0.3, collectable.size * 0.3);
            //magic spots 
            fill (255, 255, 255);
            ellipse (collectable.x_pos, collectable.y_pos - 15, 
                     collectable.size * 0.06, collectable.size * 0.06);
            ellipse (collectable.x_pos - 2, collectable.y_pos - 5, 
                     collectable.size * 0.06, collectable.size * 0.06);
            ellipse (collectable.x_pos + 2, collectable.y_pos - 3, 
                     collectable.size * 0.04, collectable.size * 0.04);
            ellipse (collectable.x_pos +1 , collectable.y_pos + 3, 
                     collectable.size * 0.08, collectable.size * 0.08);
            ellipse (collectable.x_pos + 12, collectable.y_pos - 1, 
                     collectable.size * 0.04, collectable.size * 0.04);
            ellipse (collectable.x_pos + 15, collectable.y_pos + 8, 
                     collectable.size * 0.06, collectable.size * 0.06);
                  
        }

	//the game character    
    
	if(isLeft && isFalling)
	   {
		//Lila jumping left 
            fill(90, 20, 0);
            ellipse (gameChar_x - 6, gameChar_y - 65, 20, 15);//hair - back

            //legs
            fill (220, 150, 80);
            quad (gameChar_x - 15, gameChar_y - 25, //leg left
                  gameChar_x - 6, gameChar_y - 24,
                  gameChar_x - 12, gameChar_y - 20,
                  gameChar_x - 16, gameChar_y - 23,);

            quad (gameChar_x - 16, gameChar_y - 23, //lower leg left
                  gameChar_x - 10, gameChar_y - 22,
                  gameChar_x - 16, gameChar_y - 10,
                  gameChar_x - 19, gameChar_y - 10);

            fill (255, 0, 255); 
            rect (gameChar_x + 18, gameChar_y - 22, 3, 7); //shoe right 
            fill (220, 150, 80);
            quad (gameChar_x - 2, gameChar_y - 25, //leg right
                  gameChar_x + 10, gameChar_y - 25, 
                  gameChar_x + 11, gameChar_y - 16, 
                  gameChar_x + 8, gameChar_y - 13); 

            quad (gameChar_x + 6, gameChar_y - 18, //lower leg right
                  gameChar_x + 8, gameChar_y - 13, 
                  gameChar_x + 20, gameChar_y - 21, 
                  gameChar_x + 18, gameChar_y - 22);

            //right arm 
            triangle (gameChar_x - 7, gameChar_y - 54,
                      gameChar_x - 7, gameChar_y - 49,
                      gameChar_x - 22, gameChar_y - 55); 

            //body
            fill (0, 255, 255), 
            quad (gameChar_x - 8, gameChar_y - 58, //dress - top 
                  gameChar_x + 4, gameChar_y - 54, 
                  gameChar_x + 10, gameChar_y - 40, 
                  gameChar_x - 7, gameChar_y - 30);
            quad (gameChar_x + 10, gameChar_y - 40, //dress skirt - 1
                  gameChar_x - 7, gameChar_y - 38,
                  gameChar_x - 20, gameChar_y - 25,
                  gameChar_x + 10, gameChar_y - 22);
            triangle (gameChar_x + 10, gameChar_y - 40, //dress skirt - 2
                      gameChar_x + 20, gameChar_y - 30, 
                      gameChar_x + 10, gameChar_y - 22);

            //face and hair
            fill (205, 125, 80);
            rect (gameChar_x - 7, gameChar_y - 56, 6, 6, 3);// neck
            fill (220, 150, 80);
            ellipse (gameChar_x - 5, gameChar_y - 63, 15, 20);//face
            fill(90, 20, 0);
            ellipse (gameChar_x - 4, gameChar_y - 68, 17, 12);//hair - front 
            ellipse (gameChar_x + 3, gameChar_y - 63, 20, 8);
            ellipse (gameChar_x + 3, gameChar_y - 65, 10, 10);

            //left arm 
            fill (220, 150, 80);
            triangle (gameChar_x + 3, gameChar_y - 53,
                      gameChar_x + 1, gameChar_y - 48,
                      gameChar_x + 20, gameChar_y - 45);

            fill (255, 0, 255); 
            rect (gameChar_x - 24, gameChar_y - 10, 8, 3); //shoe left

	   }
	else if(isRight && isFalling)
	   {
            //Lila jumping RIGHT
            fill(90, 20, 0);
            ellipse (gameChar_x + 6, gameChar_y - 65, 20, 15);//hair - back


            //legs
            fill (255, 0, 255); 
            rect (gameChar_x - 22, gameChar_y - 20, 3, 7); //shoe right
            fill (220, 150, 80);
            quad (gameChar_x - 9, gameChar_y - 25, //leg right
                  gameChar_x, gameChar_y - 24,
                  gameChar_x - 4, gameChar_y - 12,
                  gameChar_x - 9, gameChar_y - 14,);

            quad (gameChar_x - 5, gameChar_y - 12, //lower leg right
                  gameChar_x - 4, gameChar_y - 16,
                  gameChar_x - 20, gameChar_y - 20,
                  gameChar_x - 21, gameChar_y - 17);


            fill (220, 150, 80);
            quad (gameChar_x + 4, gameChar_y - 25, //leg left
                  gameChar_x + 8, gameChar_y - 35, 
                  gameChar_x + 16, gameChar_y - 26, 
                  gameChar_x + 12, gameChar_y - 22); 

            quad (gameChar_x + 15, gameChar_y - 10, //lower leg left
                  gameChar_x + 11, gameChar_y - 23, 
                  gameChar_x + 16, gameChar_y - 26, 
                  gameChar_x + 18, gameChar_y - 10);

            fill (255, 0, 255); 
            rect (gameChar_x + 15, gameChar_y - 10, 8, 3); //shoe left

            //left arm 
            fill (220, 150, 80);
            triangle (gameChar_x, gameChar_y - 53,
                      gameChar_x + 2, gameChar_y - 46,
                      gameChar_x + 20, gameChar_y - 55);

            //body
            fill (0, 255, 255), 
            quad (gameChar_x - 7, gameChar_y - 54, //dress - top 
                  gameChar_x + 7, gameChar_y - 58, 
                  gameChar_x + 7, gameChar_y - 35, 
                  gameChar_x - 11, gameChar_y - 30);
            triangle (gameChar_x - 9, gameChar_y - 40, //dress skirt - 1
                      gameChar_x - 20, gameChar_y - 25, 
                      gameChar_x + 5, gameChar_y - 22);
            quad (gameChar_x + 4, gameChar_y - 40, //dress skirt - 2
                      gameChar_x + 15, gameChar_y - 30, 
                      gameChar_x + 5, gameChar_y - 22,
                      gameChar_x - 9, gameChar_y - 40,);

            //face and hair
            fill (205, 125, 80);
            rect (gameChar_x - 1, gameChar_y - 56, 6, 6, 3);// neck
            fill (220, 150, 80);
            ellipse (gameChar_x + 5, gameChar_y - 63, 15, 20);//face
            fill(90, 20, 0);
            ellipse (gameChar_x + 4, gameChar_y - 68, 17, 12);//hair - front 
            ellipse (gameChar_x - 3, gameChar_y - 63, 20, 8);
            ellipse (gameChar_x - 3, gameChar_y - 65, 10, 10);

            //right arm 
            fill (220, 150, 80);
            triangle (gameChar_x - 5, gameChar_y - 53,
                      gameChar_x - 4, gameChar_y - 47,
                      gameChar_x - 23, gameChar_y - 45);

        }
	else if(isLeft)
        {
                //Lila walking left
            //face
            fill(90, 20, 0);
            ellipse (gameChar_x, gameChar_y - 62, 30, 31);//hair
            fill (220, 150, 80);
            ellipse (gameChar_x - 5, gameChar_y - 60, 18, 23);//face 
            fill(90, 20, 0);
            arc (gameChar_x - 10, gameChar_y - 73, 30, 15, 0, HALF_PI);//hair - fringe 
            //neck and body 
            fill (220, 150, 80);
            rect (gameChar_x - 3.5, gameChar_y - 50, 7, 3);
            triangle (gameChar_x, gameChar_y - 50, //arm left 
                      gameChar_x + 3, gameChar_y - 38, 
                      gameChar_x + 18, gameChar_y - 30);
            //legs and shoes 
            fill (220, 150, 80);
            quad (gameChar_x - 7, gameChar_y - 19, //leg left
                  gameChar_x - 1, gameChar_y - 18, 
                  gameChar_x - 7, gameChar_y - 10, 
                  gameChar_x - 11, gameChar_y - 10); 
            quad (gameChar_x - 11, gameChar_y - 10, //lower leg left
                  gameChar_x - 7, gameChar_y - 10, 
                  gameChar_x - 2, gameChar_y - 2, 
                  gameChar_x - 5, gameChar_y - 2);
            rect (gameChar_x + 1, gameChar_y - 18, 5, 20); // leg right 
            fill (255, 0, 255); 
            rect (gameChar_x - 9, gameChar_y - 3, 7, 3); //shoe left 
            rect (gameChar_x - 2, gameChar_y, 8, 3); //shoe right 
            fill (0, 255, 255), 
            quad (gameChar_x - 3.5, gameChar_y - 48, // dress 
                  gameChar_x + 3.5, gameChar_y - 48, 
                  gameChar_x + 15, gameChar_y - 15, 
                  gameChar_x - 8, gameChar_y - 18); 
            fill (220, 150, 80);
            triangle (gameChar_x + 3.5, gameChar_y - 48, //arm right  
                      gameChar_x + 4, gameChar_y - 40, 
                      gameChar_x - 11, gameChar_y - 25);

        }
	else if(isRight)
            {
                //Lila walking right
            //face
            fill(90, 20, 0);
            ellipse (gameChar_x, gameChar_y - 62, 30, 31);//hair
            fill (220, 150, 80);
            ellipse (gameChar_x + 5, gameChar_y - 60, 18, 23);//face 
            fill(90, 20, 0);
            arc (gameChar_x - 5, gameChar_y - 72, 30, 15, 0, HALF_PI);//hair - fringe 
            //neck and body 
            fill (220, 150, 80);
            rect (gameChar_x - 3.5, gameChar_y - 50, 7, 3);
            triangle (gameChar_x + 3.5, gameChar_y - 50, //arm left  
                      gameChar_x, gameChar_y - 40, 
                      gameChar_x - 17, gameChar_y - 35);

            //legs and shoes 
            fill (220, 150, 80);
            quad (gameChar_x, gameChar_y - 19, //leg right
                  gameChar_x + 7, gameChar_y - 18, 
                  gameChar_x + 11, gameChar_y - 10, 
                  gameChar_x + 6, gameChar_y - 10); 
            quad (gameChar_x + 6, gameChar_y - 10, //lower leg right
                  gameChar_x + 11, gameChar_y - 10, 
                  gameChar_x + 8, gameChar_y - 2, 
                  gameChar_x + 5, gameChar_y - 2);
            rect (gameChar_x - 6, gameChar_y - 18, 5, 20); // leg left 
            fill (255, 0, 255); 
            rect (gameChar_x + 5, gameChar_y - 3, 7, 3); //shoe right 
            rect (gameChar_x - 6, gameChar_y, 8, 3); //shoe left 
            fill (0, 255, 255), 
            quad (gameChar_x - 3.5, gameChar_y - 48, // dress 
                  gameChar_x + 3.5, gameChar_y - 48, 
                  gameChar_x + 8, gameChar_y - 18, 
                  gameChar_x - 15, gameChar_y - 15); 
            fill (220, 150, 80);
            triangle (gameChar_x - 3.5, gameChar_y - 48, //arm right 
                      gameChar_x - 5, gameChar_y - 40, 
                      gameChar_x + 11, gameChar_y - 25);

        }
    
	else if(isFalling || isPlummeting)
        {
                //Lila jumping forward 
            fill(90, 20, 0);
            ellipse (gameChar_x, gameChar_y - 67, 35, 21);//hair
            fill (220, 150, 80);
            ellipse (gameChar_x, gameChar_y - 63, 18, 20);//face 
            fill(90, 20, 0);
            arc (gameChar_x - 10, gameChar_y - 73, 30, 15, 0, HALF_PI);//hair - fringe 

            //neck and body 
            fill (220, 150, 80);
            rect (gameChar_x - 3.5, gameChar_y - 55, 7, 3);//neck

            triangle (gameChar_x - 3.5, gameChar_y - 52, //arm left
                      gameChar_x - 4, gameChar_y - 46, 
                      gameChar_x - 20, gameChar_y - 50);

            triangle (gameChar_x + 3.5, gameChar_y - 52, //arm right 
                      gameChar_x + 4, gameChar_y - 46, 
                      gameChar_x + 20, gameChar_y - 50);
            fill (0, 255, 255), 
            quad (gameChar_x - 3.5, gameChar_y - 52, //dress - top 
                  gameChar_x + 3.5, gameChar_y - 52, 
                  gameChar_x + 15, gameChar_y - 30, 
                  gameChar_x - 15, gameChar_y - 30); 
            quad (gameChar_x - 15, gameChar_y - 30, // dress - skirt 
                  gameChar_x + 15, gameChar_y - 30, 
                  gameChar_x + 15, gameChar_y - 20, 
                  gameChar_x - 15, gameChar_y - 20); 
            //legs and shoes 
            fill (220, 150, 80);
            rect (gameChar_x - 10, 
                  gameChar_y - 20, 6, 5);//leg left 
            rect (gameChar_x + 5, 
                  gameChar_y - 20, 6, 8);//leg right 
            quad (gameChar_x - 10, gameChar_y - 15,//lower leg left 
                  gameChar_x - 4, gameChar_y - 15,
                  gameChar_x - 2, gameChar_y - 10,
                  gameChar_x - 2, gameChar_y - 8);
            quad (gameChar_x + 5, gameChar_y - 12, //lower leg right 
                  gameChar_x + 11, gameChar_y - 12, 
                  gameChar_x + 7, gameChar_y - 5, 
                  gameChar_x + 3, gameChar_y - 5);          
            fill (255, 0, 255); 
            rect (gameChar_x - 5, gameChar_y - 10, 3, 5); // shoe left 
            rect (gameChar_x + 3, gameChar_y - 5, 4, 6); // shoe right

        }
	else
        {
                //Lila facing forward
            //face
            fill(90, 20, 0);
            ellipse (gameChar_x, gameChar_y - 62, 30, 31);//hair
            fill (220, 150, 80);
            ellipse (gameChar_x, gameChar_y - 60, 18, 23);//face 
            fill(90, 20, 0);
            arc (gameChar_x - 10, gameChar_y - 73, 30, 15, 0, HALF_PI);//hair - fringe 
            //neck and body 
            fill (220, 150, 80);
            rect (gameChar_x - 3.5, gameChar_y - 50, 7, 3);
            triangle (gameChar_x - 3.5, gameChar_y - 48, //arm left 
                      gameChar_x - 8, gameChar_y - 45, 
                      gameChar_x - 11, gameChar_y - 25);
            triangle (gameChar_x + 3.5, gameChar_y - 48, //arm right  
                      gameChar_x + 8, gameChar_y - 45, 
                      gameChar_x + 11, gameChar_y - 25);
            fill (0, 255, 255), 
            quad (gameChar_x - 3.5, gameChar_y - 48, // dress 
                  gameChar_x + 3.5, gameChar_y - 48, 
                  gameChar_x + 15, gameChar_y - 15, 
                  gameChar_x - 15, gameChar_y - 15); 
            //legs and shoes 
            fill (220, 150, 80);
            rect (gameChar_x - 6, gameChar_y - 15, 5, 18); //leg left 
            rect (gameChar_x + 1, gameChar_y - 15, 5, 18); // leg right 
            fill (255, 0, 255); 
            rect (gameChar_x - 8, gameChar_y, 7, 3); //shoe left 
            rect (gameChar_x + 1, gameChar_y, 7, 3); //shoe right 

        }

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
    
    if (isLeft == true)
        {
            gameChar_x -= 5
        }
    
    if (isRight == true)
        {
            gameChar_x += 5
        }
        
   //jumping and gravity attempt 3
    if (gameChar_y < floorPos_y)
        {
            gameChar_y += 1; 
            isFalling = true
        }
    else 
        {
             isFalling = false; 
        }
    
    //falling into canyon
    if (gameChar_x > canyon.x_pos && gameChar_x < canyon.x_pos + canyon.width && gameChar_y == floorPos_y)
        {
            isPlummeting = true; 
        }
    else if (gameChar_y < floorPos_y)
        {
            isPlummeting = false;
        }
    if (isPlummeting == true)
        {
            gameChar_y += 5,
            gameChar_x = max(canyon.x_pos, canyon.x_pos + canyon.width/2) ;
        }
        
    
}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.
    
    if (keyCode == 37)
        {
            isLeft = true;
        }
    else if (keyCode == 39)
        {
            isRight = true;
            
        }
    if (keyCode == 32 && gameChar_y == floorPos_y)
        {
            isFalling = true;
            gameChar_y -= 100;
        }
    
        
	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.
    
     if (keyCode == 37)
        {
            isLeft = false;
        }
    else if (keyCode == 39)
        {
            isRight = false;
        }
    
    
	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
}
