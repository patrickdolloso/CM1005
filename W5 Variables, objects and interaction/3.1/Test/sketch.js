function setup() {
    createCanvas(600,600);
    fill(255);
}

function draw() {

    background(0);
    ellipse(mouseX,mouseY,100);


}

function mousePressed() {
    fill(255,0,0);
}

function keyPressed() {
    fill(255,255,0);
}