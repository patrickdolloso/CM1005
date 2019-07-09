/*

Officer: 1382801
CaseNum: 502-3-77173063-1382801

Case 502 - A donation - stage 4

This final document will seal the deal kid. C’mon kid. Let’s send these crooks down.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + array[index].property[index] + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var evidence_A = [
{
	bit_0: {fragment_0: "bake", fragment_1: "ALGOL fish wholesalers", fragment_2: "bake", fragment_3: "start"}, 
	bit_1: {fragment_0: "ALGOL", fragment_1: "sneeze", fragment_2: "play", fragment_3: "succeed"}, 
	bit_2: {fragment_0: "smile", fragment_1: "sail", fragment_2: "plug", fragment_3: "succeed"}
},
{
	bit_0: {fragment_0: "donation", fragment_1: "mend", fragment_2: "radiate", fragment_3: "bake"}, 
	bit_1: {fragment_0: "stuff", fragment_1: "clip", fragment_2: "succeed", fragment_3: "protect"}, 
	bit_2: {fragment_0: "sail", fragment_1: "smile", fragment_2: "bake", fragment_3: "start"}
},
{
	bit_0: {fragment_0: "fence", fragment_1: "syndicate", fragment_2: "hurry", fragment_3: "sail"}, 
	bit_1: {fragment_0: "mend", fragment_1: "stuff", fragment_2: "consider", fragment_3: "start"}, 
	bit_2: {fragment_0: "smile", fragment_1: "play", fragment_2: "hurry", fragment_3: "rejoice"}
},
{
	bit_0: {fragment_0: "you", fragment_1: "succeed", fragment_2: "smile", fragment_3: "smile"}, 
	bit_1: {fragment_0: "bake", fragment_1: "stuff", fragment_2: "clip", fragment_3: "clip"}, 
	bit_2: {fragment_0: "mend", fragment_1: "fence", fragment_2: "Edsger", fragment_3: "rejoice"}
},
{
	bit_0: {fragment_0: "sail", fragment_1: "sail", fragment_2: "stuff", fragment_3: "clip"}, 
	bit_1: {fragment_0: "protect", fragment_1: "COBOL", fragment_2: "clip", fragment_3: "start"}, 
	bit_2: {fragment_0: "consider", fragment_1: "rejoice", fragment_2: "charge", fragment_3: "sneeze"}
}];

var evidence_B = [
{
	bit_0: {fragment_0: "radiate", fragment_1: "fence", fragment_2: "meddle", fragment_3: "smile"}, 
	bit_1: {fragment_0: "play", fragment_1: "development", fragment_2: "smile", fragment_3: "hurry"}, 
	bit_2: {fragment_0: "mend", fragment_1: "tug", fragment_2: "hurry", fragment_3: "succeed"}
},
{
	bit_0: {fragment_0: "mend", fragment_1: "smile", fragment_2: "clip", fragment_3: "protect"}, 
	bit_1: {fragment_0: "radiate", fragment_1: "sail", fragment_2: "play", fragment_3: "tug"}, 
	bit_2: {fragment_0: "plug", fragment_1: "sneeze", fragment_2: "rejoice", fragment_3: "succeed"}
},
{
	bit_0: {fragment_0: "start", fragment_1: "play", fragment_2: "meddle", fragment_3: "sneeze"}, 
	bit_1: {fragment_0: "consider", fragment_1: "bake", fragment_2: "sneeze", fragment_3: "succeed"}, 
	bit_2: {fragment_0: "bake", fragment_1: "clip", fragment_2: "sail", fragment_3: "plug"}
},
{
	bit_0: {fragment_0: "tug", fragment_1: "start", fragment_2: "start", fragment_3: "meddle"}, 
	bit_1: {fragment_0: "smile", fragment_1: "sneeze", fragment_2: "fence", fragment_3: "succeed"}, 
	bit_2: {fragment_0: "stuff", fragment_1: "hurry", fragment_2: "sail", fragment_3: "smile"}
},
{
	bit_0: {fragment_0: "start", fragment_1: "rejoice", fragment_2: "start", fragment_3: "mend"}, 
	bit_1: {fragment_0: "play", fragment_1: "consider", fragment_2: "$200,000", fragment_3: "protect"}, 
	bit_2: {fragment_0: "fence", fragment_1: "clip", fragment_2: "charge", fragment_3: "Governor Zuckerberg"}
}];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280, 800);

  // replace all redacted words with the correct values from the data structures above

  missingWords = "Edsger, donation, $200,000, ALGOL, you, ALGOL fish wholesalers, syndicate, development, COBOL, Governor Zuckerberg";

  redactedText = "My dearest "+ evidence_A[3].bit_2.fragment_2 +", I have just received your very generous "+ evidence_A[1].bit_0.fragment_0 +" of "+ evidence_B[4].bit_1.fragment_2 +". Thank you. This will be invaluable to our campaign. "+ evidence_A[0].bit_1.fragment_0 +" is a stalwart part of the community and I look forward to continuing our strong partnership in the future. Regard the other matter, I think you will find that all has been satisfactorily dealt with. Just read this morning’s front pages. You can rest assured that no mention was made of "+ evidence_A[3].bit_0.fragment_0 +" or "+ evidence_A[0].bit_0.fragment_1 +" to the "+ evidence_A[2].bit_0.fragment_1 +". Your new "+ evidence_B[0].bit_1.fragment_1 +" at the "+ evidence_A[4].bit_1.fragment_1 +" can now proceed without impediment. Yours sincerely, " + evidence_B[4].bit_2.fragment_3;

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
