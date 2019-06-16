/*

Officer: 1382801
CaseNum: 401-2-72580200-1382801

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and
has laced the cream cheese with an ingenious but vicious toxin. This one is quite
deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When NerveGas goes above 0.33, whilst at the same time, snake_venom goes above 0.7 or amanitaMushrooms dips below 0.52, decrease methylene by 0.05
	- If insecticide goes above 0.26 or strychnine goes above 0.25, try increasing methylene by 0.04
	- If strychnine goes above 0.28 or snake_venom goes above 0.49, reduce plasma by 0.04
	- If lead dips below 0.69 or amanitaMushrooms goes above 0.55, try increasing plasma by 0.05
	- When amanitaMushrooms dips below 0.35 or lead goes above 0.66, whilst at the same time, snake_venom goes above 0.33, decrease sodiumBicarbonate by 0.02
	- When strychnine goes above 0.41 and insecticide goes above 0.73, increment sodiumBicarbonate by 0.03
	- If NerveGas goes above 0.32, whilst at the same time, amanitaMushrooms goes above 0.6 or strychnine dips below 0.69, decrement insulin by 0.05
	- When lead goes above 0.56 or insecticide dips below 0.61, whilst at the same time, snake_venom goes above 0.47, raise insulin by 0.02


Your conditional statements should:

consider the following poisons:

	- insecticide
	- snake_venom
	- amanitaMushrooms
	- strychnine
	- NerveGas
	- lead


and modify the following antidotes:

	- methylene
	- plasma
	- sodiumBicarbonate
	- insulin


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var insecticide;
var snake_venom;
var amanitaMushrooms;
var strychnine;
var NerveGas;
var lead;


//Declare the antidote variables
var methylene;
var plasma;
var sodiumBicarbonate;
var insulin;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	insecticide = 0.5;
	snake_venom = 0.5;
	amanitaMushrooms = 0.5;
	strychnine = 0.5;
	NerveGas = 0.5;
	lead = 0.5;
	methylene = 0.5;
	plasma = 0.5;
	sodiumBicarbonate = 0.5;
	insulin = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 6; i++)
	{
		graphs.push([]);
		for(var j = 0; j < 512; j++)
		{
			graphs[i].push(0.5);
		}
	}

}

function draw()
{

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...

	// - When NerveGas goes above 0.33, whilst at the same time, snake_venom goes above 0.7 or amanitaMushrooms dips below 0.52, decrease methylene by 0.05
	if((NerveGas > 0.33 && snake_venom > 0.7) || amanitaMushrooms < 0.52) {
		methylene -= 0.05;
	}
	
	// - If insecticide goes above 0.26 or strychnine goes above 0.25, try increasing methylene by 0.04

	if(insecticide > 0.26 || strychnine > 0.25) {
		methylene += 0.04;
	}

	// - If strychnine goes above 0.28 or snake_venom goes above 0.49, reduce plasma by 0.04

	if(strychnine > 0.28 || snake_venom > 0.49) {
		plasma -=0.04;
	}
	// - If lead dips below 0.69 or amanitaMushrooms goes above 0.55, try increasing plasma by 0.05

	if(lead < 0.69 || amanitaMushrooms > 0.55) {
		plasma += 0.05;
	}

	// - When amanitaMushrooms dips below 0.35 or lead goes above 0.66, whilst at the same time, snake_venom goes above 0.33, decrease sodiumBicarbonate by 0.02

	if(amanitaMushrooms < 0.35 || (lead > 0.66 && snake_venom > 0.33)) {
		sodiumBicarbonate -= 0.02;
	}

	// - When strychnine goes above 0.41 and insecticide goes above 0.73, increment sodiumBicarbonate by 0.03

	if(strychnine > 0.41 && insecticide > 0.73) {
		sodiumBicarbonate += 0.03;
	}

	// - If NerveGas goes above 0.32, whilst at the same time, amanitaMushrooms goes above 0.6 or strychnine dips below 0.69, decrement insulin by 0.05

	if((NerveGas > 0.32 && amanitaMushrooms > 0.6)||strychnine < 0.69) {
		insulin -= 0.05;
	}

	// - When lead goes above 0.56 or insecticide dips below 0.61, whilst at the same time, snake_venom goes above 0.47, raise insulin by 0.02

	if(lead > 0.56 || (insecticide < 0.61 && snake_venom > 0.47)) {
		insulin += 0.02;
	}



	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	insecticide = nextValue(graphs[0],insecticide);
	snake_venom = nextValue(graphs[1],snake_venom);
	amanitaMushrooms = nextValue(graphs[2],amanitaMushrooms);
	strychnine = nextValue(graphs[3],strychnine);
	NerveGas = nextValue(graphs[4],NerveGas);
	lead = nextValue(graphs[5],lead);


	methylene = constrain(methylene, 0, 1);
	plasma = constrain(plasma, 0, 1);
	sodiumBicarbonate = constrain(sodiumBicarbonate, 0, 1);
	insulin = constrain(insulin, 0, 1);


	///////// DO NOT CHANGE THE CODE BELOW ///////////

	//drawing code

	// set background
	background(0);
	noFill();

	//draw the graphs for the vitals
	var colors = [
	color(255, 0, 0),
	color(0, 255, 0),
	color(0, 0, 255),
	color(255, 0, 255),
	color(255, 255, 0),
	color(0, 255, 255)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('insecticide: ' + nf(insecticide,1,2), 20,20);
	fill(colors[1]);
	text('snake_venom: ' + nf(snake_venom,1,2), 20,40);
	fill(colors[2]);
	text('amanitaMushrooms: ' + nf(amanitaMushrooms,1,2), 20,60);
	fill(colors[3]);
	text('strychnine: ' + nf(strychnine,1,2), 20,80);
	fill(colors[4]);
	text('NerveGas: ' + nf(NerveGas,1,2), 20,100);
	fill(colors[5]);
	text('lead: ' + nf(lead,1,2), 20,120);


	//draw the antidotes bar chart
	drawBar(methylene,50,'methylene');
	drawBar(plasma,200,'plasma');
	drawBar(sodiumBicarbonate,350,'sodiumBicarbonate');
	drawBar(insulin,500,'insulin');


}

function nextValue(graph, val)
{
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03,0.03);

	val += delta;
	if(val > 1 || val < 0)
	{
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph)
{
	//draws an array as a graph
	beginShape();
	for(var i = 0; i < graph.length; i++)
	{
			vertex(width * i/512, height * 0.5 - graph[i]* height/3)
	}
	endShape();
}


function drawBar(val, x, name)
{
	//draws the bars for bar chart
    noStroke();
    fill(0,100,100);
	var mh = height * 0.4 - 50;
	rect(x,(height - 50) - val*mh, 100, val*mh);
    fill(255);
	text(name + ": " + val, x, height - 20);
}
