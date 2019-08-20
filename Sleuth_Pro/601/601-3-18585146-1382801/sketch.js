/*
Officer: 1382801
CaseNum: 601-3-18585146-1382801

Case 601 - Narrowing in - stage 4

Casey Fry is on a killing spree and we still haven’t caught her.
We need a more sophisticated approach.

In the setup function, use a for loop to graph all of the points on the map
where she was last seen using red stroke vertexes

In addition, we've assembled a list of recent crime scenes in the area.
Using another for loop, you should graph those points on the map using magenta fill ellipses

This time we need to test for both distance and time:
If she was within 92 pixels of any of the crimes AND within 1 days of their occurrence then the details
should be appended to possible matches with the following format.

{ crime:{x: 0, y:0, victimName: "John Doe"}, suspect:{x: 0, y:0} }

Note that the possible matches are already being drawn.
Your job is to fill the array with the correct data.

For this mission you will need ONLY the following:

- for loop
- if()
- stroke()
- beginShape(), endShape(), vertex()
- fill()
- ellipse(x, y, 10, 10)

*/

var countyMap;

var possibleMatches = [];

var suspect_coordinates_x = [518, 486, 475, 376, 316, 265, 253, 240, 220, 178, 199, 146, 115, 67, 39, 68];
var suspect_coordinates_y = [471, 508, 566, 554, 559, 614, 609, 604, 597, 600, 604, 582, 551, 495, 493, 461];
var suspect_dates = [12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 17, 18, 20, 21, 22, 24];

var crime_coordinates_x = [438, 408, 408, 642, 623, 95, 75, 269, 389, 484, 496, 546, 538, 702, 817];
var crime_coordinates_y = [420, 451, 377, 289, 279, 488, 522, 597, 554, 549, 484, 463, 359, 412, 474];
var victim_names = ["JULIANA ADVERSANE", "JACQUELINE DURANTS", "KITTY THAXTER", "NELSON TINTLE", "NICOLE ASHELY", "DRUSILLA WARMAN", "SUMMER CASIMERE", "HANG NIEMELA", "JESSIA PORTOS", "TAMICA MAUBERT", "MALINDA GOODBURY", "LARRAINE PEGORD", "DEEDEE PHINNEY", "ERMELINDA OORIN", "MAJORIE JENI"];
var crime_dates = [11, 11, 13, 16, 16, 17, 18, 26, 28, 2, 9, 14, 12, 17, 18];


function preload()
{
	countyMap = loadImage("map.png")
}

function setup()
{
  createCanvas(countyMap.width, countyMap.height);

	image(countyMap, 0,0);

	//add your code below here
	stroke(255,0,0)
	beginShape()
	for(var i=0; i < suspect_coordinates_x.length; i++)
	{
		vertex(suspect_coordinates_x[i], suspect_coordinates_y[i])
	}
	endShape()

	fill(255, 0, 255)
	for(var j=0; j < crime_coordinates_x.length; j++)
	{
		ellipse(crime_coordinates_x[j], crime_coordinates_y[j], 10, 10)
	}

    for(i = 0; i < suspect_coordinates_x.length; i++)
    {
        for(j = 0; j < crime_coordinates_x.length; j++)
        {
            var d = dist(suspect_coordinates_x[i],suspect_coordinates_y[i],crime_coordinates_x[j],crime_coordinates_y[j]);

            if(d <= 62)
            {
                possibleMatches.push(
                {crime: 
                    {
                    x: crime_coordinates_x[j], 
                    y: crime_coordinates_y[j], 
                    victimName: victim_names[j]
                    },
                    suspect: 
                    {x: suspect_coordinates_x[i], 
                     y: suspect_coordinates_y[i]
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
