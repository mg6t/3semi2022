// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let angle = 0;
let angleV = 0;
let angleA = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(RADIANS);
  //startButton = document.getElementById('START');
}

function draw() {
  background(0, 100, 100);
  noStroke();
  fill(150, 180, 30);
  rectMode(CENTER);
  translate(200, 200);
  rotate(angle);
  rect(0, 0, 256, 3);
  rect(0, 0, 3, 256);
  rotate(200, 200);
  rect(0, 0, 256, 3);
  rotate(200, 200);
  rect(0, 0, 256, 3);

  angle += angleV;
  angleV += angleA;
}

function mouseClicked() {
  angleA = 0.001;
}