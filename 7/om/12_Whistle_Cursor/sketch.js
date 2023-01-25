// 参考
// https://himco.jp/2019/01/01/5_1%EF%BC%9A%E3%83%94%E3%83%83%E3%83%81%E6%8A%BD%E5%87%BApitch-detection/
// https://editor.p5js.org/ml5/sketches/H8iUid_ADl

// ホイッスルカーソル
// リアルタイムの単音オーディオ信号のピッチを推定するツールを見つけてください。
// ユーザーの口笛のピッチを使用して宇宙船を上下に操縦するインタラクティブなゲームを作成します。

let audioContext; // オーディオコンテキスト
let mover; // 三角形
let mic; // マイク
let bool = false; // オーディオコンテキストを得たかどうか

function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn(); // マイクから入力したオーディオを取得
  mic.start(); // マイクをオンに
  frameRate(60); // フレームレートを遅くする
}

function draw() {
  background(230);

  // 描く時の色や太さ設定(黒, 2px) 黒い長方形を描く
  stroke(0);
  strokeWeight(2);
  fill(0);

  for(let i = 0; i <= 4; i+=1){
    rect(i * 40, 150 + i * 20, 40, 100);
  }

  for(let j = 5; j < 10; j+=1){
    rect(j * 40, 350 - j * 20, 40, 100);
  }

  // 1会クリックしてオーディオコンテキストを得ていたら
  if(bool){
    mover.update(); // 速度や位置計算
    mover.show(); // 表示
    mover.edge(); // 端判定
  }else{
    // 得ていなければ、メッセージを表示(黒でテキストサイズ20)
    stroke(0);
    fill(0);
    textSize(20);
    text("please click.", 125, 380); // メッセージ, x, y
  }
}

// 1回クリックしてからオーディオコンテキストを得る
function touchStarted() {
  if (getAudioContext().state !== 'running') { // オーディオコンテキストを得て、動作中でなければ
    audioContext = getAudioContext(); // このスケッチのオーディオコンテキストを得る
    getAudioContext().resume(); // 再開
    mover = new Mover(0, 200, mic, audioContext); // moverをインスタンス化
    mover.startPitch(); // ピッチを取得するためのモデルを初期化
    bool = true; // オーディオコンテキストを得た
  }
}