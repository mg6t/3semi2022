// Daniel Shiffman
// The Nature of Code

let movers = [];
let mu = 0.1;

function setup() {
  createCanvas(400, 600);
  let total = 10;
  for (let i = 0; i < total; i++) {
    let spacing = width / total;
    movers[i] = new Mover(0.5 * spacing + i * spacing, 10, 8);
  }
}

function draw() {
  background('#87cefa');

  fill('#0000cd');
  noStroke();
  rectMode(CORNER);
  rect(0, height / 5, width, height / 5);
  fill('#000080');
  noStroke();
  rectMode(CORNER);
  rect(0, (2*height) / 5, width, height / 5);
  fill('#483d8b');
  noStroke();
  rectMode(CORNER);
  rect(0, (3*height) / 5, width, height / 5);
  fill('#4b0082');
  noStroke();
  rectMode(CORNER);
  rect(0, (4*height) / 5, width, height / 5);

  for (let mover of movers) {
    if (mouseIsPressed) {
      let wind = createVector(0.1, 0);
      mover.applyForce(wind);
    }
    let gravity = createVector(0, 0.2);
    let weight = p5.Vector.mult(gravity, mover.mass);
    mover.applyForce(weight);

    if (mover.pos.y > height / 5 && mover.pos.y < (height *2)/5) {
      mover.drag(0.2);
    }
    if (mover.pos.y > (2*height) / 5 && mover.pos.y < (height *3)/5) {
      mover.drag(1);
    }
    if (mover.pos.y > (3*height) / 5 && mover.pos.y < (height *4)/5) {
      mover.drag(2);
    }
    if (mover.pos.y > (4*height) / 5 ) {
      mover.drag(0);
    }
    mover.update();
    mover.edges();
    mover.show();
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