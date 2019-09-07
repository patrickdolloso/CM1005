/*
801
Stage 3: La Traviata

Officer: 1382801
CaseNum: 801-2-46612711-1382801

La Traviata is rolling into town and we’ll be there to nab a shot for our files of the Order of Ritchie. The informant is starting to feel the heat but was able to scribble down which seat they are sitting in ordered by row. You’ll have to untangle the array.

Each element is a seat on one row of the stalls going from row 1 to 10. Ritchie’s all have earrings so that might be helpful in your task. If we can identify this lot maybe they'll lead us to the Cooley gang.

You’ll have to use a single for loop to pick them out and set captured property of the operaBuffs to true.
Solve the case using only:
For (not nested)
operaBuffs[ ][ ]

*/

var crowdImg;
var spotlight;

var operaBuffs = [[{"x":50,"y":50,"captured":false},{"x":150,"y":50,"captured":false},{"x":250,"y":50,"captured":false},{"x":350,"y":50,"captured":false},{"x":450,"y":50,"captured":false},{"x":550,"y":50,"captured":false},{"x":650,"y":50,"captured":false},{"x":750,"y":50,"captured":false},{"x":850,"y":50,"captured":false},{"x":950,"y":50,"captured":false}],[{"x":50,"y":130,"captured":false},{"x":150,"y":130,"captured":false},{"x":250,"y":130,"captured":false},{"x":350,"y":130,"captured":false},{"x":450,"y":130,"captured":false},{"x":550,"y":130,"captured":false},{"x":650,"y":130,"captured":false},{"x":750,"y":130,"captured":false},{"x":850,"y":130,"captured":false},{"x":950,"y":130,"captured":false}],[{"x":50,"y":210,"captured":false},{"x":150,"y":210,"captured":false},{"x":250,"y":210,"captured":false},{"x":350,"y":210,"captured":false},{"x":450,"y":210,"captured":false},{"x":550,"y":210,"captured":false},{"x":650,"y":210,"captured":false},{"x":750,"y":210,"captured":false},{"x":850,"y":210,"captured":false},{"x":950,"y":210,"captured":false}],[{"x":50,"y":290,"captured":false},{"x":150,"y":290,"captured":false},{"x":250,"y":290,"captured":false},{"x":350,"y":290,"captured":false},{"x":450,"y":290,"captured":false},{"x":550,"y":290,"captured":false},{"x":650,"y":290,"captured":false},{"x":750,"y":290,"captured":false},{"x":850,"y":290,"captured":false},{"x":950,"y":290,"captured":false}],[{"x":50,"y":370,"captured":false},{"x":150,"y":370,"captured":false},{"x":250,"y":370,"captured":false},{"x":350,"y":370,"captured":false},{"x":450,"y":370,"captured":false},{"x":550,"y":370,"captured":false},{"x":650,"y":370,"captured":false},{"x":750,"y":370,"captured":false},{"x":850,"y":370,"captured":false},{"x":950,"y":370,"captured":false}],[{"x":50,"y":450,"captured":false},{"x":150,"y":450,"captured":false},{"x":250,"y":450,"captured":false},{"x":350,"y":450,"captured":false},{"x":450,"y":450,"captured":false},{"x":550,"y":450,"captured":false},{"x":650,"y":450,"captured":false},{"x":750,"y":450,"captured":false},{"x":850,"y":450,"captured":false},{"x":950,"y":450,"captured":false}],[{"x":50,"y":530,"captured":false},{"x":150,"y":530,"captured":false},{"x":250,"y":530,"captured":false},{"x":350,"y":530,"captured":false},{"x":450,"y":530,"captured":false},{"x":550,"y":530,"captured":false},{"x":650,"y":530,"captured":false},{"x":750,"y":530,"captured":false},{"x":850,"y":530,"captured":false},{"x":950,"y":530,"captured":false}],[{"x":50,"y":610,"captured":false},{"x":150,"y":610,"captured":false},{"x":250,"y":610,"captured":false},{"x":350,"y":610,"captured":false},{"x":450,"y":610,"captured":false},{"x":550,"y":610,"captured":false},{"x":650,"y":610,"captured":false},{"x":750,"y":610,"captured":false},{"x":850,"y":610,"captured":false},{"x":950,"y":610,"captured":false}],[{"x":50,"y":690,"captured":false},{"x":150,"y":690,"captured":false},{"x":250,"y":690,"captured":false},{"x":350,"y":690,"captured":false},{"x":450,"y":690,"captured":false},{"x":550,"y":690,"captured":false},{"x":650,"y":690,"captured":false},{"x":750,"y":690,"captured":false},{"x":850,"y":690,"captured":false},{"x":950,"y":690,"captured":false}],[{"x":50,"y":770,"captured":false},{"x":150,"y":770,"captured":false},{"x":250,"y":770,"captured":false},{"x":350,"y":770,"captured":false},{"x":450,"y":770,"captured":false},{"x":550,"y":770,"captured":false},{"x":650,"y":770,"captured":false},{"x":750,"y":770,"captured":false},{"x":850,"y":770,"captured":false},{"x":950,"y":770,"captured":false}]];
var secretSociety = [0,7,5,2,0,2,0,4,4,0];


function setup()
{
	createCanvas(1100, 1100);

	crowdImg = loadImage("crowd.png");
	spotlight = loadImage("spotlight.png");
}

function draw()
{
	image(crowdImg, 0, 0);
	////////////YOUR CODE GOES HERE////////////////////////

	for(var j=0; j < operaBuffs.length; j++)
	{
		k = secretSociety[j]
		operaBuffs[j][k].captured = true;
	};


	///////////DON'T CHANGE ANY CODE BELOW HERE////////////
	blendMode(BLEND);
	background(80);
	highlight();
	blendMode(DARKEST);
	image(crowdImg, 0, 0);
}

function highlight()
{
	fill(255, 0, 0, 100);

	for (var i = 0; i < operaBuffs.length; i++)
	{
		for (var j = 0; j < operaBuffs[i].length; j++)
		{
			if (operaBuffs[i][j].captured)
			{
				image(spotlight, operaBuffs[i][j].x, operaBuffs[i][j].y, 100 , 100 );
			}
		}
	}
}
