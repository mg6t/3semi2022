let pursuer;
let target;

// add: スコア
let score = 0;

// add: 画像
let moguraImg;
let hammerImg;

// add: 画像を読み込む
function preload(){
  moguraImg = loadImage('data/mogura.png');
  hammerImg = loadImage('data/pikopiko_hummer.png');
}

function setup() {
  createCanvas(400, 400);
  pursuer = new Vehicle(100, 100, hammerImg);
  target = new Target(200, 100, moguraImg);
}

function draw() {
  background(0);

  // add: 色の設定
  stroke(255); // 枠線色を白色に設定
  strokeWeight(2); // 太さを2ピクセルに設定
  fill(255); //　塗りつぶす色を白色に設定

  // add: モグラが出てくるところを追加
  ellipseMode(CORNER); // 楕円の左上の座標を指定するようにする
  ellipse(target.r *  5, target.r * 10, target.r * 5, 10); // 左上
  ellipse(target.r * 15, target.r * 10, target.r * 5, 10); // 右上
  ellipse(target.r *  5, target.r * 20, target.r * 5, 10); // 左下
  ellipse(target.r * 15, target.r * 20, target.r * 5, 10); // 右下


  ellipseMode(CENTER); // 設定を戻す

  // 進む力(ベクトル）を計算
  let steering = pursuer.pursue(target);
  // 進む力を加える
  pursuer.applyForce(steering);
  
  // 追う人とターゲット間の距離を求める
  let d = p5.Vector.dist(pursuer.pos, target.pos);
  
  if (d < pursuer.r + target.r){
    score = score + 1; // add: スコアを加算
    target = new Target(random(width), random(height), moguraImg);
    pursuer.pos.set(width/2, height/2);
  }

  noStroke();
  text("Score: " + score, 25, 50); //　スコアを表示

  
  pursuer.update();
  pursuer.show();
  
  target.edges();
  target.update();
  target.show();
}
