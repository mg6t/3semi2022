class Vehicle {
  constructor(x, y, img1, img2) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxSpeed = 4;
    this.maxForce = 1;
    this.img1 = img1;
    this.img2 = img2;
  }

  seek(target) {
    let force = p5.Vector.sub(target, this.pos);
    force.setMag(this.maxSpeed);
    force.sub(this.vel);
    force.limit(this.maxForce);
    this.applyForce(force);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show(){
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    if(this.vel.x<0){//速度ベクトルのx成分がマイナス(左移動)のとき
      rotate(this.vel.heading());
      image(this.img1, 0, 0);//左向き画像
    }else{//速度ベクトルのx成分がプラス(右移動)のとき
      rotate(this.vel.heading());
      image(this.img2, 0, 0);//右向き画像
    }
    pop();
  }

}
