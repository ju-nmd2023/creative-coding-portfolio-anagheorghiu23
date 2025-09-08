//the following 6 lines of code are taken from Garrits example :)
function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(10);
  background(255, 255, 255);
  noFill();
}

const size = 50;
const layers = 10;

var angle = 0;
var scalar = 50;
var speed = 10;
var k = 400;
var l = 400;

function getRandomValue(pos, variance) {
  return pos + map(Math.random(), 0, 1, -variance, variance);
}

function drawLayers(x, y, size, layers) {
  const variance = size / 17;

  //the following "for" is taken from Garrits example :) just mildly modified so it is an hourglass

  //the following 6 lines of code are taken from Garrits example, modified again to be an hourglass
  for (let i = 0; i < 1; i++) {
    const s = (size / layers) * i;
    const half = s / 2;
    ellipse(
      getRandomValue(x - half, variance),
      getRandomValue(y - half, variance),
      size + 20,
      size + 20
    );
  }
  for (let i = 0; i < layers; i++) {
    if (Math.random() > 2) {
      continue;
    }
    const s = (size / layers) * i;
    const half = s / 2;

    beginShape();

    vertex(
      getRandomValue(x - half, variance),
      getRandomValue(y - half, variance)
    );
    vertex(
      getRandomValue(x - half, variance),
      getRandomValue(y + half, variance)
    );
    vertex(
      getRandomValue(x + half, variance),
      getRandomValue(y + half, variance)
    );
    vertex(
      getRandomValue(x + half, variance),
      getRandomValue(y - half, variance)
    );

    endShape(CLOSE);
  }
}

function randomColor() {
  var r = random(0, 255);
  var g = random(0, 255);
  var b = random(0, 255);
  fill(r, g, b, 10);
  stroke(r, g, b, 200);
}
// got the spiral from this  https://editor.p5js.org/SidS/sketches/w6Jh4qEdR
function draw() {
  if (mouseIsPressed) {
    k = mouseX;
    l = mouseY;
    randomColor();
    background(255, 255, 255);
    drawLayers(k, l, size, layers);
    angle = 0;
    scalar = 20;
  } else {
    k = k + cos(angle) * scalar;
    l = l + sin(angle) * scalar;
    drawLayers(k, l, size, layers);
    angle += speed;
    scalar += speed;
  }
}
