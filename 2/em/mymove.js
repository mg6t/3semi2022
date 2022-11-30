class Mover {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = m;
    let ratio = random(1);
    this.w = sqrt(this.mass) * 20 * ratio;
    this.h = sqrt(this.mass) * 20 * (1 - ratio);
  }


  drag(c) {
    // Direction of Drag
    let drag = this.vel.copy();
    drag.normalize();//正規化
    drag.mult(-1);//傾きをマイナスにする
    let speedSq = this.vel.magSq();//速さを二乗する
    let surfaceArea = this.w * 0.05;
    drag.setMag(c * speedSq * surfaceArea);
    this.applyForce(drag);
  }



  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }


  edges() {
    if (this.pos.y >= height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y *= -1;
    }

    if (this.pos.x >= width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -1;
    } else if (this.pos.x <= this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    }
  }


  update() {

    // let mouse = createVector(mouseX, mouseY);
    // this.acc = p5.Vector.sub(mouse, this.pos);
    // this.acc.setMag(0.1);

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    stroke(255);
    strokeWeight(2);
    fill(255, 100);
    //rectMode(CENTER);
    //rect(this.pos.x, this.pos.y, this.w, this.h);
    //drawStar(this.pos.x,this.pos.y,this.w,5);
    drawStar(this.pos.x,this.pos.y,this.w/1.3,5);
  }

  
}