var starPositionsX;
var starPositionsY;
var starDirectionsX;
var starDirectionsY;

var numStars;
var maxDist;


function setup() 
{
    createCanvas(800,800);
    
    starPositionsX = [];
    starPositionsY = [];
    starDirectionsX = [];
    starDirectionsY = [];
    numStars = 1000;
    
    for(var i = 0; i < numStars; i++)
    {
        starPositionsX.push(width/2);
        starPositionsY.push(height/2);
        starDirectionsX.push(random(-1,1));
        starDirectionsY.push(random(-1,1));
    }
    
    maxDist = dist(width/2, height/2, width, height);
}

function draw() 
{

    background(0);
    fill(255);
    noStroke();
    
    for(var i = 0; i < starPositionsX.length; i++)
    {
        var d = dist(starPositionsX[i],starPositionsY[i], width/2,height/2);
        var r = d * 20/maxDist;
        ellipse(starPositionsX[i],starPositionsY[i], r,r);
        starPositionsX[i] += starDirectionsX[i] * max(0.01, r);
        starPositionsY[i] += starDirectionsY[i] * max(0.01, r);
        
        if(d > maxDist)
        {
            starPositionsX[i] = width/2;
            starPositionsY[i] = height/2;
        }
    }

 
}
