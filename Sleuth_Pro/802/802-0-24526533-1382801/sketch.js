/*
802 - The case of Monte Carlo
Stage 1 - Card sharks

Officer: 1382801
CaseNum: 802-0-24526533-1382801

Time to pull on your best threads kid, grab a martini prepare for an evening at the Monte Carlo casino.

Our targets for this op are a gang of high rolling statisticians. They maintain an air of respectability as the board of Rossling Polling, a company used by the shady politicians of Console City to make them seem more popular than they really are. They’re prepared to give up the dirt on their techniques if we can beat them in a game of 5 card stud poker. We can’t go in and gamble away Sleuth & Co’s cash reserves. There isn’t that much green in the evidence room to compete with these card sharks. Let’s stack the odds in our favour. First let’s learn how to mark cards.

* Write a function called  pick_cards.
* Using a for loop to set the marked property of the cardDeck array elements to true when the suit is Hearts or the value is 8
* Call the function from within setup

*/

var cardDeck = [{"marked":false,"cardSuit":"Spades","value":"A"},{"marked":false,"cardSuit":"Spades","value":"2"},{"marked":false,"cardSuit":"Spades","value":"3"},{"marked":false,"cardSuit":"Spades","value":"4"},{"marked":false,"cardSuit":"Spades","value":"5"},{"marked":false,"cardSuit":"Spades","value":"6"},{"marked":false,"cardSuit":"Spades","value":"7"},{"marked":false,"cardSuit":"Spades","value":"8"},{"marked":false,"cardSuit":"Spades","value":"9"},{"marked":false,"cardSuit":"Spades","value":"10"},{"marked":false,"cardSuit":"Spades","value":"J"},{"marked":false,"cardSuit":"Spades","value":"Q"},{"marked":false,"cardSuit":"Spades","value":"K"},{"marked":false,"cardSuit":"Clubs","value":"A"},{"marked":false,"cardSuit":"Clubs","value":"2"},{"marked":false,"cardSuit":"Clubs","value":"3"},{"marked":false,"cardSuit":"Clubs","value":"4"},{"marked":false,"cardSuit":"Clubs","value":"5"},{"marked":false,"cardSuit":"Clubs","value":"6"},{"marked":false,"cardSuit":"Clubs","value":"7"},{"marked":false,"cardSuit":"Clubs","value":"8"},{"marked":false,"cardSuit":"Clubs","value":"9"},{"marked":false,"cardSuit":"Clubs","value":"10"},{"marked":false,"cardSuit":"Clubs","value":"J"},{"marked":false,"cardSuit":"Clubs","value":"Q"},{"marked":false,"cardSuit":"Clubs","value":"K"},{"marked":false,"cardSuit":"Hearts","value":"A"},{"marked":false,"cardSuit":"Hearts","value":"2"},{"marked":false,"cardSuit":"Hearts","value":"3"},{"marked":false,"cardSuit":"Hearts","value":"4"},{"marked":false,"cardSuit":"Hearts","value":"5"},{"marked":false,"cardSuit":"Hearts","value":"6"},{"marked":false,"cardSuit":"Hearts","value":"7"},{"marked":false,"cardSuit":"Hearts","value":"8"},{"marked":false,"cardSuit":"Hearts","value":"9"},{"marked":false,"cardSuit":"Hearts","value":"10"},{"marked":false,"cardSuit":"Hearts","value":"J"},{"marked":false,"cardSuit":"Hearts","value":"Q"},{"marked":false,"cardSuit":"Hearts","value":"K"},{"marked":false,"cardSuit":"Diamonds","value":"A"},{"marked":false,"cardSuit":"Diamonds","value":"2"},{"marked":false,"cardSuit":"Diamonds","value":"3"},{"marked":false,"cardSuit":"Diamonds","value":"4"},{"marked":false,"cardSuit":"Diamonds","value":"5"},{"marked":false,"cardSuit":"Diamonds","value":"6"},{"marked":false,"cardSuit":"Diamonds","value":"7"},{"marked":false,"cardSuit":"Diamonds","value":"8"},{"marked":false,"cardSuit":"Diamonds","value":"9"},{"marked":false,"cardSuit":"Diamonds","value":"10"},{"marked":false,"cardSuit":"Diamonds","value":"J"},{"marked":false,"cardSuit":"Diamonds","value":"Q"},{"marked":false,"cardSuit":"Diamonds","value":"K"}];
var deck_img;
var table_img;
var drawCounter = 0;

function preload()
{
	deck_img = loadImage("deck.png");
	table_img = loadImage("table.png");
}
function setup()
{
	createCanvas(table_img.width, table_img.height);
	frameRate(30);


	//call your pick_cards function here
	pick_cards()


}

//write your pick_cards function here
function pick_cards()
{
	for(var i =0; i < cardDeck.length; i++)
	{
		if(cardDeck[i].cardSuit == "Hearts" || cardDeck[i].value == "8")
		{
			cardDeck[i].marked = true;
		}

	}
}


function draw()
{
	image(table_img, 0, 0);

	if (frameCount % 7 == 0)
	{
		drawCounter++;
		if (drawCounter == 52)
		{
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++)
	{
		if (cardDeck[i].marked)
		{
			drawCard(cardDeck[i], 400 + i * 18, 230);
		}
		else
		{
			drawCard(cardDeck[i], 400 + i * 18, 250);
		}
	}


}


function drawCard(card, x, y)
{

	var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
	var suits = ["Spades", "Clubs", "Hearts", "Diamonds"];

	for (var i = 0; i < suits.length; i++)
	{
		for (var j = 0; j < values.length; j++)
		{
			if (card.value == values[j] && card.cardSuit == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
