var starPositions;
var starDirections;

var numStars;
var maxDist;


function setup() 
{
    createCanvas(800,800);
    
    starPositions = [];
    starDirections = [];
    
    numStars = 1000;
    maxDist = dist(width/2, height/2, width, height);

    for(var i = 0; i < numStars; i++)
    {
        starPositions.push(createVector(width/2,height/2));
        starDirections.push(createVector(random(-1,1), random(-1,1)));
        starDirections[i].normalize();
        var r = pow(random(0.01,1),10) * maxDist;
        var v = p5.Vector.mult(starDirections[i],r);
        starPositions[i].add(v);
        var d = dist(starPositions[i].x,starPositions[i].y, width/2,height/2);
    }
    

}

function draw() 
{

    background(0);
    fill(255);
    noStroke();
    
    for(var i = 0; i < starPositions.length; i++)
    {
        var d = dist(starPositions[i].x,starPositions[i].y, width/2,height/2);
        var r = d * 20/maxDist;
        r = max(0.01, r);
        ellipse(starPositions[i].x,starPositions[i].y, r,r);
        var v = p5.Vector.mult(starDirections[i],r);
        starPositions[i].add(v);
        
        if(d > maxDist + random(0,500))
        {
            starPositions[i].set(width/2, height/2);
        }
    }

 
}
