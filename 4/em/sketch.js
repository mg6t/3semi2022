// Particle System Inheritance
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/44RSr49m6LU
// https://thecodingtrain.com/learning/nature-of-code/4.3-particle-inheritance.html
// https://editor.p5js.org/codingtrain/sketches/vYgv7Xagg

let emitters = [];

//function mousePressed() {
  //emitters.push(new Emitter(mouseX, mouseY));
//}

function setup() {
  createCanvas(400, 400);
  emitters.push(new Emitter(200, 40));
}

function draw() {
  background(34,58,112);
  for (let emitter of emitters) {
    emitter.emit(1);
    emitter.show();
    emitter.update();
  }
}
function drawStar(x, y, r, prickleNum) {
  let vertexNum = prickleNum * 2; 
  let R; 
  push();
  translate(x, y);
  rotate(-90);

  beginShape();
  for (let i = 0; i < vertexNum; i++) {
    R = i % 2 == 0 ? r : r / 2;

    vertex(R * cos(radians(360 * i / vertexNum)), R * sin(radians(360 * i / vertexNum)));
  }
  endShape(CLOSE);

  pop();
}
