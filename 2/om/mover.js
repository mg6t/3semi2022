class Mover{
  constructor(x, y){
    // 位置：初期位置x, yを指定してベクトルを作成する
    this.pos = createVector(x, y);
    
    // 速度：初期位置0,0を指定してベクトルを作成する
    // this.vel = p5.Vector.random2D();
    // this.vel.mult(random(3));
    this.vel = createVector(0, 0);
    
    // 加速度: 初期位置0,0を指定してベクトルを作成する
    this.acc = createVector(0, 0);
    
    // 円の半径は16
    this.r = 8;

    // カップの左のx位置(ランダム値)
    this.random_pos = random(10, 350);
  }
  
  // ニュートンの第2法則を実装する
  applyForce(force){
    // this.acc = force; // 簡素化されたver
    this.acc.add(force);
  }
  
  // 円が端にぶつかったタイミングを見張る関数
  edges(){
    // 下端
    if (this.pos.y > height - this.r){
      this.pos.y = height - this.r;
      this.vel.y *= -1;
    }

    // 右端
    if (this.pos.x > width - this.r){
      this.pos.x = width - this.r;
      this.vel.x *= -1;
    }
    // 左端
    else  if (this.pos.x <= this.r){
      this.pos.x = this.r;
      this.vel.x *= -1;
    }
    
  }

  // カップに当たったかどうか判定
  check_edges(){
    // 高さ
    if (this.pos.y >= 350 && this.pos.y <= 400){
      // 右端 左端
      if (this.pos.x >= this.random_pos - this.r && this.pos.x <= this.random_pos + this.r){
        textSize(30);
        fill(255);
        text("Clear!!", width / 2 - 80, height / 2);
        noLoop();
      }
    }
  }

  update() {
    /*
    // 初期位置をマウスのカーソル位置にしてベクトル作成
    var mouse = createVector(mouseX,mouseY);
    
    // static function
    // mouse - posの結果をaccに入れる
    this.acc = p5.Vector.sub(mouse,this.pos);
    
    // ベクトルの大きさが0.1になるよう調整
    this.acc.setMag(0.1);
    */

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0); // 力を取り除く
  }

  show() {
    stroke(255); // 枠線色を黒に設定
    strokeWeight(2); // 太さを2ピクセルに設定
    fill(255, 100); //　塗りつぶす色を透明度100の白色に設定 
    // ellipse(this.pos.x, this.pos.y, 32, 32); // 中心を位置に合わせて、半径32で円を描く
    ellipse(this.pos.x, this.pos.y, this.r * 2); // 中心を位置に合わせて、半径32で円を描く

    // カップ
    line(this.random_pos, 350, this.random_pos, 400);
    line(this.random_pos + 40, 350, this.random_pos + 40, 400);
  }
}
