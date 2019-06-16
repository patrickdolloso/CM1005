/*

Officer: 1382801
CaseNum: 403-2-54087017-1382801

Case 403 - Cornered - stage 3


We have Shiffman cornered at The Plaza Hotel and more help is on the way.
Until our backup arrives the orders are to make sure he stays inside The Plaza Hotel

Your job is to indicate that Shiffman (signified by the mouse) is indeed within the North - East - South - West bounds of The Plaza Hotel.
Draw a yellow rectangle covering The Plaza Hotel for as long as Shiffman is in it.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  rect()
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

    if(mouseX >= 2087 && mouseX <= 2447 && mouseY >= 332 && mouseY <= 487) {
      fill(255,255,0);
      rect(2087,332,360,155);
    }


    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);
}
