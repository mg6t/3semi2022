//
let mover;
let attractor;

function setup() {
  createCanvas(400, 400);
  mover = new Mover(50, 50 ,50);
  attractor = new Attractor(200,200,50);
  background(0);
}

function draw() {
  background(0,1);
  mover.update();
  mover.show();

  attractor.attract(mover);
  attractor.show();
}
