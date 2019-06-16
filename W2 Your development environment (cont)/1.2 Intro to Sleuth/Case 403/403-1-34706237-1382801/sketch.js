/*

Officer: 1382801
CaseNum: 403-1-34706237-1382801

Case 403 - Stake out - stage 2

I've gotten hold of a hot tip that Shiffman is hiding out at Stallman's Bar.
We've alerted the local precinct but they cannot act unless they know for certain that he's within 136 meters (pixels) of the spot.

Whenever Shiffman (signified by the mouse) is within 136 pixels of Stallman's Bar - draw a cyan ellipse with a radius of 136 around it.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  ellipse()
  dist()
  mouseX
  mouseY

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

    if((dist(1457,416,mouseX,mouseY)) < 136) {
      fill(0,255,255);
      ellipse(1457,416,272,272);
    }

    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);
}
