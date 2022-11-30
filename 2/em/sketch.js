// Daniel Shiffman
// The Nature of Code

let movers = [];
let mu = 0.1;
let dragC = 0.2;

function setup() {
  createCanvas(400, 400);
  let total = 10;
  for (let i = 0; i < total; i++) {
    let spacing = width / total;
    movers[i] = new Mover(0.5 * spacing + i * spacing, 10, 8);
  }
}

function draw() {
  background(0);

  fill(255, 125);
  noStroke();
  rectMode(CORNER);
  rect(0, height / 2, width, height / 2);

  for (let mover of movers) {
    if (mouseIsPressed) {
      let wind = createVector(0.1, 0);
      mover.applyForce(wind);
    }
    let gravity = createVector(0, 0.2);
    let weight = p5.Vector.mult(gravity, mover.mass);
    mover.applyForce(weight);

    if (mover.pos.y > height / 2) {
      mover.drag(dragC);
    }
    mover.update();
    mover.edges();
    mover.show();
  }
}