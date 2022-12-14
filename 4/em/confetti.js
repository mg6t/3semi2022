

class Confetti extends Particle {
  constructor(x, y) {
    super(x, y);
    this.angle = random(TWO_PI);
  }

  show() {
    noStroke();
    fill(52,238, this.lifetime, this.lifetime*2);
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    drawStar(0,0,25,5);
    pop();
  }
}
