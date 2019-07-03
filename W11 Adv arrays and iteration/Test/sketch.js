/// Week 11: Topic 6. Advanced arrays and iteration

// 6.1: For loops
// Video: Travesing Data


// Video: Nested iteration to draw grids

var wordsX;
var wordsY;

function setup() {
    createCanvas(800,800);
    wordCloud=[];
    wordsX=[];
    wordsY=[];

    wordCloud.push("first");
    wordCloud.push("second");
    wordCloud.push("first");
    wordCloud.push("second");

    currentWord="";
}

function draw() {

  
    // background(0);
    // fill(255,0,255);

    // for(var h = 0; h < 3; h++) {

    
    // for(var i = 0; i < 10; i++){
    //     ellipse(30 +i*30, 60 + h*30,30,30);
    // }



    // for(var i = 0; i < 10; i++){
    //     ellipse(30 +i*30,60,30,30);
    // }
    
    // for(var i = 0; i < 10; i++){
    //     ellipse(30 +i*30,90,30,30);


    /*
    // Video: Being creative with nested iteration
    background(0);
    fill(250,250,0);
    noStroke();

    for(var j=0; j<20; j++){
      for(var i=0; i<20; i++){

        if(i%2==0){
          fill(255);
        }
        else{
          fill(205);
        }
        var d = dist(mouseX, mouseY, 50+i*30,50+j*30);
        var r = d/10;
        ellipse(50+i*30,50+j*30,r);
      }
    }
    */

    background(0);
    fill(255);

    for(var i = 0; i < wordCloud.length; i++){

      text(wordCloud[i], wordsX[i], wordsY[i]);
      wordsX[i] += random(-1,1);
      wordsY[i] += random(-1,1);
    }

}

function keyPressed(){
  console.log(keyCode);

  if(keyCode == 13){
    wordCloud.push(currentWord);
    currentWord = "";
    wordsX.push(random(width/4,width*3/4));
    wordsY.push(random(height/4,height*3/4));
  }
  else{
    currentWord += key;
  }

}
