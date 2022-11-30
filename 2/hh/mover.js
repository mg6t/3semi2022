//
class Mover {
  constructor(x, y, m) {
    this.mass = m;
    this.r = sqrt(this.mass);
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector(0, 0);
  }
  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0,0);
  }

  show() {
    stroke(234,145,152);
    strokeWeight(2);
    fill(234,145,152);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}
