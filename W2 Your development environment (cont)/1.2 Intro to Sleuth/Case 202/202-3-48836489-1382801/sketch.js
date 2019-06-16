/*

Officer: 1382801
CaseNum: 202-3-48836489-1382801

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce yellow filled text with magenta outline in Diggity font.
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(506,446);
	textSize(26);
}

function draw()
{
	background(255);

	fill(255,165,0);
	stroke(0,0,0);
	textFont(RonsFont);
	// text("can", 292,135);
	fill(255,255,0);
	stroke(255,0,0);
	textFont(Ballpointprint);
	// text("away", 421,165);
	fill(255,165,0);
	stroke(0,0,255);
	// text("money", 40,222);
	fill(255,192,203);
	// text("should", 327,165);
	// text("nce.", 361,104);
	fill(255,165,0);
	textFont(RonsFont);
	// text("are", 10,135);
	fill(255,255,0);
	// text("our", 406,222);
	push();
	fill(0,255,255);
	textFont(Ballpointprint);
	// text("?", 132,104);
	pop();
	stroke(0,0,0);
	textFont(Diggity);
	// text("safe", 115,253);
	push();
	fill(0,255,255);
	stroke(255,0,255);
	textFont(Melissa);
	// text("short", 428,195);
	pop();
	textFont(Ballpointprint);
	// text("I", 261,135);
	// text("so,", 181,222);
	fill(255,192,203);
	// text("?", 163,253);
	// text("take", 79,104);
	fill(0,255,255);
	// text("and", 142,195);
	// text("sort", 187,195);
	// text("so", 57,135);
	fill(255,255,0);
	stroke(0,255,0);
	textFont(RonsFont);
	// text("I'm", 227,78);
//	text("Are", 339,195);
	stroke(255,0,255);
	textFont(Diggity);
	text("avoid", 96,78);
	text("cash", 338,222);
	fill(255,165,0);
	stroke(255,0,0);
	textFont(Ballpointprint);
	// text("I", 19,104);
	fill(255,255,0);
	textFont(Diggity);
	// text("no", 336,135);
	fill(255,165,0);
	textFont(Melissa);
	// text("ignore", 437,135);
	push();
	stroke(0,255,0);
	textFont(Ballpointprint);
	// text("can", 238,222);
	pop();
	stroke(0,0,0);
	textFont(RonsFont);
	// text("we", 288,165);
	fill(255,192,203);
	stroke(255,0,0);
	// text("break", 74,195);
	textFont(Ballpointprint);
	// text("not", 275,78);
	fill(0,255,255);
	textFont(Diggity);
	// text("more", 422,78);
	fill(255,192,203);
	stroke(0,0,255);
	// text("Is", 385,222);
	stroke(0,255,0);
	textFont(RonsFont);
	// text("send", 278,222);
	fill(255,255,0);
	stroke(255,0,255);
	textFont(Ballpointprint);
	// text("If", 137,222);
	// text("me", 167,78);
	fill(255,192,203);
	stroke(255,0,0);
	textFont(Melissa);
	// text("can", 50,104);
	// text("sure", 313,78);
	// text("much", 382,78);
	fill(255,255,0);
	stroke(0,255,0);
	textFont(Diggity);
	// text("continual", 72,165);
	fill(255,165,0);
	stroke(0,0,255);
	textFont(Melissa);
	// text("delays.", 151,165);
	// text("Daisy", 11,357);
	fill(255,255,0);
	stroke(255,0,255);
	textFont(Diggity);
	text("go", 393,165);
	text("for", 15,195);
	text("guard", 87,135);
	push();
	textFont(RonsFont);
	text("lon", 364,135);
	pop();
	text("you", 57,78);
	text("the", 292,104);
	stroke(0,255,0);
	textFont(Melissa);
	// text("My", 14,26);
	push();
	fill(255,192,203);
	stroke(255,0,255);
	textFont(Diggity);
	// text("relationship", 16,253);
	pop();
	textFont(Ballpointprint);
	// text("out.", 298,195);
	fill(0,255,255);
	stroke(255,0,255);
	// text("sile", 330,104);
	fill(255,192,203);
	textFont(RonsFont);
	// text("these", 11,165);
	fill(255,255,0);
	stroke(255,0,0);
	textFont(Melissa);
	// text("all", 278,195);
	fill(0,255,255);
	stroke(255,0,255);
	textFont(Diggity);
	// text("ing", 137,78);
	fill(255,255,0);
	stroke(0,255,0);
	// text("?", 207,78);
	stroke(255,0,0);
	textFont(RonsFont);
	// text("of", 9,222);
	push();
	fill(0,255,255);
	stroke(0,0,255);
	textFont(Melissa);
	// text("how", 349,78);
	pop();
	fill(255,192,203);
	stroke(0,0,0);
	textFont(Diggity);
	// text("secrets,", 217,104);
	fill(255,165,0);
	stroke(0,255,0);
	textFont(RonsFont);
	// text("Bob,", 125,26);
	stroke(0,0,255);
	textFont(Diggity);
	// text("yours,", 100,305);
	stroke(0,0,0);
	textFont(Ballpointprint);
	// text("The", 161,104);
	push();
	fill(255,192,203);
	stroke(0,255,0);
	// text("you", 387,195);
	pop();
	textFont(RonsFont);
	// text("You", 409,104);
	// text("darli", 42,26);
	fill(255,192,203);
	stroke(0,255,0);
	textFont(Ballpointprint);
	// text("?", 108,222);
	push();
	fill(255,165,0);
	stroke(0,0,0);
	textFont(RonsFont);
	// text("Perhaps", 204,165);
	pop();
	fill(0,255,255);
	textFont(RonsFont);
	// text("x", 55,357);
	stroke(255,0,0);
	// text("a", 54,195);
	stroke(255,0,255);
	// text("Forever", 14,305);
	// text("ng", 93,26);
	stroke(0,0,255);
	// text("I", 215,222);
	fill(255,165,0);
	stroke(255,0,255);
	// text("this", 231,195);
	fill(0,255,255);
	stroke(0,0,0);
	// text("ger", 392,135);
	fill(255,165,0);
	stroke(0,255,0);
	textFont(Diggity);
	// text("sometimes.", 164,135);
	// text("ed", 134,135);
	stroke(0,0,0);
	textFont(RonsFont);
	// text("Are", 9,78);



}
