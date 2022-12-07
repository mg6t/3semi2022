// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let mover;

function setup() {
  createCanvas(640, 360); // 640*360でキャンバスを作る
  mover = new Mover(); // Moverクラスをインスタンス化
}

function draw() {
  background(50); // 背景色は暗い灰色
  mover.update(); // 位置や速度、加速度を計算
  mover.checkEdges(); // 端判定
  mover.display(); // 表示
}