

class Particle extends p5.Vector {
  constructor(x, y) {
    super(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(0.5, 2));
    this.acc = createVector(0, 0);
    this.r = 8;
    this.lifetime = 255;
  }

  finished() {
    return this.lifetime < 0;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.add(this.vel);
    this.acc.set(0, 0);
    this.lifetime -= 3;
  }

  show() {
    stroke(252, this.lifetime,this.lifetime, this.lifetime);
    strokeWeight(2);
    fill(252, this.lifetime,180, this.lifetime);
    triangle(0, 0, this.x*2, this.y*2, this.x*3, this.y)
  }
}
