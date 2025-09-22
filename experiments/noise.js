function setup() {
  createCanvas(innerWidth, innerHeight);
  noFill();
  frameRate(10);
  background(0, 0, 0);
  stroke(255, 0, 0, 100);
}

// taken from Garrits noise example I added a grid and changed colors/values

let originalY = 1;

function drawLine() {
  const divider = 100;
  originalY = originalY + 80;
  noiseSeed(8);
  beginShape();
  for (let x = 0; x < innerWidth; x++) {
    const y = originalY + noise(x / divider) * 100;
    vertex(x, y);
  }
  endShape();
}

function draw() {
  for (let i = 0; i < 200; i++) {
    stroke(originalY / 3, originalY / 3, originalY / 2);
    strokeWeight(300);
    drawLine();
  }
  // drawLine();
  //   noLoop();
}
