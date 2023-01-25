//G20934 Mio Ojima
// Cursor-Sensitive Particles
// 2次元の位置と速度を保存するパーティクルクラスを作成(particle.js)。パーティクルの動きがシミュレーションされた力の影響を受けるようにするメソッド(attract, repel)を追加する
// カーソルに引き寄せられたり反発したりするパーティクルの配列を作成(parray)

let parray = [];
const nx = 20;
const ny = 20;
const nParticles = nx*ny; // パーティクルの数
let curs;

let checkboxAttract; // attractのチェックボックスにチェック入っているか
let checkboxRepel; // repelのチェックボックスにチェック入っているか

function preload(){
  curs = loadImage("cursor_with_shadow_15x21.png"); // カーソルの画像を読み込む
}

function setup() {
  createCanvas(800, 800); // 800*800のキャンバス作る
  // parray = new Particle[nParticles]; 配列の大きさを指定しているが、いらない
  let index = 0;  // 何個目のパーティクルを作っているかカウントする変数
  for (let i=0; i<nx; i++) {
    for (let j=0; j<ny; j++) {
      // パーティクルの初期位置は縦横均等に綺麗になるように
      let x = map(j, -2, nx+1, 0, width);
      let y = map(i, -2, ny+1, 0, height);
      // パーティクルを作って、配列に入れる
      parray[index] = new Particle(x, y);
      index++;
    }
  }

  background(253);
}

function draw() {

  background(253);
  checkboxAttract = document.getElementById('attract');
  checkboxRepel = document.getElementById('repel');

  for (let i=0; i<nParticles; i++) { // 各パーティクルに対して
    if (mouseIsPressed) { // マウスが押されていたら
      if(checkboxAttract.checked){
        parray[i].attract(); // パーティクルの位置や速度等を計算
      }else if(checkboxRepel.checked){
        parray[i].repel();
      }
    }
    parray[i].draw(); // パーティクルを描く
  }
  image(curs, mouseX, mouseY, 90, 126); // カーソル位置にカーソルの画像を表示
}

function mousePressed(){
  background(255); // マウスを押したら、背景を白に
}

// もしスペースを押したらキャンバスを保存(しかし保存されなかった)
function keyPressed() {
  if (key == ' '){
    saveFrames("cursor_particles.png");
  }
}
