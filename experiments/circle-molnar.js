//the following 6 lines of code are taken from Garrits example :)
function setup() {
  createCanvas(700, 680);
  background(255, 255, 255);
  noFill();
}

function drawLayers(x, y) {
  beginShape();

  for (let i = 0; i < 50; i += 0.05) {
    k = cos(i) * x;
    l = sin(i) * y;
    vertex(k, l);
  }
  endShape(CLOSE);
}

function randomColor() {
  var r = random(0, 255);
  var g = random(0, 255);
  var b = random(0, 255);
  //   fill(r, g, b, 10);
  stroke(r, g, b);
}

function draw() {
  // translate(width / 4, 50);
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      if (mouseIsPressed) {
        randomColor();
        background(255, 255, 255);
      } else {
        // if(){
        drawLayers(x * 75, y * 75);
        rect(0, 0, 675, 675);
      }
    }
  }
}
