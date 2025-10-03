let video;
let handpose;
let hands = [];

function preload() {
  handpose = ml5.handPose();
}

class Button {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  draw() {
    push();
    fill(0);
    rect(this.x, this.y, 100, 100);
    pop();
  }
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  handpose.detectStart(video, getHandsData);

  button1 = new Button(50, 50);
  button2 = new Button(200, 50);
  button3 = new Button(350, 50);
  button4 = new Button(500, 50);
}

let chorus;
let synth;
let oscillator;

window.addEventListener("load", () => {
  //   chorus = new Tone.Chorus(4, 2.5, 0.5).toDestination().start();
  //   synth = new Tone.PolySynth().connect(chorus);
  synth = new Tone.PolySynth().toDestination();
});

function synthSound() {
  synth.set({
    oscillator: {
      type: "sine",
    },
  });
  synth.set({
    envelope: {
      attack: 0.2,
      decay: 0.3,
      sustain: 0.5,
      release: 0.8,
    },
  });
}

let notePlayed = false;
let counter = 0;

function draw() {
  background(255, 255, 255);
  image(video, 0, 0, width, height);
  button1.draw();
  button2.draw();
  button3.draw();
  button4.draw();

  if (hands.length > 0) {
    let index = hands[0].index_finger_tip;
    push();
    noFill();
    noStroke();
    fill(0, 255, 0);
    ellipse(index.x, index.y, 30);
    pop();

    if (
      button1.x < index.x &&
      button1.y < index.y &&
      button1.x + 100 > index.x &&
      button1.y + 100 > index.y
    ) {
      push();
      fill(255);
      ellipse(index.x, index.y, 70);
      pop();
      if (counter > 1) {
        synth.triggerAttackRelease(["C3", "E3"], "8n");
        counter = 0;
      }
    }

    if (
      button2.x < index.x &&
      button2.y < index.y &&
      button2.x + 100 > index.x &&
      button2.y + 100 > index.y
    ) {
      push();
      fill(255);
      ellipse(index.x, index.y, 70);
      pop();
      if (counter > 1) {
        synth.triggerAttackRelease(["F3", "A3"], "8n");
        counter = 0;
      }
    }
    if (
      button3.x < index.x &&
      button3.y < index.y &&
      button3.x + 100 > index.x &&
      button3.y + 100 > index.y
    ) {
      push();
      fill(255);
      ellipse(index.x, index.y, 70);
      pop();
      if (counter > 1) {
        synth.triggerAttackRelease(["A3", "C4"], "8n");
        counter = 0;
      }
    }
    if (
      button4.x < index.x &&
      button4.y < index.y &&
      button4.x + 100 > index.x &&
      button4.y + 100 > index.y
    ) {
      push();
      fill(255);
      ellipse(index.x, index.y, 70);
      pop();
      if (counter > 1) {
        synth.triggerAttackRelease(["C4", "A4"], "8n");
        counter = 0;
      }
    }
  }
}

setInterval(() => {
  counter = counter + 1;
}, 350);

function getHandsData(results) {
  hands = results;
}
