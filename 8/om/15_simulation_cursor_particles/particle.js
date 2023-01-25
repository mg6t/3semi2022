class Particle {
  constructor(x, y) {
    /*
    this.px = x; 
    this.py = y; 
    this.vx = 0; 
    this.vy = 0;
    */
    this.pos = createVector(x, y); // 位置
    this.vel = createVector(0, 0); // 速度 
  }

  draw() {
    noStroke(); // 線を描かない
    fill(0); // 黒で塗り潰す
    // ellipse(this.px, this.py, 8, 8);
    ellipse(this.pos.x, this.pos.y, 8, 8); // 円を描く ellipse(中心のx座標, 中心のy座標, 横幅, 縦幅);
  }

  // 反発するように
  repel() {
    let dx = mouseX - this.pos.x; // マウス位置とParticleの位置の差分(x軸方向) float dx = mouseX - px
    let dy = mouseY - this.pos.y; // マウス位置とParticleの位置の差分(y軸方向) float dy = mouseY - py
    let dh = sqrt(dx*dx + dy*dy); // マウス位置とParticleの位置の距離
    if (dh > 0) { // 距離が0より大きければ
      let fx = dx/(dh*dh); 
      let fy = dy/(dh*dh);
      let ax = fx * 4; // x軸方向の加速度?
      let ay = fy * 4; // y軸方向の加速度?

      // 速度の計算(加速度を加算)
      this.vel.x += 0 - ax; // マウスからパーティクルが離れていく方向
      this.vel.y += 0 - ay; 
      this.vel.x *= 0.95; 
      this.vel.y *= 0.95; 

      // 位置の計算(速度を加算)
      this.pos.x += this.vel.x; 
      this.pos.y += this.vel.y;
    }
  }

  // 引きつける方向
  attract() {
    let dx = mouseX - this.pos.x; // マウス位置とParticleの位置の差分(x軸方向) float dx = mouseX - px
    let dy = mouseY - this.pos.y; // マウス位置とParticleの位置の差分(y軸方向) float dy = mouseY - py
    let dh = sqrt(dx*dx + dy*dy); // マウス位置とParticleの位置の距離
    if (dh > 0) { // 距離が0より大きければ
      let fx = dx/(dh*dh); 
      let fy = dy/(dh*dh);
      let ax = fx * 4; // x軸方向の加速度?
      let ay = fy * 4; // y軸方向の加速度?

      // 速度の計算(加速度を加算)
      this.vel.x += 0 + ax; // マウスからパーティクルが離れていく方向
      this.vel.y += 0 + ay; 
      this.vel.x *= 0.95; 
      this.vel.y *= 0.95; 

      // 位置の計算(速度を加算)
      this.pos.x += this.vel.x; 
      this.pos.y += this.vel.y;
    }
  }
}
