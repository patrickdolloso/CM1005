

function setup()
{
    createCanvas(500,500);

    textSize(40);
    
}

function draw()
{
    background(0);
    noStroke();
    fill(255);
    text(sayHello(), width/2, height/2);
}


function sayHello()
{
    return "hello world"; 
}