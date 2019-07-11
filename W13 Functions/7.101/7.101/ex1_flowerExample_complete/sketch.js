
var base_x;
var base_y;
var stem_h;

function setup()
{
    createCanvas(1000,500);
    base_x = width/2;
    base_y = height - 50;
    stem_h = 300;
    background(150,150,250);
}



function mousePressed()
{
    //draw a flower
    base_x = mouseX;
    base_y = mouseY;
    drawFlower();
}

function drawFlower()
{
    noFill();
    strokeWeight(10);
    stroke(0,200,50);
    curve(base_x + 200, base_y + 100, 
          base_x , base_y,
          base_x , base_y - stem_h,
          base_x - 200, base_y - (stem_h + 100))

    noStroke();
    fill(255,255,0);
    ellipse(base_x + 45, base_y - stem_h,70,50);
    ellipse(base_x - 45, base_y - stem_h,70,50);
    ellipse(base_x ,base_y + 45 - stem_h,50,70);
    ellipse(base_x ,base_y - 45 - stem_h,50,70);
    
    //draw the center
    fill(255,100,0);
    ellipse(base_x,base_y - stem_h,50,50); 
}






