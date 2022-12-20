let v;

function setup() {
  createCanvas(400, 400);
  v = new Vehicle(width / 2, height / 2);
}

function draw() {
  background(0,128,128);

  let mouse = createVector(mouseX, mouseY);

  // Draw an ellipse at the mouse position
  fill(255,250,205);
  stroke(10);
  strokeWeight(1);
  ellipse(mouse.x, mouse.y, 48, 48);

  // Call the appropriate steering behaviors for our agents
  v.seek(mouse);
  v.update();
  v.display();

}
