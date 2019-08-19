var spaceship_a;

function setup()
{
    createCanvas(500,500);
    
    spaceship_a = {x: width/2, y: height/2, radius: 50};


}

function draw()
{
    background(0);
    noStroke();
    
    drawSpaceShip(spaceShip_a, false);
    
}


function drawSpaceShip(spaceship, isCollided)
{
    var rx = 0;
    var ry = 0;
    
    if(isCollided)
    {
        rx = random(-10,10);
        ry = random(-10,10);  
    }
    
    fill(100,200,255);
    ellipse(
        spaceship.x + rx,
        spaceship.y - spaceship.radius/2 + ry, 
        spaceship.radius * 0.75, 
        spaceship.radius);
    
    if(isCollided)
    {
        fill(150,0,0);
    }
    else
    {
        fill(100);    
    }
    
    ellipse(spaceship.x + rx,spaceship.y + ry, spaceship.radius * 2, spaceship.radius);
}



function checkCollision(point_a, point_b, threshold)
{
    //returns true if point_a is less than threshold away from point_b
    //otherwise it returns false
}


function fly(spaceship)
{
    //increments the position of the spaceship by its speed properties
    
    spaceship.x += spaceship.speed_x;
    spaceship.y += spaceship.speed_y;

}


function getSpeed(spaceship)
{

    //reverses the speed of a spaceship if it crosses the edge of the canvas
    //returns a speed object with x and y properties
    
}