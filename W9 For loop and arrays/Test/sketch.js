/// Week 9: Introducing the for loop

// Video 1: Introducing the for loop
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