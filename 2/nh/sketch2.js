// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Forces (Gravity and Fluid Resistence) with Vectors

// Demonstration of multiple force acting on bodies (Mover class)
// Bodies experience gravity continuously
// Bodies experience fluid resistance when in "water"

// Five moving bodies
let movers = [];

// Liquid
let liquid;

function setup() {
  createCanvas(640, 360);
  reset();
  // Create liquid object
  liquid = new Liquid(0, height/4, width, height, 0.1);
  createP("click mouse to reset");
}

function draw() {
  background(0, 160, 250);

  // Draw water
  liquid.display();
  ellipse(400, height - 50, 100, 100);
  ellipse(400, height - 125, 70, 70);
  noStroke();
  fill(0);
  ellipse(390, height - 125, 10, 10);
  ellipse(410, height - 125, 10, 10);
  fill(255, 0, 0);
  triangle(380, height - 155, 420, height - 155, 400, height-190);
  for (let i = 0; i < movers.length; i++) {
    
    // Is the Mover in the liquid?
    if (liquid.contains(movers[i])) {
      // Calculate drag force
      let dragForce = liquid.calculateDrag(movers[i]);
      // Apply drag force to Mover
      movers[i].applyForce(dragForce);
    }

    // Gravity is scaled by mass here!
    let gravity = createVector(0, 0.1 * movers[i].mass);
    // Apply gravity
    movers[i].applyForce(gravity);

    // Update and display
    movers[i].update();
    movers[i].display();
    movers[i].checkEdges();
  }

}


// Not working???
function mousePressed() {
  reset();
}

// Restart all the Mover objects randomly
function reset() {
  for (let i = 0; i < 100; i++) {
    movers[i] = new Mover(20 + i * 20, 0, random(0.5, 3));
  }
}