let vehicle;

function setup() {
  createCanvas(800, 600);
  vehicle = new Vehicle(100, 100);
  background(0,50,0);
}

function draw() {
  vehicle.wander();
  vehicle.update();
  vehicle.show();
  vehicle.edges();
  stroke(0);
  fill(255);

  textSize(50);
  text("Merry Christmas",200,300);
}
