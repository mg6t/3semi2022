class Mover{
  constructor(x, y, mic, audioContext){
    this.pos = createVector(x, y); // 位置
    this.vel = createVector(0, 0); // 速度
    this.acc = createVector(0, 0); // 加速度

    this.frequency = 0; // 周波数
    this.amplitude = 0; // 音量
    this.mic = mic; // マイク
    this.pitch = 0;
    this.audioContext = audioContext; // オーディオコンテキスト
    this.bool = false; // モデルを初期化したかどうか
    this.makeSound = false; // 音を一度でも発したかどうか
  }

  update(){
    if(this.bool){ // モデルの初期化が終わっていたら
      this.getPitching(); // ピッチ計算

      if(this.frequency != 0){ // もしピッチが0でなければ
        this.acc = createVector(this.mic.getLevel(), - (this.frequency - 250) / 100000); // x軸方向の加速度は音量, y軸方向の加速度はピッチ
      }else if(this.makeSound){ // 一回でも音を発していれば(もし発していなければ、三角形は動かない)
        this.acc = createVector(-0.005, 0.001); // 減速するように
      }
      this.vel.x = Math.min(this.vel.x, 3); // 速度が大きくなりすぎないようにする(最大3)
      this.vel.y = Math.min(this.vel.y, 3);
      this.vel.add(this.acc);
      this.pos.add(this.vel);
    }
  }

  show(){
    // 描く時の色や太さ設定(白, 2px)
    stroke(255);
    strokeWeight(2);
    fill(255);

    push();
    rotate(this.vel.heading()); // 速度方向に回転
    triangle(this.pos.x, this.pos.y - 10, this.pos.x, this.pos.y + 10, this.pos.x + 30, this.pos.y); // 三角形を描く
    pop();
  }

  // 黒い領域内を三角形が動いているかチェック
  edge(){
    let now_i = Math.ceil((this.pos.x / 40) - 1); // 左から数えて何番目の長方形の付近に三角形がいるか
    // console.log("x: " + this.pos.x + ", now_i: " + now_i);
    if(1 <= now_i && now_i < 5){ // 4番目の長方形までか、それ以降かで分岐(y軸方向のチェックが異なるため)(0番目と5番目は黒い領域内を動かすのが難しいため、端判定していない)
      if(this.pos.y < 140 + now_i * 20 || this.pos.y >= 260 + now_i * 20){ // y軸方向のチェック
        this.pos.x = 0;
        this.pos.y = 200;
      }
    }
    else if(6 <= now_i){
      if(this.pos.y <= (340 - now_i * 20) || this.pos.y >= 460 - now_i * 20){ // y軸方向のチェック
        this.pos.x = 0;
        this.pos.y = 200;
      }
    }
  }

  // ピッチを取得するためのモデルを初期化(crepeを使っている)
  startPitch(){
    // 参考: https://learn.ml5js.org/#/reference/pitch-detection?id=pitchdetection
    this.pitch = ml5.pitchDetection(
      './model/', // トレーニング済みモデル
      this.audioContext, // オーディオコンテキスト
      this.mic.stream, // ストリーム
    );

    this.bool = true;
  }

  // ピッチ取得
  getPitching() {
    this.pitch.getPitch(function(err, frequency){
      if (frequency){ // 周波数を読み込めたら
        this.frequency = frequency;
        this.makeSound = true; // 音を一回でも発したらtrue
      }else{
        this.frequency = 0;
      }
    }.bind(this)); // ないとエラーが出てしまうため、書いた
  }
  
}