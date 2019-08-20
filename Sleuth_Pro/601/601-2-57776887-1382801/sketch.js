/*
Officer: 1382801
CaseNum: 601-2-57776887-1382801

Case 601 - Murdering Again - stage 3

Now murders are beginning to occur.
If we can place her near any of the recent crime scenes in the area we should be able narrow down her location.

In the setup function, use a for loop to graph all of the points on the map
where she was last seen using cyan stroke vertexes

In addition, we've assembled a list of recent crime scenes in the area.
Using another for loop, you should graph those points on the map using blue fill ellipses

This time we need to test for any correlations:
If she was within 41 pixels of any of the crimes then the details
should be appended to possible matches with the following format.

{ crime:{x: 0, y:0, victimName: "John Doe"}, suspect:{x: 0, y:0} }

Note that the possible matches are already being drawn.
Your job is to fill the array with the correct data.

For this mission you will need ONLY the following:

- for loop
- dist()
- if()
- stroke()
- beginShape(), endShape(), vertex()
- fill()
- ellipse(x, y, 10, 10)

*/

var countyMap;

var possibleMatches = [];

var suspect_positions_x = [639, 681, 712, 756, 715, 701, 753, 815, 795, 788, 781, 768, 750, 732, 714, 695, 693, 654, 624, 594, 555];
var suspect_positions_y = [288, 286, 293, 310, 368, 425, 436, 468, 506, 497, 486, 489, 500, 506, 514, 531, 552, 523, 500, 484, 474];


var crime_positions_x = [409, 443, 465, 709, 695, 652, 641, 119, 114, 90, 76, 615, 349, 456];
var crime_positions_y = [446, 419, 548, 552, 421, 268, 306, 344, 359, 490, 516, 741, 796, 770];
var victim_names = ["DEEDEE PHINNEY", "JULIANA ADVERSANE", "LAKESHA SYMMES", "GAYLA WILLMAR", "LESLEY MONKSFORD", "DARBY MYRLE", "MAJORIE JENI", "BRAD SILVEIRA", "KITTY THAXTER", "RANDEE CROME", "MALINDA GOODBURY", "TU DAVISWOOD", "ERMELINDA OORIN", "LOUISE ZETLAND"];


function preload()
{
	countyMap = loadImage("map.png")
}

function setup()
{
  createCanvas(countyMap.width, countyMap.height);

	image(countyMap, 0,0);

	//add your code below here

	stroke(0,255,255)
	beginShape()
	for(var j=0; j < suspect_positions_x.length; j++)
	{
		vertex(suspect_positions_x[j], suspect_positions_y[j])
	}
	endShape()

	fill(0,0,255)
	for(var k=0; k < crime_positions_x.length; k++)
	{
		ellipse(crime_positions_x[k], crime_positions_y[k], 10, 10)
	}

    for(i = 0; i < suspect_positions_x.length; i++)
    {
        for(j = 0; j < crime_positions_x.length; j++)
        {
            var d = dist(suspect_positions_x[i],suspect_positions_y[i],crime_positions_x[j],crime_positions_y[j]);

            if(d <= 62)
            {
                possibleMatches.push(
                {crime: 
                    {
                    x: crime_positions_x[j], 
                    y: crime_positions_y[j], 
                    victimName: victim_names[j]
                    },
                    suspect: 
                    {x: suspect_positions_x[i], 
                     y: suspect_positions_y[i]
                    }
                });
            }
		} 
		
	}

	// code to draw the matches ( if any)
	for(let i = 0 ; i < possibleMatches.length ; i++)
	{
		stroke(127);
		strokeWeight(3);
		line(possibleMatches[i].crime.x, possibleMatches[i].crime.y, possibleMatches[i].suspect.x, possibleMatches[i].suspect.y);

		noStroke();
		fill(127);
		text(possibleMatches[i].crime.victimName, possibleMatches[i].crime.x + 15, possibleMatches[i].crime.y + 15);
	}
}

//We are not using the draw function this time
