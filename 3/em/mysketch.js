// Simple Harmonic Motion (2-axes Exercise)
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/oXwCVDXS2Lg
// https://thecodingtrain.com/learning/nature-of-code/3.3-angles-and-vectors.html

// Basic: https://editor.p5js.org/codingtrain/sketches/Fn1feR81W
// Approximate Time: https://editor.p5js.org/codingtrain/sketches/uGCYH4-PN
// Exact Time Exercise: https://editor.p5js.org/codingtrain/sketches/jp2B-0Wkg
// Main: https://editor.p5js.org/codingtrain/sketches/MfvyVULHT
// Yoyo: https://editor.p5js.org/codingtrain/sketches/qBhVjZ0pn
// 2-axes Exercise: https://editor.p5js.org/codingtrain/sketches/_ir7-suNG

let angle1 = 0;
let angle2 = 0;
let angleV1 = 0.3;
let angleV2 = 0.4;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  translate(width / 2, height / 2);
  fill(52, 238, 22, 200);
  stroke(52, 238, 22, 200);
  let ampx = (0.9 * width) / 2;
  let ampy = (0.9 * height) / 2;
  let x = map(cos(angle1), -1, 1, -ampx, ampx);
  let y = map(sin(angle2), -1, 1, -ampy, ampy);
  strokeWeight(1);
  circle(x, y, 32);
  angle1 += angleV1;
  angle2 += angleV2;
}
