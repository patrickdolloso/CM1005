/// Week 11: Topic 6. Advanced arrays and iteration

// 6.1: For loops
// Video: Travesing Data


// Video: Nested iteration to draw grids

function setup() {
    createCanvas(600,600);

}

function draw() {

    // background(0);
    // fill(255,0,255);

    // for(var h = 0; h < 3; h++) {

    
    // for(var i = 0; i < 10; i++){
    //     ellipse(30 +i*30, 60 + h*30,30,30);
    // }

    var gap = 10;
for(var x = 0; x < width; x += gap){
  for(var y = 0; y < height; y += gap){
    ellipse(x, y, 8, 8);
  }  
}

}

    // for(var i = 0; i < 10; i++){
    //     ellipse(30 +i*30,60,30,30);
    // }
    
    // for(var i = 0; i < 10; i++){
    //     ellipse(30 +i*30,90,30,30);