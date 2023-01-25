// G20934 Mio Ojima
// Spring(バネ)
// 現在位置P、速度v、静止位置 Rとして
// Rから動かされると、この変位に比例した復元力Fが粒子を押し戻す
// VにFを加え、減衰のためにVを何パーセントか減らし、VをPに加える

const restLength = 400; 
let displacement = 0; 
let velocity = 0; 
const damping = 0.96;
const K = 0.1;
let y0;

let cursorImg;

// カーソル画像を読み込む
function preload(){
  cursorImg = loadImage("cursor_with_shadow_15x21.png"); 
}

function setup() {
  createCanvas(800, 800); // 800*800のキャンバス作る
  displacement = 0; // 差分
  velocity = 0; // 速度
  y0 = height * 0.75; // キャンバスの高さ(800) * 0.75 = 600
}

function draw() {
  background(253); // 背景の色
  

  if (!mouseIsPressed) { // マウスが押されていなかったら
    // フックの法則: バネの伸びとバネに加えた力の大きさは比例関係にある
    let force = (0-K)*displacement; // Hooke's law
    // 速度に力を加算
    velocity += force;
    // 減衰させるために、速度を0.96倍に
    velocity *= damping;
    // 変位に速度を足す
    displacement += velocity;
  } else { // マウスが押された時
    displacement = y0 - restLength - mouseY;
  }

  noStroke(); // 線は描画しない
  fill(236); // 灰色で塗り潰す
  rect(0,y0, width, height-y0); // キャンバスの下1/4を灰色で塗る

  stroke(0); // 線は黒色
  strokeWeight(8); // 線の太さは8
  strokeJoin(ROUND); // 接点は丸く
  line(0, y0, width, y0); // キャンバスの下1/4の位置に黒で線を引く

  // バネを描く
  // バネの縦方向の長さ(マウスが押された時なら、y0-mouseY. マウスを押していない時なら, 400 + displacement(速度が足されていく))
  let springLength = restLength + displacement;
  drawSpring(y0, springLength);

  ellipseMode(CENTER); // ellipse(中心のx座標, 中心のy座標, 横直径, 縦直径)で指定するように
  strokeWeight(8); // 線の太さは8
  fill(255, 200, 200); // ピンクで塗り潰す
  ellipse(width/2, y0-springLength, 80, 80); // xはキャンバスの真ん中, yは でピンク色の円を描く
  
  image(cursorImg, mouseX, mouseY, 15*6, 21*6);  // カーソル位置にカーソルの画像を表示
}

// マウスが押された時に変位を計算
function mousePressed() {
  displacement = y0 - restLength - mouseY;
}

// キーが押された時,空白なら、画像を保存
function keyPressed(){
  if (key == ' '){
    saveFrames("spring.png"); 
  }
}


// バネを描く関数
function drawSpring(y0, springLength) {
  let crx = 150; // x軸方向は中心-150 → 中心 + 150
  let cry = 30; 
  springLength -= cry*2;

  let nLoops = 5.5; // バネがループする回数
  let nSegsPerLoop = 40; // 
  let nPoints = parseInt(round(nSegsPerLoop*nLoops)); // 5.5*40を四捨五入→220
  let dy = springLength / nPoints;

  noFill(); // 塗りつぶさない
  beginShape(); // 多角形を描く スタート
  for (let i=0; i<=nPoints; i++) { // 頂点は221個
    let t = parseFloat(i) / parseFloat(nSegsPerLoop) * TWO_PI - HALF_PI; // (2π~11π) - 1/2π = 3/2π ~ 21/2π
    let sx = width/2 + crx * cos(t); // crx * cos(t): 中心からどれくらい動くか
    let sy = y0 - cry * sin(t) - (i*dy) - cry; // y0(黒い直線の高さ) - どれくらい直線から動くか
    vertex(sx, sy); // 頂点を指定
  }
  endShape(); // 多角形を描く　終わり
}