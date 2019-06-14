/*

Officer: 1382801
CaseNum: 401-1-47740196-1382801

Case 401 - The Case of Norbert's Weiner Stand
Stage 2 - Toxic Burrito

Norbert is at it again. This time he’s set up a burrito stall and is lacing burritos
with his foul toxin. The chaos is spreading. People are dropping like flies and burrito
sales have fallen through the floor. To make matters worse it seems Norbert has cottoned
on to our methods and has upped the complexity of his poison. You’ll find the antidote
harder to develop this time. So kid, head down to the lab and get working.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When arsenic goes above 0.54 or mercury goes above 0.41, reduce paracetamol by 0.01
	- When strychnine dips below 0.5, increment paracetamol by 0.02
	- If arsenic dips below 0.35 and strychnine goes above 0.54, decrement Calcium_Gluconate by 0.05
	- If mercury goes above 0.63 and lead dips below 0.42, increment Calcium_Gluconate by 0.02
	- If mercury dips below 0.36, reduce HydrochloricAcid by 0.02
	- If strychnine goes above 0.51 or arsenic goes above 0.25, raise HydrochloricAcid by 0.05
	- When mercury dips below 0.58, try decreasing chalk by 0.05
	- If arsenic goes above 0.66 and lead goes above 0.64, raise chalk by 0.04


Your conditional statements should:

consider the following poisons:

	- arsenic
	- mercury
	- strychnine
	- lead


and modify the following antidotes:

	- paracetamol
	- Calcium_Gluconate
	- HydrochloricAcid
	- chalk


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var arsenic;
var mercury;
var strychnine;
var lead;


//Declare the antidote variables
var paracetamol;
var Calcium_Gluconate;
var HydrochloricAcid;
var chalk;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	arsenic = 0.5;
	mercury = 0.5;
	strychnine = 0.5;
	lead = 0.5;
	paracetamol = 0.5;
	Calcium_Gluconate = 0.5;
	HydrochloricAcid = 0.5;
	chalk = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 4; i++)
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

	// - When arsenic goes above 0.54 or mercury goes above 0.41, reduce paracetamol by 0.01

	if(arsenic > 0.54 || mercury > 0.41) {
		paracetamol -= 0.01;
	}	
	// - When strychnine dips below 0.5, increment paracetamol by 0.02

	if(strychnine < 0.5) {
		paracetamol += 0.02;
	}

	// - If arsenic dips below 0.35 and strychnine goes above 0.54, decrement Calcium_Gluconate by 0.05

	if(arsenic < 0.35 && strychnine > 0.54) {
		Calcium_Gluconate -= 0.05;
	}

	// - If mercury goes above 0.63 and lead dips below 0.42, increment Calcium_Gluconate by 0.02

	if(mercury > 0.63 && lead < 0.42){
		Calcium_Gluconate += 0.02;
	}

	// - If mercury dips below 0.36, reduce HydrochloricAcid by 0.02

	if(mercury < 0.36) {
		HydrochloricAcid -= 0.02;
	}

	// - If strychnine goes above 0.51 or arsenic goes above 0.25, raise HydrochloricAcid by 0.05

	if(strychnine > 0.51 || arsenic > 0.25) {
		HydrochloricAcid += 0.05;
	}

	// - When mercury dips below 0.58, try decreasing chalk by 0.05

	if(mercury < 0.58) {
		chalk -= 0.05;
	}

	// - If arsenic goes above 0.66 and lead goes above 0.64, raise chalk by 0.04

	if(arsenic > 0.66 && lead > 0.64) {
		chalk += 0.04;
	}



	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	arsenic = nextValue(graphs[0],arsenic);
	mercury = nextValue(graphs[1],mercury);
	strychnine = nextValue(graphs[2],strychnine);
	lead = nextValue(graphs[3],lead);


	paracetamol = constrain(paracetamol, 0, 1);
	Calcium_Gluconate = constrain(Calcium_Gluconate, 0, 1);
	HydrochloricAcid = constrain(HydrochloricAcid, 0, 1);
	chalk = constrain(chalk, 0, 1);


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
	text('arsenic: ' + nf(arsenic,1,2), 20,20);
	fill(colors[1]);
	text('mercury: ' + nf(mercury,1,2), 20,40);
	fill(colors[2]);
	text('strychnine: ' + nf(strychnine,1,2), 20,60);
	fill(colors[3]);
	text('lead: ' + nf(lead,1,2), 20,80);


	//draw the antidotes bar chart
	drawBar(paracetamol,50,'paracetamol');
	drawBar(Calcium_Gluconate,200,'Calcium_Gluconate');
	drawBar(HydrochloricAcid,350,'HydrochloricAcid');
	drawBar(chalk,500,'chalk');


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
