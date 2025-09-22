function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(200);
}
// took the calm sea example from here https://p5js.org/reference/p5/noise/
function aurora() {
  let noiseLevel = height / 1.5;
  let noiseScale = 0.002;
  for (let x = 0; x < width; x += 1) {
    let nx = noiseScale * x;
    let nt = noiseScale * frameCount * 2;
    let y = noiseLevel * noise(nx, nt) * 1.5;
    // stroke(119, 81, 169);
    stroke(0);
    line(x, 0, x, y);
    nt = noiseScale * frameCount * 1.7;
    let j = noiseLevel * noise(nx, nt);
    stroke(255);
    line(x, 0, x, j);
  }
}

function draw() {
  background(255);
  aurora();
}
