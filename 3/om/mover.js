// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

class Mover {
  constructor() {
    this.position = createVector(270, 50); // 位置
    this.velocity = createVector(0, 0); // 速度
    this.acceleration = 0; // 加速度
    this.topspeed = 4; // 最大速度

    // 以下の3変数は利用していない
    this.xoff = 1000;
    this.yoff = 0;
    this.r = 16;
  }

  // 位置や速度、加速度の計算
  update() {
    // マウスの位置でベクトルを作る
    let mouse = createVector(mouseX, mouseY);
    // dirベクトル = マウスの位置 - 現在の位置
    let dir = p5.Vector.sub(mouse, this.position);
    // ベクトルを正規化
    dir.normalize();
    // 0.5の長さに縮小
    dir.mult(0.5);
    // 加速度にdirベクトルを代入
    this.acceleration = dir;

    // 速度に加速度を足していく
    this.velocity.add(this.acceleration);

    // 速度の最大は4
    this.velocity.limit(this.topspeed);

    // 位置に速度を足していく
    this.position.add(this.velocity);
  }

  display() {
    // heading: 2次元ベクトルの回転角度(ここでは、angleModeを指定していないため、ラジアン)
    // 速度ベクトルの回転角度
    let angle = this.velocity.heading();

    // 枠線は白
    stroke(255);
    noFill();

    // 迷路
    const path_len = 60; // 迷路の道幅
    // 外枠
    // 上辺
    line(60, 50, 240, 50);
    line(240 + path_len, 50, 600, 50);
    textSize(15);
    text("start", 240 + 10, 50);
    // 左辺
    line(60, 50, 60, 300);
    // 右辺
    line(600, 50, 600, 300);
    // 下辺
    line(60, 300, path_len*6, 300);
    line(path_len*7, 300, 600, 300);
    text("goal", path_len*6 + 10, 300);

    // 正解の道
    line(path_len*6, path_len*4, path_len*6, path_len*5);
    line(path_len*6, path_len*4, path_len*8, path_len*4);
    line(path_len*6, path_len*4, path_len*8, path_len*4);
    line(path_len*8, path_len*3, path_len*8, path_len*4);
    line(path_len*5, path_len*3, path_len*8, path_len*3);
    line(path_len*5, path_len*3, path_len*5, path_len*2);
    line(path_len*3, path_len*2, path_len*5, path_len*2);
    line(path_len*3, path_len*2, path_len*3, path_len*4);
    line(path_len*2, path_len*4, path_len*3, path_len*4);
    line(path_len*2, path_len*2, path_len*2, path_len*4);

    // フェイクの道
    line(path_len*2 - 30, path_len*2, path_len*2 + 30, path_len*2);
    rectMode(CORNER);
    rect(path_len*4 - 30, path_len*3 - 30, path_len, path_len);
    rect(path_len*5, path_len*4, path_len / 2, path_len / 2);
    rect(path_len*4 - 30, path_len*3 - 30, path_len, path_len);
    line(path_len*6, path_len*2, path_len*9, path_len*2);
    // line(path_len*6, path_len*2, path_len*8, path_len*2);
    line(path_len*9, path_len*2, path_len*9, path_len*4);
    line(path_len*9, path_len*4, path_len*10, path_len*4);

    // 枠線は黒
    stroke(0);
    // 枠線の太さは2ピクセル
    strokeWeight(2);
    // 灰色で塗り潰す
    fill(127);

    // これまでの設定を保存
    push();

    // rectメソッドでは、図形の中心点を指定するようにする。
    // rect(中心のx座標, 中心のy座標, 幅の半分, 高さの半分)
    rectMode(CENTER);

    // 現在位置を原点として
    translate(this.position.x, this.position.y);
    // angleラジアン回転する
    rotate(angle);
    // 現在位置に30*10の長方形を描く
    rect(0, 0, 30, 10);

    // 保存していた設定を復元
    pop();
  }

  checkEdges() {
    // goalに着いたら終了
    const path_len = 60;
    if(300 - 10< this.position.y && this.position.y < 300 + 10){
      if(path_len*6 - 10 < this.position.x && this.position.x < path_len*7 + 10){
        stroke(255);
        fill(255);
        textSize(100);
        text("Clear!!", width / 2 - 150, height / 2);
        noLoop();
      }
    }

    // 迷路の外枠にぶつかったら、startに戻す
    if(this.position.x < 60 || this.position.x > 600 || this.position.y < 50 || this.position.y > 300){
      this.position.x = 270;
      this.position.y = 50;
    }

    // 迷路の中で正解の道の枠の一部にぶつかったらstartに戻す
    if(this.position.x > 60*6 && this.position.x < 60*8 && ((this.position.y >= 2*60 - 5) && (this.position.y <= 2*60 + 5)|| (this.position.y >= 3*60 - 5) && (this.position.y <= 3*60 + 5))){
      this.position.x = 270;
      this.position.y = 50;
    }

    /*
    if (this.position.x > width) {
      // もしxが右端を超えたら左端へ
      this.position.x = 0;
    } else if (this.position.x < 0) {
      // もしxが左端より左に行ったら、右端へ
      this.position.x = width;
    }

    if (this.position.y > height) {
      // もしyが下端を超えたら上端へ
      this.position.y = 0;
    } else if (this.position.y < 0) {
      // もしyが上端を超えたら下端へ
      this.position.y = height;
    }
    */
  }
}