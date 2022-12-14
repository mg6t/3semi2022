class Particle {
  constructor(position) {
    this.acceleration = createVector(0, 0.2);
    this.velocity = createVector(random(-0.5, 2), random(-1, 10));
    this.position = position.copy();
    this.lifespan = 255.0;
  }

  run(r,g,b) {
    this.update();
    this.display(r,g,b);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
  }

  display(r,g,b) {
    stroke(r,g,b, this.lifespan);
    strokeWeight(2);
    fill(r,g,b, this.lifespan);
    ellipse(this.position.x, this.position.y, 12, 12);
  }

  isDead() {
    if (this.lifespan < 0.0) {
      return true;
    } else {
      return false;
    }
  }
}
