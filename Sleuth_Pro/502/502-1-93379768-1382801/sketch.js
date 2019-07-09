/*

Officer: 1382801
CaseNum: 502-1-93379768-1382801

Case 502 - A delicate matter - stage 2

We’re hot on the trail kid, and another document has come my way.
It’s a little more tricky to decipher but I know you can do it.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + Array[index].property + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var A_Excerpt = [
	{Fragment_0: "stuff", Fragment_1: "radiate", Fragment_2: "mend"}, 
	{Fragment_0: "smile", Fragment_1: "smile", Fragment_2: "protect"}, 
	{Fragment_0: "tug", Fragment_1: "succeed", Fragment_2: "rejoice"}, 
	{Fragment_0: "charge", Fragment_1: "smile", Fragment_2: "sail"}, 
	{Fragment_0: "play", Fragment_1: "stuff", Fragment_2: "consider"}, 
	{Fragment_0: "radiate", Fragment_1: "a donation", Fragment_2: "stuff"}, 
	{Fragment_0: "rejoice", Fragment_1: "meddle", Fragment_2: "romantic"}, 
	{Fragment_0: "COBOL", Fragment_1: "meddle", Fragment_2: "protect"}, 
	{Fragment_0: "tug", Fragment_1: "play", Fragment_2: "stuff"}, 
	{Fragment_0: "stuff", Fragment_1: "charge", Fragment_2: "she has"}
];

var B_Excerpt = [
	{Fragment_0: "sneeze", Fragment_1: "hurry", Fragment_2: "capital"}, 
	{Fragment_0: "bake", Fragment_1: "rejoice", Fragment_2: "Edsger"}, 
	{Fragment_0: "rejoice", Fragment_1: "consider", Fragment_2: "radiate"}, 
	{Fragment_0: "radiate", Fragment_1: "start", Fragment_2: "stuff"}, 
	{Fragment_0: "syndicate", Fragment_1: "consider", Fragment_2: "clip"}, 
	{Fragment_0: "protect", Fragment_1: "Hopper’s", Fragment_2: "clip"}, 
	{Fragment_0: "plug", Fragment_1: "start", Fragment_2: "protect"}, 
	{Fragment_0: "start", Fragment_1: "Governor Zuckerberg", Fragment_2: "rejoice"}, 
	{Fragment_0: "sail", Fragment_1: "charge", Fragment_2: "sail"}, 
	{Fragment_0: "meddle", Fragment_1: "delicate", Fragment_2: "plug"}
];

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

  missingWords = "Edsger, Hopper’s, she has, romantic, COBOL, syndicate, delicate, capital, a donation, Governor Zuckerberg";

  redactedText = "My dearest "+ B_Excerpt[1].Fragment_2 +", Please don’t doubt my sincerity when I say that I hadn’t the faintest idea about "+ B_Excerpt[5].Fragment_1 +" intervention. I suspect that "+ A_Excerpt[9].Fragment_2 +" a "+ A_Excerpt[6].Fragment_2 +" interest at the "+ A_Excerpt[7].Fragment_0 +". I and the "+ B_Excerpt[4].Fragment_0 +" appreciate your many contributions over the years. However, this is a most "+ B_Excerpt[9].Fragment_1 +" matter which would require significant "+ B_Excerpt[0].Fragment_2 +" for me to deal with it satisfactorily. I would not be so crude as to suggest a sum but perhaps "+ A_Excerpt[5].Fragment_1 +" to my forthcoming campaign would help. Yours sincerely, " + B_Excerpt[7].Fragment_1;

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
