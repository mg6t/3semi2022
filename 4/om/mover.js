class Mover{
  constructor(x, y, color){
    this.y = y; // 初期位置(y方向)
    this.pos = createVector(x, y); // 位置
    this.vel = createVector(0, -20); // 速度 y軸方向の速度が-20になっているため、上に上がっていく。
    this.acc = createVector(0, 0); // 加速度
    this.r = 5; //　半径
    this.color = color; // 色
    this.lifetime = 255; // 透明度
  }

  // ニュートンの第2法則を実装する
  applyForce(force){
    this.acc.add(force);
  }

  // Emitterを作るかどうかの判定
  edges(){
    // moverの初期位置が250以上なら、
    if(this.y >= 250){
      // moverの現在位置this.pos.yが初期位置this.yよりy軸方向に230以上250未満離れていればTrue、そうでなければFalseを返す
      return (this.pos.y >= this.y - 250 && this.pos.y <= this.y - 230);
    }else{
      // moverの現在位置this.pos.yが-20より大きく、0より小さければTrue、そうでなければFalseを返す
      return (this.pos.y <= 0 && this.pos.y >= -20);
    }
  }

  // 位置や速度を計算
  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0); // 力を取り除く
    this.lifetime -= 10; // 透明度を減らしていく
  }

  // 表示
  show(){
    noStroke(); // 枠線は書かない
    fill(this.color.x, this.color.y, this.color.z, this.lifetime); //　指定した色と透明度で塗りつぶす
    ellipse(this.pos.x, this.pos.y, this.r * 2); // 円を描く
  }
}