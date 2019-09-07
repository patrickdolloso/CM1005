/*

Officer: 1382801
CaseNum: 702-1-24459982-1382801

Case 702 - The case of Vanishing Vannevar
Stage 2 - Downtown traffic

“All units: Vannevar is heading into the downtown area. Heavy traffic ahead. Drive safely.”
Complete the helper functions below to drive the car and avoid other vehicles. Keep on it kid.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of Investigator_Vehicle and the cars in
carObjectData to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function driveVehicle()
{
	/*
	This function should do the following: 
	 - increment Investigator_Vehicle's Distance_Travelled property by its Gas_Amount property 
	 - add a random amount between -0.1 and 0.1 to Investigator_Vehicle's EngineShudder_Amount property
	 - use the constrain function to constrain Investigator_Vehicle's EngineShudder_Amount property to values between 0.06 and 0.75
	 - call the cycleCarEngine function passing Investigator_Vehicle as an argument
	*/

	Investigator_Vehicle.Distance_Travelled += Investigator_Vehicle.Gas_Amount;

	Investigator_Vehicle.EngineShudder_Amount += random(-0.1,0.1);

	Investigator_Vehicle.EngineShudder_Amount = constrain(Investigator_Vehicle.EngineShudder_Amount, 0.06, 0.75);

	cycleCarEngine(Investigator_Vehicle);

}


function changeLanes(target_vehicle)
{
	/*
	This function should do the following: 
	 - move target_vehicle from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use lanePositionA and lanePositionB to effect the change.
	 - finally you should return target_vehicle at the end of the function.
	 hint: You will need to modify the Position_X property of target_vehicle.
	*/
}


function searchAhead( carA, carB )
{
	/*
	This function should do the following: 
	 - determine if carA is in the same lane and less than 200px behind carB.
	 - do this by comparing the two cars' Distance_Travelled properties
	 - if these requirements are met then return the Licence_Plate property for carB. Otherwise return false.
	*/

	if(Distance_Travelled)

	return changeLanes;


}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var Investigator_Vehicle;

var roadWidth;
var roadLeftEdge;
var lanePositionA;
var lanePositionB;
var carImages = {};

var carObjectData = [
{ Position_X: 300, Position_Y: 0, Distance_Travelled: -200, Car_Category: 'redCar', Licence_Plate: 'TAU9K7', Gas_Amount: 2, exhaust: [  ]} , { Position_X: 300, Position_Y: 0, Distance_Travelled: 200, Car_Category: 'greenCar', Licence_Plate: 'BRXNUN', Gas_Amount: 2, exhaust: [  ]} , { Position_X: 500, Position_Y: 0, Distance_Travelled: 600, Car_Category: 'whiteCar', Licence_Plate: '1N1G0C', Gas_Amount: 2, exhaust: [  ]} , { Position_X: 500, Position_Y: 0, Distance_Travelled: 1000, Car_Category: 'blueCar', Licence_Plate: 'F2S9C9', Gas_Amount: 2, exhaust: [  ]} , { Position_X: 300, Position_Y: 0, Distance_Travelled: 1400, Car_Category: 'redCar', Licence_Plate: 'W44YLX', Gas_Amount: 2, exhaust: [  ]} , { Position_X: 500, Position_Y: 0, Distance_Travelled: 1800, Car_Category: 'redCar', Licence_Plate: 'WHAKPI', Gas_Amount: 2, exhaust: [  ]} , { Position_X: 300, Position_Y: 0, Distance_Travelled: 2200, Car_Category: 'greenCar', Licence_Plate: '1JHQNV', Gas_Amount: 2, exhaust: [  ]} , { Position_X: 500, Position_Y: 0, Distance_Travelled: 2600, Car_Category: 'blueCar', Licence_Plate: '4DMUVZ', Gas_Amount: 2, exhaust: [  ]} , { Position_X: 300, Position_Y: 0, Distance_Travelled: 3000, Car_Category: 'redCar', Licence_Plate: 'QXSY87', Gas_Amount: 2, exhaust: [  ]} , { Position_X: 500, Position_Y: 0, Distance_Travelled: 3400, Car_Category: 'redCar', Licence_Plate: 'YAUG84', Gas_Amount: 2, exhaust: [  ]} , { Position_X: 300, Position_Y: 0, Distance_Travelled: 3800, Car_Category: 'whiteCar', Licence_Plate: 'FDMAJN', Gas_Amount: 2, exhaust: [  ]} , { Position_X: 300, Position_Y: 0, Distance_Travelled: 4200, Car_Category: 'greenCar', Licence_Plate: 'CZLO4V', Gas_Amount: 2, exhaust: [  ]} , { Position_X: 300, Position_Y: 0, Distance_Travelled: 4600, Car_Category: 'greenCar', Licence_Plate: 'KTC8B8', Gas_Amount: 2, exhaust: [  ]} , { Position_X: 500, Position_Y: 0, Distance_Travelled: 5000, Car_Category: 'greenCar', Licence_Plate: '98G2GJ', Gas_Amount: 2, exhaust: [  ]} , { Position_X: 300, Position_Y: 0, Distance_Travelled: 5400, Car_Category: 'blueCar', Licence_Plate: '4I46E7', Gas_Amount: 2, exhaust: [  ]} , { Position_X: 300, Position_Y: 0, Distance_Travelled: 5800, Car_Category: 'redCar', Licence_Plate: '6LH08J', Gas_Amount: 2, exhaust: [  ]} , { Position_X: 500, Position_Y: 0, Distance_Travelled: 6200, Car_Category: 'greenCar', Licence_Plate: '42E1AZ', Gas_Amount: 2, exhaust: [  ]} , { Position_X: 300, Position_Y: 0, Distance_Travelled: 6600, Car_Category: 'blueCar', Licence_Plate: '6Q9DKK', Gas_Amount: 2, exhaust: [  ]} , { Position_X: 500, Position_Y: 0, Distance_Travelled: 7000, Car_Category: 'redCar', Licence_Plate: 'RW4W25', Gas_Amount: 2, exhaust: [  ]} , { Position_X: 300, Position_Y: 0, Distance_Travelled: 7400, Car_Category: 'greenCar', Licence_Plate: 'C3VFX4', Gas_Amount: 2, exhaust: [  ]} 
];



function preload()
{
	var carTypes = [
		"detective",
		"redCar",
		"greenCar",
		"blueCar",
		"whiteCar",
	];

	for(var i = 0; i < carTypes.length; i++)
	{
		carImages[carTypes[i]] = loadImage("cars/" + carTypes[i] + ".png");
	}
}

function setup()
{
	createCanvas(800,800);

	roadWidth = 400;
	roadLeftEdge = 200;
	lanePositionA = 300;
	lanePositionB = 500;

	Investigator_Vehicle = 
	{
		Position_X: roadLeftEdge + roadWidth/4,
		Position_Y: 550,
		Distance_Travelled: 0,
		Gas_Amount: 3,
		EngineShudder_Amount: 0,
		Car_Category: 'detective',
		Licence_Plate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);



	drawRoad();
	drawCars();

	////////////////////// HANDLE DETECTIVE /////////////////////////


	driveVehicle();
	for(var i = 0; i < carObjectData.length; i++)
	{
var b2b = searchAhead(Investigator_Vehicle, carObjectData[i]);
		if(b2b)changeLanes(Investigator_Vehicle);
	}


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < carObjectData.length; i++)
	{
		carObjectData[i].Distance_Travelled += carObjectData[i].Gas_Amount;
		carObjectData[i].Position_Y = Investigator_Vehicle.Position_Y - carObjectData[i].Distance_Travelled + Investigator_Vehicle.Distance_Travelled;
	}

}

/////////////////////////DRAWING FUNCTIONS////////////////////////

function drawRoad()
{
	stroke(100);
	fill(50);
	rect(roadLeftEdge,0,roadWidth,800);
	stroke(255);

	for(var i = -1; i < 20; i++)
	{
		line(
		roadLeftEdge + roadWidth/2 , i * 100 + (Investigator_Vehicle.Distance_Travelled%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (Investigator_Vehicle.Distance_Travelled%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(Investigator_Vehicle);
	image
	(
		carImages["detective"],
		Investigator_Vehicle.Position_X - carImages["detective"].width/2 + random(-Investigator_Vehicle.EngineShudder_Amount, Investigator_Vehicle.EngineShudder_Amount),
		Investigator_Vehicle.Position_Y + random(-Investigator_Vehicle.EngineShudder_Amount, Investigator_Vehicle.EngineShudder_Amount)
	);

	//draw all other cars

	for(var i = 0; i < carObjectData.length; i ++)
	{
		if(carObjectData[i].Position_Y < height && carObjectData[i].Position_Y > -height/2)
		{
			image(
			carImages[carObjectData[i].Car_Category],
			carObjectData[i].Position_X - carImages[carObjectData[i].Car_Category].width/2,
			carObjectData[i].Position_Y
			);
			cycleCarEngine(carObjectData[i]);

			drawExhaust(carObjectData[i]);
		}
	}

}

function cycleCarEngine(car)
{

	car.exhaust.push({size: 2, x: car.Position_X, y: car.Position_Y + carImages[car.Car_Category].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.Gas_Amount/3);
		if(car.Car_Category != "detective")car.exhaust[i].y += (Investigator_Vehicle.Gas_Amount - car.Gas_Amount);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height || car.exhaust[i].y < 0)
		{
			car.exhaust.splice(i,1);
		}
	}
}


function drawExhaust(car)
{
		noStroke();
		for(var i = 0; i < car.exhaust.length; i++)
		{
				var alpha = map(car.exhaust[i].size, 0, 40, 50,0);
				fill(125,alpha);
				ellipse(car.exhaust[i].x + 20, car.exhaust[i].y , car.exhaust[i].size);

		}
}
