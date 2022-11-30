class Walker {
    constructor(x, y) {
        // 原点を左上に移動した
      this.pos = createVector(x-200, y-120);
    }
  
    update() {
      this.pos.x = this.pos.x + random(-20, 20);
      this.pos.y = this.pos.y + random(-10, -10);
    }
  
    show() {
      stroke(255, 100);
      strokeWeight(3); // 点を太くした
      point(this.pos.x, this.pos.y);
    }
}

class Walker2 {
    constructor(x, y) {
        // 原点を右上に移動した
      this.pos = createVector(x+200, y-120);
    }
  
    update() {
      this.pos.x = this.pos.x + random(-20, 20);
      this.pos.y = this.pos.y + random(-10, 10);
    }
  
    show() {
      stroke(255, 100);
      strokeWeight(3); // 点を太くした
      point(this.pos.x, this.pos.y);
    }
}