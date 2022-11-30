let mover;

// 最初に一回呼び出される
function setup() {
  createCanvas(400, 400); // 400*400でキャンバスを作る
  mover = new Mover(200, 200); // 円の動きは200, 200から始める
}

// フレームごとに呼び出される
function draw() {
  // 背景は黒
  background(0);
  
  if(mouseIsPressed){ // マウスが押されたら
    if(mouseX < width / 2){ // 左側なら
      // 左に風力
      let wind = createVector(-0.1, 0);
      mover.applyForce(wind);
    }else{ // 右側なら
      // 右に風力
      let wind = createVector(0.1, 0);
      mover.applyForce(wind);
    }
  }

  // 重力
  let gravity = createVector(0, 0.2);
  mover.applyForce(gravity);

  mover.update(); // 速度や位置を計算
  mover.edges(); // 端判定
  mover.check_edges();
  mover.show(); // 表示
}