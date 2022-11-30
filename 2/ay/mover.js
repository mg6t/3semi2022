class Mover {
  constructor(x, y, m) {
    this.mass = m;
    this.radius = m * 8;
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  display(r,g,b) {
    stroke(0);
    strokeWeight(2);
    fill(r,g,b);
    ellipse(this.position.x, this.position.y, this.radius * 2);
  }

  //basketball
  displayA(r,g,b) {
    stroke(r,g,b);
    strokeWeight(2);
    arc(this.position.x, this.position.y, this.radius*2, this.radius, 0, TWO_PI);
    line(this.position.x-this.radius, this.position.y, this.position.x+this.radius, this.position.y);
  }
  //tennisball
  displayB(r,g,b) {
    stroke(r,g,b);
    strokeWeight(5);
    arc(this.position.x, this.position.y-this.radius+5, this.radius, this.radius*2, TWO_PI*360/20, PI);
  }



  checkEdges() {
    if (this.position.x > width - this.radius) {
      this.position.x = width - this.radius;
      this.velocity.x *= -1;
    } else if (this.position.x < this.radius) {
      this.position.x = this.radius;
      this.velocity.x *= -1;
    }
    if (this.position.y > height - this.radius) {
      this.position.y = height - this.radius;
      this.velocity.y *= -1;
    }
  }

}
