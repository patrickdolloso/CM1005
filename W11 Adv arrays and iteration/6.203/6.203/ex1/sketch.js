

function setup() 
{
    createCanvas(800,800);
}

function draw() 
{

    background(0);
    fill(255,0,255);
    noStroke();

    for(var j = 0; j < 20; j ++)
    {
        for(var i = 0; i < 20; i++)
        {
//            var w = i + 1;
//            var h = j + 1;
            var r = dist(mouseX,mouseY,50 + i * 30,50 + j * 30)/dist(50,50,20*30,20*30);
            var offset = random(0,1) * r * 20;
            ellipse(
            50 + i * 30 + offset,
            50 + j * 30 + offset,
            r*30,r*30
            );
        }
    }

 
}
