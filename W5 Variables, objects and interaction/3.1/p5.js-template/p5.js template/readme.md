# 3.1 Interaction with build-in variables
## Built-in variables: mouseX,mouseY
### Code
```js
function setup() {
    // creates drawing canvas
    createCanvas(600,600);
    fill(255);
}

function draw() {
    // bacground colour
    background(0);

    // creates an ellipse where the coordinates are controlled by the mouse
    ellipse(mouseX,mouseY,100);


}

// creates an event where pressing the mouse turns the ellipse red
function mousePressed() {
    fill(255,0,0);
}

// creates an event where pressing any key turns the ellipse yellow
function keyPressed() {
    fill(255,255,0);
}
```