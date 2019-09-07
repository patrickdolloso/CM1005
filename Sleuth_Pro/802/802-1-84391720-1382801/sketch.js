/*
802 - The case of Monte Carlo
Stage 2 - King of Cards


Officer: 1382801
CaseNum: 802-1-84391720-1382801

You aren’t going to look like much of a Poker player unless you can do a good shuffle. We’ll need to be able to do this with one hand tied behind our back if we are going to pose as pros at the big game.

* Write a function called fillShuffleArray.
* Declare an empty array in the function.
* Using a for loop fill the array with 52 random integers between 0 and 97.
* Return the array at the end of the function.
* Call fillShuffleArray in setup.
* Call Shuffle deck using the return value from fillShuffleArray as the argument.

*/

var cardDeck = [{"card_suit":"Spades","number":"A"},{"card_suit":"Spades","number":"2"},{"card_suit":"Spades","number":"3"},{"card_suit":"Spades","number":"4"},{"card_suit":"Spades","number":"5"},{"card_suit":"Spades","number":"6"},{"card_suit":"Spades","number":"7"},{"card_suit":"Spades","number":"8"},{"card_suit":"Spades","number":"9"},{"card_suit":"Spades","number":"10"},{"card_suit":"Spades","number":"J"},{"card_suit":"Spades","number":"Q"},{"card_suit":"Spades","number":"K"},{"card_suit":"Clubs","number":"A"},{"card_suit":"Clubs","number":"2"},{"card_suit":"Clubs","number":"3"},{"card_suit":"Clubs","number":"4"},{"card_suit":"Clubs","number":"5"},{"card_suit":"Clubs","number":"6"},{"card_suit":"Clubs","number":"7"},{"card_suit":"Clubs","number":"8"},{"card_suit":"Clubs","number":"9"},{"card_suit":"Clubs","number":"10"},{"card_suit":"Clubs","number":"J"},{"card_suit":"Clubs","number":"Q"},{"card_suit":"Clubs","number":"K"},{"card_suit":"Hearts","number":"A"},{"card_suit":"Hearts","number":"2"},{"card_suit":"Hearts","number":"3"},{"card_suit":"Hearts","number":"4"},{"card_suit":"Hearts","number":"5"},{"card_suit":"Hearts","number":"6"},{"card_suit":"Hearts","number":"7"},{"card_suit":"Hearts","number":"8"},{"card_suit":"Hearts","number":"9"},{"card_suit":"Hearts","number":"10"},{"card_suit":"Hearts","number":"J"},{"card_suit":"Hearts","number":"Q"},{"card_suit":"Hearts","number":"K"},{"card_suit":"Diamonds","number":"A"},{"card_suit":"Diamonds","number":"2"},{"card_suit":"Diamonds","number":"3"},{"card_suit":"Diamonds","number":"4"},{"card_suit":"Diamonds","number":"5"},{"card_suit":"Diamonds","number":"6"},{"card_suit":"Diamonds","number":"7"},{"card_suit":"Diamonds","number":"8"},{"card_suit":"Diamonds","number":"9"},{"card_suit":"Diamonds","number":"10"},{"card_suit":"Diamonds","number":"J"},{"card_suit":"Diamonds","number":"Q"},{"card_suit":"Diamonds","number":"K"}];
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


	//call your fillShuffleArray function here. Followed by a call to shuffleDeck with the return value of fillShuffleArray as an argument.
	shuffleDeck(fillShuffleArray);

}

//write your fillShuffleArray function here
function fillShuffleArray() 
{
	var shuffle_array = [];
	for(var i=0; i < 52; i++)
	{
		shuffle_array.push(random(2, 97));
	}
	return shuffle_array;
};


/////////////////////DON'T CHANGE ANYTHING BELOW HERE/////////////////////////
function shuffleDeck(shuffleSeed)
{
		//shuffle the deck by rotating the cards location with the values in
		//shuffleSeed. Repeat this a random number of times between 20 and 50
    var shuffleIterations = parseInt(random(20, 50));
    for(var i = 0; i < shuffleIterations; i++)
    {
	   for (var j = 0; j < cardDeck.length; j++)
	   {
		  var tempCard = cardDeck.splice(j, 1);
          var newLoc = (j + shuffleSeed[j])%52;
          cardDeck.splice(newLoc, 0, tempCard[0]);
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
			if (card.number == values[j] && card.card_suit == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
