
var yPos;
var xPos;
 

function setup() 
{
    
    createCanvas(512,512);
    yPos = 120;
    xPos = 120;
    
    // text(2+2 , 20,20);
    // text(5-2 , 20,40);
    // text(2*2 , 20,60);
    // text(2351532/1215331 , 20,80);
    
    // yPos = 120;
    
    // ellipse(50, yPos, 20,20);
    // ellipse(50, yPos, 20,20);
    // ellipse(50, yPos, 20,20);
    // ellipse(50, yPos, 20,20);
    // ellipse(50, yPos + 20, 20,20);
    // ellipse(50, yPos + 40, 20,20);
    // ellipse(50, yPos + 60, 20,20);

    // text("yPos: " + yPos, 30, yPos + 100);
    
}

function draw()
{
    background(255);
    ellipse(xPos, yPos, 20)
    yPos = yPos + random(-5,5);
    xPos = xPos + random(-5, 5);
}






