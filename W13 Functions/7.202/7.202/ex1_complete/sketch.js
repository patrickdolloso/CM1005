

function setup()
{
    createCanvas(500,500);
    background(0);
    noStroke();
    
    //start the recursion
    recurse(width/2, height/2, 100); 
    
    
    
}


function recurse(x,y,scale)
{
    if(scale < 5)
    {
        return;
    }
    
    fill(random(0,255),random(0,255),random(0,255),100);
    ellipse(x,y,scale,scale);

    recurse(x + scale/2, y + random(-scale/2,scale/2), scale * 0.75);
    recurse(x - scale/2, y + random(-scale/2,scale/2), scale * 0.75);

  
}