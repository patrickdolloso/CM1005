/*

Officer: 1382801
CaseNum: 101-2-76433370-1382801

Case 101 - The Case of Lina Lovelace
Stage 3 - The Docks

You’ve followed Lina down to the docks. She sure frequents some classy places.
Okay let’s see who she’s meeting down there.

Identify Lina by drawing a red filled rectangle around her.
She’s the woman in the red dress of course.

Identify the heavy-set man in the fishing overalls by drawing a cyan filled
rectangle around him.

Identify the man in the striped top by drawing a green filled rectangle around
him.

The rectangles should cover the targets as accurately as possible without
including anything else.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use only 255 or 0 for r,g,b values. Set alpha to 100 for some opacity.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	noStroke();
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
    fill(255, 0, 0, 100);
    rect(904, 116, 140, 280);
    
    fill(0, 255, 255, 100);
    rect(40, 262, 385, 400);
    
    fill(0, 255, 0, 100);
    rect(464, 345, 160, 440);
   

}
