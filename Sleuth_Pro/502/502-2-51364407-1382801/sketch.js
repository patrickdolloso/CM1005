/*

Officer: 1382801
CaseNum: 502-2-51364407-1382801

Case 502 - Out of the picture - stage 3

Yet another document has come my way. This one is even more tricky to decipher.
The Governor must really have something to hide.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + object.property[index] + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var A_document = {
	element_0: [ "smile", "bake", "$200,000"], 
	element_1: [ "a donation", "fence", "bake"], 
	element_2: [ "succeed", "smile", "charge"], 
	element_3: [ "succeed", "sail", "sail"], 
	element_4: [ "mend", "hurry", "consider"], 
	element_5: [ "charge", "mend", "start"], 
	element_6: [ "succeed", "protect", "mend"], 
	element_7: [ "campaign", "succeed", "sail"], 
	element_8: [ "Governor Zuckerberg", "sail", "hit"], 
	element_9: [ "start", "sail", "sneeze"]
};

var B_document = {
	element_0: [ "consider", "fence", "sneeze"], 
	element_1: [ "plug", "charge", "meddle"], 
	element_2: [ "ALGOL", "start", "meddle"], 
	element_3: [ "clip", "charge", "Hopper"], 
	element_4: [ "fence", "hurry", "succeed"], 
	element_5: [ "play", "bake", "radiate"], 
	element_6: [ "play", "Edsger", "sail"], 
	element_7: [ "radiate", "tug", "syndicate"], 
	element_8: [ "play", "rejoice", "sail"], 
	element_9: [ "clip", "succeed", "consider"]
};

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280,800);

  // replace all redacted words with the correct values from the data structures above

  missingWords = "Governor Zuckerberg, a donation, campaign, $200,000, Hopper, syndicate, hit, ALGOL, Edsger";

  redactedText = "Dear "+ A_document.element_8[0] +", I am sure that something could be worked out in terms of "+ A_document.element_1[0] +" for your "+ A_document.element_7[0] +". How does "+ A_document.element_0[2] +" sound ? I am afraid I will need to be so crude as to spell out what ALGOL requires in return. "+ B_document.element_3[2] +" needs to be out of the picture. She’s caused enough trouble. Get the "+ B_document.element_7[2] +" to organise the "+ A_document.element_8[2] +" but I’d prefer it you don’t mention me or "+ B_document.element_2[0] +". I owe them enough favours already. Your old friend, " + B_document.element_6[1];

}

function draw()
{
  // you don't need to change this
  image(backgroundImg, 0, 0);
  stroke(0);
  strokeWeight(3);
  line(width/2, 10, width/2, height - 10);
  noStroke();
  textFont(myFont);
  textSize(14);
  text(redactedText, 30, 100, 580, 600);
  text(missingWords, 670, 100, 580, 600);
}
