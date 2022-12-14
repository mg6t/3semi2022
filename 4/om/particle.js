class Particle{
  constructor(x, y, color){
    // 位置：初期位置x, yを指定してベクトルを作成する
    this.pos = createVector(x, y);
    
    // 速度：ランダムな角度を指定してベクトルを作成し、30倍する。
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(0.05, 0.1));
    this.vel.mult(30);
    this.vel.mult(Math.random() < 0.5 ? -1: 1); // 上方向の速度か、下方向の速度かをランダムにする
    
    // 加速度: 初期位置をランダムに指定してベクトルを作成する
    this.acc = p5.Vector.random2D();
    this.vel.mult(random(0.5, 2));
    
    // 半径
    this.r = 1;
    
    // 透明度
    this.lifetime = 100;

    // 色
    this.color = color;
  }
  
  // パーティクルを消滅させるかどうか判断する
  finished(){
    return (this.lifetime > 230);
  }
  
  // ニュートンの第2法則を実装する
  applyForce(force){
    // this.acc = force; // 簡素化されたver
    this.acc.add(force);
  }

  //　更新
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0); // 力を取り除く
    this.lifetime += 5; // 時間の経過とともにアルファ値を増やす
  }

  // 表示
  show() {
    noStroke(); // 枠線は描かない
    fill(this.color.x, this.color.y, this.color.z, this.lifetime); //　塗りつぶす色を透明度を変えながらコンストラクタで指定した色に設定 
    ellipse(this.pos.x, this.pos.y, this.r * 2); // 中心を位置に合わせて、直径r*2で円を描く

  }
}
