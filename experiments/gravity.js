//taken from Garitt's example on gravity https://codepen.io/pixelkind/pen/zYyKpZe

class Element {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.position = createVector(x, y);
    this.velocity = createVector(0, 4);
    this.acceleration = createVector(0, 0);
    this.size = 50;
    this.mass = 20;
  }

  applyForce(force) {
    let newForce = force.copy();
    newForce.div(this.mass);
    this.acceleration.add(newForce);
  }

  update() {
    // the followin if its taken from Bassima's code during lecture - kaleidoscope
    if (this.position.x > width || this.position.x < 0) {
      this.velocity.x *= -1;
    }
    if (this.position.y > height || this.position.y < 0) {
      this.velocity.y *= -1;
    }
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  draw() {
    if (mouseIsPressed) {
      this.position.x = mouseX;
      this.position.y = mouseY;
      this.acceleration.equals(0, 0);
      background(0);
    }
    push();
    fill(207, 92, 54, 150);
    noStroke();
    ellipse(this.position.x, this.position.y, this.size);
    pop();
  }
}

class Attractor {
  constructor(x, y, z) {
    this.position = createVector(x, y);
    this.size = z;
    this.mass = 30;
  }

  attract(element) {
    let force = p5.Vector.sub(this.position, element.position);
    let distance = constrain(force.mag(), 5, 20);
    force.normalize();
    let m = (G * element.mass * this.mass) / (distance * distance);
    force.mult(m);
    return force;
  }

  draw() {
    push();
    // noFill();
    noStroke();
    fill(255);
    ellipse(this.position.x, this.position.y, this.size);
    pop();
  }
}

let element;
let attractor;
let G = 0.2;

function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(60);
  background(0);
  element = new Element(100, 100);
  attractor1 = new Attractor(innerWidth / 5, innerHeight / 5, 10);
  attractor2 = new Attractor(innerWidth / 1.9, innerHeight / 2.2, 10);
  attractor3 = new Attractor(innerWidth / 5, innerHeight / 1.5, 10);
  attractor4 = new Attractor(innerWidth / 1.2, innerHeight / 5, 10);
  attractor5 = new Attractor(innerWidth / 1.2, innerHeight / 1.5, 10);
}

function draw() {
  background(0, 10);

  let force = attractor1.attract(element);
  let force2 = attractor2.attract(element);
  let force3 = attractor3.attract(element);
  let force4 = attractor4.attract(element);
  let force5 = attractor5.attract(element);

  element.applyForce(force);
  element.applyForce(force2);
  element.applyForce(force3);
  element.applyForce(force4);
  element.applyForce(force5);
  element.update();
  element.draw();
  attractor1.draw();
  attractor2.draw();
  attractor3.draw();
  attractor4.draw();
  attractor5.draw();
}
