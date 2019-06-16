/*

Officer: 1382801
CaseNum: 403-3-23199494-1382801

Case 403 - Captured - stage 4

A coordinated action is under way to arrest Shiffman. Police are currently in pursuit on Mullenweg Street.
In order to catch him we must be able to alert all forces of his whereabouts according to the following rules:

- if Shiffman is within 123 meters from Courthouse then alert local police by drawing a green circle around it with a radius of 123 pixels.
- if Shiffman is in City Narrows then the neighbourhood watch must be notified by drawing a yellow rectangle around it.
- if Shiffman is in neither position, a global alert must be issued by drawing a magenta rectangle covering the area between Gates Avenue, Turing Place, Mullenweg Street and Meyers Way.

Shiffman's position is signified by the mouse.

Note: all road coordinates are measured from their center.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  rect()
  ellipse()
  dist()

*/

var img;

function preload()
{
	img = loadImage('map.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
}

function draw()
{
    // draw the image
    image(img,0,0);

    //Write your code below here ...


    // - if Shiffman is within 123 meters from Courthouse then alert local police by drawing a green circle around it with a radius of 123 pixels.

    if(dist(1448,551,mouseX,mouseY) <= 123) {
      fill(0,255,0);
      ellipse(1448,551,123*2,123*2);
    }

    // - if Shiffman is in City Narrows then the neighbourhood watch must be notified by drawing a yellow rectangle around it.

    else if(mouseX >= 2449 && mouseX <= 2449 + 149 && mouseY >= 185 && mouseY <= 185 + 138) {
      fill(255,255,0);
      rect(2449,185,149,138);
    }    

    // - if Shiffman is in neither position, a global alert must be issued by drawing a magenta rectangle covering the area between Gates Avenue, Turing Place, Mullenweg Street and Meyers Way.

    else {
      fill(255,0,255);
      rect(503,842,229,248);
    }

    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);
}
