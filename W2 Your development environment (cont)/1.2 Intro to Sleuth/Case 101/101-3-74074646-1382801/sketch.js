/*

Officer: 1382801
CaseNum: 101-3-74074646-1382801

Case 101 - The Case of Lina Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Lina’s style. Now’s our chance to find out the root of all
of this. Lets see who is Lina meeting.

Identify Lina by drawing a yellow filled rectangle with a magenta outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar magenta filled
rectangle with a cyan outline around him.

Identify the man reading the newspaper by drawing a yellow filled rectangle
with a cyan outline around him.

Identify the woman with the dog by drawing a green filled rectangle with a
red outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use only 255 or 0 for r,g,b values. Set alpha to 100 for some opacity.
	stroke() Use only 255 or 0 for r,g,b values.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
    stroke(255, 0, 255);
    fill(255, 255, 0, 100);
    rect(151, 173, 130, 265);
    
    stroke(0, 255, 255);
    fill(255, 0, 255, 100);
    rect(888, 370, 220, 300);
    
    stroke(0, 255, 255);
    fill(255, 255, 0, 100);
    rect(1158, 266, 303, 600);
    
    stroke(255, 0, 0);
    fill(0, 255, 0, 100);
    rect(452, 140, 230, 498);

}
