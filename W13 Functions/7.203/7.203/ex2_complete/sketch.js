var spaceship_a;
var spaceship_b;

function setup()
{
    createCanvas(500,500);
    
    spaceship_a = {x: width/2, y: height/2, radius: 50};
    spaceship_b = {x: width/2, y: height/2, radius: 50};
    
    spaceship_a.speed_x = random(-5,5);
    spaceship_a.speed_y = random(-5,5);
    spaceship_b.speed_x = random(-5,5);
    spaceship_b.speed_y = random(-5,5);


}

function draw()
{
    background(0);
    noStroke();
    
    if(checkCollision(spaceship_a, spaceship_b, spaceship_a.radius + spaceship_b.radius))
    {
        drawSpaceShip(spaceship_a, true);
        drawSpaceShip(spaceship_b, true);
    }
    else
    {
        drawSpaceShip(spaceship_a, false);
        drawSpaceShip(spaceship_b, false);

    }


    fly(spaceship_a);
    fly(spaceship_b);
    
    
    
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
    ellipse(spaceship.x + rx,spaceship.y - spaceship.radius/2 + ry, spaceship.radius * 0.75, spaceship.radius);
    
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
    var d = dist(point_a.x, point_a.y, point_b.x, point_b.y);
    
    if(d < threshold)
    {
        return true;
    }
    else
    {
        return false;    
    }
}

function fly(spaceship)
{

    
    var s = getSpeed(spaceship);
    
    spaceship.speed_x = s.x;
    spaceship.speed_y = s.y;
    
    
    spaceship.x += spaceship.speed_x;
    spaceship.y += spaceship.speed_y;
    
   

}

function getSpeed(spaceship)
{

    var speed = {x: spaceship.speed_x, y: spaceship.speed_y};
    
    
    if(spaceship.x < 0  || spaceship.x > width)
    {
        speed.x *= -1;
    }
    
    if(spaceship.y < 0  || spaceship.y > height)
    {
        speed.y *= -1;
    }
    
    return speed;
}