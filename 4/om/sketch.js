let emitters = []; // Emitterの配列
let mover; // 円
let color; // 花火の色
function mousePressed(){
  // 花火の色をランダムに決める
  color = createVector(random(0, 255), random(0, 255), random(0, 255));
  // Moverをインスタンス化
  mover = new Mover(mouseX, mouseY, color);
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  // 黒の背景
  background(0);

  // 重力
  let gravity = createVector(0, 0.6);
  if(mover){
    mover.applyForce(gravity); // 重力を加える
    mover.update(); // 位置や速度を計算
    mover.show(); // 表示

    // moverの現在位置と初期位置を比較
    if(mover.edges()){
      // Emitter作成
      if(mover.pos.y >= 150){
        emitters.push(new Emitter(mover.pos.x, mover.pos.y - 100, color));
      }else{ // Emitterを作成する際、Emitterのy方向の初期位置が小さすぎるとEmitterが見えなくなってしまうため、分けた
        emitters.push(new Emitter(mover.pos.x, 50, color));
      }
    }
  }

  for (let emitter of emitters){
    emitter.emit(5); // 毎フレーム5つずつパーティクル(円)を新規に作成
    emitter.show(); // 表示
    emitter.update(); // 位置や速度等を更新
  }
}