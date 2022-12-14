class Heart extends Particle {
    constructor(x, y) {
      super(x, y);
      this.angle = random(TWO_PI);
    }
  
    show() {
      noStroke();
      fill(255, this.lifetime);
      push();
      translate(this.x, this.y);
      rotate(this.angle);
      //square(0, 0, this.r * 2);
      //triangle(0,0,1,0,1,1);
      bezier(110, 50, 148, 14, 190, 80, 111, 110);//right
      bezier(110, 50, 75, 8, 25, 80, 111, 110);//left
      pop();
    }
  }
  