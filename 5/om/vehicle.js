class Vehicle{
  constructor(x, y, img){
    // 位置：初期位置x, yを指定してベクトルを作成する
    this.pos = createVector(x, y);
    
    // 速度：初期位置0,0を指定してベクトルを作成する
    this.vel = createVector(0, 0);
    
    // 加速度: 初期位置0,0を指定してベクトルを作成する
    this.acc = createVector(0, 0);
    
    // 最大速度
    this.maxSpeed = 10;
    
    // 最大の力
    this.maxForce = 0.25;
    
    // 半径
    this.r = 16;

    // add: 画像
    this.img = img;
  }
  
  evade(vehicle){
    let pursuit = this.pursue(vehicle);
    pursuit.mult(-1);
    return pursuit;
  }
  
  pursue(vehicle){
    let target = vehicle.pos.copy(); // 乗り物の位置をコピー
    let prediction = vehicle.vel.copy();
     prediction.mult(10);
    target.add(prediction);
    
    // fill(0, 255, 0);
    // circle(target.x, target.y, 16);
    return this.seek(target);
  }
  
  flee(target){
    // ターゲットに向かう力を-1倍する(ベクトルの方向を逆向きにする)
    return this.seek(target).mult(-1);
  }
  
  // calcurate the steering force
  seek(target){
    // force = target - 乗り物の現在位置
    let force = p5.Vector.sub(target, this.pos);
    
    // 正規化して、4倍する
    force.setMag(this.maxSpeed);
    
    // force = force - 乗り物の速度
    force.sub(this.vel);
    
    //ベクトルの大きさの最大値を設定
    force.limit(this.maxForce);
    
    // forceを-1倍
    // force.mult(-1);
    
    // forceをVehicleに加える
    // this.applyForce(force);
    return force;
  }
  
  // ニュートンの第2法則を実装
  applyForce(force){
    this.acc.add(force);
  }
  
  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.set(0, 0); // 力を取り除く
  }

  show() {
    stroke('#d9333f'); // 枠線色を赤色に設定
    strokeWeight(2); // 太さを2ピクセルに設定
    fill('#d9333f'); //　塗りつぶす色を赤色に設定
    
    push(); // これまでの図形の設定を保存
    translate(this.pos.x, this.pos.y); // 現在位置に原点を移動して
    rotate(this.vel.heading()); // 速度に従って、回転させる
    // triangle(-this.r, -this.r/2, -this.r, this.r/2, this.r, 0); // triangle(x1, y1, x2, y2, x3, y3)
    imageMode(CENTER);
    image(this.img, 0, 0, this.r*2, this.r*2); // change: ピコピコハンマーを表示
    pop(); // pushしたときの設定に復元する
  }
  
  edges() {
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    } else if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }
    if (this.pos.y > height + this.r) {
      this.pos.y = -this.r;
    } else if (this.pos.y < -this.r) {
      this.pos.y = height + this.r;
    }
  }
}


class Target extends Vehicle{
  constructor(x, y, img){  
    super(x, y, img);
    // this.vel = p5.Vector.random2D();
    // this.vel.mult(5);

    // change: 縦方向だけに動くようにする。
    this.vel = createVector(0, -random(0.5, 1)).mult(3);

    // add: モグラがどの穴にいるのか情報(0: 左上, 1: 右上, 2: 左下, 3: 右下)
    this.holeNum = random([0, 1, 2, 3]); // ランダムに決める

    // add: モグラがどの穴にいるのかに従って、初期位置を決める
    this.arrayX = [this.r * 7.5, this.r * 17.5, this.r * 7.5, this.r * 17.5];
    this.arrayY = [this.r * 10, this.r * 10, this.r * 20, this.r * 20];
    this.pos = createVector(this.arrayX[this.holeNum], this.arrayY[this.holeNum]);
  }
  
  // showメソッドをオーバーライド
  show(){
    stroke('#745030'); // change: 枠線色を茶色に設定
    strokeWeight(2); // 太さを2ピクセルに設定
    fill('#745030'); //　change: 塗りつぶす色を茶色に設定
    
    push(); // これまでの図形の設定を保存
    translate(this.pos.x, this.pos.y); // 現在位置に原点を移動して
    imageMode(CENTER);
    image(this.img, 0, 0, this.r*2, this.r*2); // change: モグラを表示
    // circle(0, 0, this.r*2); // 現在位置に半径rの円を描く
    pop(); // pushしたときの設定に復元する
  }

  // add: edgeメソッドをオーバーライド
  edges() {
    if (this.holeNum == 0 || this.holeNum == 1){ // 上段の穴なら
      if (this.vel.y < 0 && this.pos.y < this.r * 5){ // 今上向きに動いていて、モグラの位置yがthis.r * 5より小さければ
        this.vel = createVector(0, random(0.5, 1)).mult(3); // 下向きの速度をランダムに作る
      }else if(this.vel.y > 0 && this.pos.y > this.r * 12){ // 今下向きに動いていて、モグラの位置がthis.r * 11より大きければ
        // 穴の位置を変える
        noLoop();
        this.changeHole();
        loop();
      }
    }else{// 下段の穴なら
      if (this.vel.y < 0 && this.pos.y < this.r * 15){ // 今上向きに動いていて、モグラの位置yがthis.r * 15より小さければ
        this.vel = createVector(0, random(0.5, 1)).mult(3); // 下向きの速度をランダムに作る
      }else if(this.vel.y > 0 && this.pos.y > this.r * 22){ // 今下向きに動いていて、モグラの位置がthis.r * 21より大きければ
        // 穴の位置を変える
        noLoop();
        this.changeHole();
        loop();
      }
    }
  }

  // 穴の位置を変える
  changeHole(){
    this.holeNum = random([0, 1, 2, 3]); // ランダムに決める
    this.pos = createVector(this.arrayX[this.holeNum], this.arrayY[this.holeNum]);
  }
}