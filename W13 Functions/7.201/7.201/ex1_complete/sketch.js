
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
    
    //draw a flower
    
    for(var i = 0; i < 10; i++)
    {
        drawFlower(i * 100, base_y, random(50,400),255,255,0);
    }
    
    for(var i = 0; i < 10; i++)
    {
        drawFlower(50 + i * 100, base_y, random(50,400),128,0,128);
    }
    
}


function drawFlower(_base_x, _base_y, _stem_h, r, g ,b)
{
    noFill();
    strokeWeight(10);
    stroke(0,200,50);
    curve(_base_x + 200, _base_y + 100, 
          _base_x , _base_y,
          _base_x , _base_y - _stem_h,
          _base_x - 200, _base_y - (_stem_h + 100))

    noStroke();
    fill(r,g,b);
    ellipse(_base_x + 45, _base_y - _stem_h,70,50);
    ellipse(_base_x - 45, _base_y - _stem_h,70,50);
    ellipse(_base_x ,_base_y + 45 - _stem_h,50,70);
    ellipse(_base_x ,_base_y - 45 - _stem_h,50,70);
    
    //draw the center
    fill(255,100,0);
    ellipse(_base_x,_base_y - _stem_h,50,50); 
}






