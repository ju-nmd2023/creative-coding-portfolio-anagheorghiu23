function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(3);
}
//the following 6 lines of code are taken from Garrits example :)
const size = 100;
const layers = 3;

function getRandomValue(pos, variance) {
  return pos + map(Math.random(), 0, 1, -variance, variance);
}

function drawLayers(x, y, size, layers) {
  const variance = size / 20;

  fill(170, 10, 20, 30);
  stroke(170, 10, 20, 150);

  //the following "for" is taken from Garrits example :) just mildly modified so it is an hourglass
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
      getRandomValue(x + half, variance),
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
    endShape(CLOSE);
  }
  //the following 6 lines of code are taken from Garrits example, modified again to be an hourglass
  for (let i = 0; i < layers; i++) {
    if (Math.random() > 0.8) {
      continue;
    }

    const s = (size / layers) * i;
    const half = s / 2;
    beginShape();
    vertex(x - half, y - half);
    vertex(x - half, y + half);
    vertex(x + half, y - half);
    vertex(x + half, y + half);
    endShape(CLOSE);
  }
}
// function taken from the example :) its easier to note what is mine :))
function draw() {
  background(0, 0, 0);
  // background(255, 255, 255);
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      drawLayers(
        size / 2 + x * size * 0.8,
        size / 2 + y * size * 0.8,
        size,
        layers
      );
    }
  }
  // noLoop();
}
