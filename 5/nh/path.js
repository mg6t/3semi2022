// Path Following (Path Following)
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/LrnR6dc2IfM
// https://thecodingtrain.com/learning/nature-of-code/5.7-path-following.html

// Path Following: https://editor.p5js.org/codingtrain/sketches/dqM054vBV
// Complex Path: https://editor.p5js.org/codingtrain/sketches/2FFzvxwVt

const offset = 60;
let scalar = 2;
const speed = 0.05;

class Path {
  constructor(x1, y1, x2, y2) {
    this.start = createVector(x1, y1);
    this.end = createVector(x2, y2);
    this.radius = 20;

  }

  show() {
    stroke(255);
    strokeWeight(2);
    noFill();
    ellipse(400, 100, 100, 100);

    /*stroke(255, 100);
    strokeWeight(this.radius * 2);
    line(this.start.x, this.start.y, this.end.x, this.end.y);*/

  // 花
  /*noFill();
  strokeWeight(2);
  stroke(255);
  drawFlower(width / 2, height / 2, 100);*/
  }
}

