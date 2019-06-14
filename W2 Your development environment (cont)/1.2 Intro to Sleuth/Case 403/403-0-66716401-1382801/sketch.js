/*

Officer: 1382801
CaseNum: 403-0-66716401-1382801

Case 403 - Surveillance - stage 1

We are on the lookout for the criminal mastermind known as Shiffman.
Our sources tell us that they are currently heading north on Huffman Street.
I need you to sound the alarm if he crosses Ada Avenue.

Shiffman's position is signified by the mouse. To sound the alarm - draw a red rectangle covering the entire map from Ada Avenue to the north.

Note: all road coordinates are measured from their center.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  rect()
  mouseX

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



    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);
}
