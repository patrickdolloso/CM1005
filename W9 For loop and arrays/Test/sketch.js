/// Week 9: Introducing the for loop

// 5.1: For loops
// Video 1: Introducing the for loop

/*
function setup() {
    createCanvas(600,600);

    for(var i = 0; i < 100; i++) {
        fill(random(0,255));
        ellipse(random(0,200),random(0,200),100);
    }

}

function draw() {
    for(var i = 0; i < 100; i++) {
        fill(random(0,255));
        ellipse(random(0,200),random(0,200),100);
    }
}
*/

// Video 2: For loops using variable incrementation and the index variable

/*

var x_pos;
var y_pos;

function setup() {
    createCanvas(800, 800);
}

function draw() {
    background(0);
    fill(255,0,255);
    x_pos = 100;
    y_pos = 100;
    
    for(var i=0; i < 20; i++) {
        ellipse(x_pos,y_pos,y_pos);
        y_pos += 10;  
        x_pos += 20;   
        console.log(x_pos);   
    }
}

*/

// Video 3: combining for loops with conditional statements

/*
function setup() {
    createCanvas(800, 600);
    strokeWeight(2);
}

function draw() {
    noFill();
    stroke(150);
    // stroke(255,100,0);
    // stroke(200,200,255);
    // stroke(155,0,100);

    for(var i = 0; i < 9; i++) {

        var r = 0;

        if(i > 3) {
            stroke(155,0,100); 
        }
        
        else if(i>1) {
            stroke(255,100,0);  
            r = 20;             
        }

        else {
            stroke(150);
        }
        

        
        rect(80+i*80,80,60,60);
    }

}
*/

//5.2 Arrays
//Video 1: What are arrays. why do we need them?

/*
var myArray = [1,2,3,4];

console.log(myArray[0]);
// change 3rd element to 100
myArray[2] = 100;
console.log(myArray[2]);
console.log(myArray);

*/

/*
//Video: Coding with arrays - example
var sizes = [4, 9, 10, 5, 110, 95, 40, 40];
function setup() {
    createCanvas(1000, 600);
}

function draw() {
    background(0);
    textAlign(CENTER);

    ellipse(50, height/2, sizes[0]);
    ellipse(175, height/2, sizes[1]);

}
*/

