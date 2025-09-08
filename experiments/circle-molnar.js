//the following 6 lines of code are taken from Garrits example :)
function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(10);
  background(255, 255, 255);
  noFill();
}

const layers = 10;

function drawLayers(x, y, layers) {
  for (let i = 0; i < layers; i++) {
    beginShape();

    for (let i = 0; i < 50; i += 0.05) {
      k = cos(i) * x;
      l = sin(i) * y;
      vertex(k, l);
    }
    endShape(CLOSE);
  }
}

function randomColor() {
  var r = random(0, 255);
  var g = random(0, 255);
  var b = random(0, 255);
  //   fill(r, g, b, 10);
  stroke(r, g, b);
}

function draw() {
  //
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      if (mouseIsPressed) {
        randomColor();
        background(255, 255, 255);
      } else {
        // if(){
        drawLayers(x * 75, y * 75, layers);
        rect(0, 0, 675, 675);
      }
    }
  }
}
