function preload() {
  handpose = ml5.handPose();
}
let handpose;
let video;
let hands = [];

function preload() {
  handpose = ml5.handPose();
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  handpose.detectStart(video, getHandsData);
}

let chorus;
let synth;
let oscillator;
let counter2 = 0;
let counter = 0;

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
  //   chorus.frequency.value = 2;
  //   chorus.delayTime = 2.5;
  //   chorus.depth = 0.2;
}

function draw() {
  image(video, 0, 0, width, height);
  for (let hand of hands) {
    let indexFinger = hand.index_finger_tip;
    let thumb = hand.thumb_tip;

    let centerX = (indexFinger.x + thumb.x) / 2;
    let centerY = (indexFinger.y + thumb.y) / 2;

    let distance = dist(indexFinger.x, indexFinger.y, thumb.x, thumb.y);

    if (distance < 50) {
      var loop1 = new Tone.Loop(function (time) {
        //     synth.triggerAttackRelease(["C3", "E3"]);
        //   }, "4n").start(0);
        synth.triggerAttackRelease("C3");
      }, "4n").start(0);
      Tone.Transport.start();
      counter2 = counter + 2;
    } else {
      Tone.Transport.stop();
    }
    if (distance > 50 && distance < 150) {
      var loop2 = new Tone.Loop(function (time) {
        synth.triggerAttackRelease("G3");
      }, "4n").start(0);
      Tone.Transport.start();
      counter2 = counter + 2;
    } else {
      Tone.Transport.stop();
    }
    if (distance > 150 && distance < 255) {
      var loop3 = new Tone.Loop(function (time) {
        synth.triggerAttackRelease("B3");
      }, "4n").start(0);
      Tone.Transport.start();
      counter2 = counter + 2;
    } else {
      Tone.Transport.stop();
    }

    // if (distance > 30 && distance < 35) {
    //   var loop4 = new Tone.Loop(function (time) {
    //     synth.triggerAttackRelease(["F3", "A3"]);
    //   }, "4n").start(0);
    //   Tone.Transport.start();
    // } else {
    //   Tone.Transport.stop();
    // }

    // if (distance > 35 && distance < 40) {
    //   var loop5 = new Tone.Loop(function (time) {
    //     synth.triggerAttackRelease(["G3", "B3"]);
    //   }, "4n").start(0);
    //   Tone.Transport.start();
    // } else {
    //   Tone.Transport.stop();
    // }

    // if (distance > 40 && distance < 45) {
    //   var loop6 = new Tone.Loop(function (time) {
    //     synth.triggerAttackRelease(["A3", "C4"]);
    //   }, "4n").start(0);
    //   Tone.Transport.start();
    // } else {
    //   Tone.Transport.stop();
    // }

    // if (distance > 45 && distance < 50) {
    //   var loop7 = new Tone.Loop(function (time) {
    //     synth.triggerAttackRelease(["B3", "D4"]);
    //   }, "4n").start(0);
    //   Tone.Transport.start();
    // } else {
    //   Tone.Transport.stop();
    // }

    // if (distance > 50 && distance < 55) {
    //   var loop8 = new Tone.Loop(function (time) {
    //     synth.triggerAttackRelease(["C4", "E4"]);
    //   }, "4n").start(0);
    //   Tone.Transport.start();
    // } else {
    //   Tone.Transport.stop();
    // }

    noStroke();
    fill(distance, distance, 255);
    ellipse(centerX, centerY, distance);
  }
}

function getHandsData(results) {
  hands = results;
}

setInterval(() => {
  counter = counter + 1;
}, 1000);

window.addEventListener("click", () => {
  synthSound();
  Tone.start();
  //   oscillator.start();
  //   synth.start();
  //   chorus.start();
});
