var wordCloud;
var wordPositionsX;
var wordPositionsY;
var currentWord;

function setup()
{
    createCanvas(500,500);
    wordCloud = [];
    wordPositionsX = [];
    wordPositionsY = [];
    
    currentWord = "";
}

function draw()
{

    background(0);
    fill(255);
    
    text("Add to the word cloud: " + currentWord, 20,20);
    
    for(var i = 0; i < wordCloud.length; i++)
    {
        text(wordCloud[i], wordPositionsX[i], wordPositionsY[i]); 
        wordPositionsX[i] += random(-1,1);
        wordPositionsY[i] += random(-1,1);
    }
    
}

function keyPressed()
{
    //console.log(keyCode,key); //DELETE = 8, RETURN = 13
    
    if(keyCode == 8)
    {
        currentWord = currentWord.substr(0,currentWord.length -1);
    }
    else if(keyCode == 13)
    {
        wordCloud.push(currentWord);
        wordPositionsX.push(random(width/4, width *3/4));
        wordPositionsY.push(random(height/4, height *3/4));
        currentWord = "";
    }
    else
    {
        currentWord += key;
    }
    
    
    
}