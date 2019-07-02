

function setup() 
{
    createCanvas(800,800);
}

function draw() 
{

    background(0);


    for(var j = 0; j < 10; j ++)
    {
        for(var i = 0; i < 10; i++)
        {
            fill(255,0,255);
            ellipse(50 + i * 50, 50 + j * 50,50,50);
            fill(255);
            text("i="+i, 40 + i * 50, 60 + j * 50);
            text("j="+j, 40 + i * 50, 40 + j * 50);
        }
    }

 
}
