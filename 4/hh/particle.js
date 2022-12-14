class Particle{
  constructor(x,y){
    this.pos=createVector(x,y);
    //this.vel=createVector(0,0);
    this.vel=p5.Vector.random2D();
    this.vel.mult(random(1,5));
    this.acc=createVector(0,0);
    this.r=1;
    this.lifetime=255;
    this.color=color;
  }
  finished(){
    return(this.lifetimr<0);
  }
  applyForce(force){
    this.acc.add(force);
  }

  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0,0);
    this.lifetime-=15;
  }

  show(){
    stroke(0,255,255,this.lifetime);
    strokeWeight(2);
    fill(255,255,0,this.lifetime);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
    if(this.finished()){
      fill(0,255,0);
    }
  }

}
