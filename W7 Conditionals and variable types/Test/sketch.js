var name;

function setup() {
    createCanvas(512, 512);
    name = "bill";

    if(name == "bill") {
        console.log("hello, " + name);
    }

    if(name != "bill") {
        console.log("your name isn't bill");
    }


}

function draw() {
    ellipse(50,50,100);
}