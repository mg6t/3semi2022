// 自分の作品
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let walker;

// プログラム実行開始時に呼び出される
function setup() {
  // 描くキャンバスのサイズを指定(横：640、縦360)
  createCanvas(640, 360);
  // Walkerクラスをインスタンス化
  walker = new Walker();
  // 背景色を黒にする
  background(0);
}

// 繰り返し呼び出される
function draw() {
  // 塗りつぶしに使う色は、透明度10の黒
  fill(0, 10);
  // キャンバスに長方形を描く
  rect(0, 0, width, height);

  // 線の色を肌色に指定
  stroke(254, 220, 189);
  // 線を書く(持ち手)
  line(width / 2,  0, width / 2, height / 2);

  // 赤に指定
  stroke(255, 0, 0);
  fill(255, 0, 0);
  // 線香花火の丸い玉
  ellipse(width / 2, height / 2, 20);

  // 書く位置を計算
  walker.step1();
  walker.step2();
  walker.step3();
  // 書く
  // walker.render();
}

class Walker {
  // コンストラクタ
  constructor() {
    this.x1 = width / 2 - 10;
    this.x2 = width / 2; // xは描画キャンバスの横幅の1/2
    this.x3 = width / 2 + 10; 
    this.y1 = height / 2; // yは描画キャンバスの縦幅の1/2
    this.y2 = height / 2 + 10;
    this.y3 = height / 2; 
  

    // this.prev_x = width / 2; // xは描画キャンバスの横幅の1/2
    // this.prev_y = height / 2; // yは描画キャンバスの縦幅の1/2
    /*
    var choice1 = floor(random(3));

    if (choice1 === 0) {
      this.x += 10;
    } else if (choice1 == 1) {
      this.x -= 10;
    } else{
      this.y += 10;
    }
    */
  }

  step1() {
    // 0以上4未満の範囲でランダム値を得て、その値以下の最も近い整数値を求める
    var choice = floor(random(4));
    // choiceの値によって、xやyを変える
    if (choice === 0) {
      this.x1++; // xを1増やす
    } else if (choice == 1) {
      this.x1--; // xを1減らす
    } else if (choice == 2) {
      this.y1++; // yを1増やす
    } else {
      this.y1--; // yを1減らす
    }
    // xがキャンバスの横幅を超えず、0より小さくならないようにする
    // yがキャンバスの縦幅を超えず、0より小さくならないようにする
    this.x1 = constrain(this.x1, width/3, width/2);
    this.y1 = constrain(this.y1, height/2, 2 * height/3);

    // 線の色をオレンジに指定
    stroke(255, 69, 0, 100);
    // 点をx, yに描画
    point(this.x1, this.y1);
  }

  step2() {
    // 0以上4未満の範囲でランダム値を得て、その値以下の最も近い整数値を求める
    
    // this.prev_x = this.x;
    // this.prev_y = this.y;
    var choice = floor(random(4));
    // choiceの値によって、xやyを変える
    if (choice === 0) {
      this.x2++; // xを1増やす
    } else if (choice == 1) {
      this.x2--; // xを1減らす
    } else if (choice == 2) {
      this.y2++; // yを1増やす
    } else {
      this.y2--; // yを1減らす
    }
    // xがキャンバスの横幅を超えず、0より小さくならないようにする
    // yがキャンバスの縦幅を超えず、0より小さくならないようにする
    this.x2 = constrain(this.x2, width/3, 2 * width/3);
    this.y2 = constrain(this.y2, height/2, 2 * height/3);

    // 線の色をオレンジに指定
    stroke(255, 69, 0, 100);
    // 点をx, yに描画
    point(this.x2, this.y2);
  }

  step3() {
    // 0以上4未満の範囲でランダム値を得て、その値以下の最も近い整数値を求める
    
    // this.prev_x = this.x;
    // this.prev_y = this.y;
    var choice = floor(random(4));
    // choiceの値によって、xやyを変える
    if (choice === 0) {
      this.x3++; // xを1増やす
    } else if (choice == 1) {
      this.x3--; // xを1減らす
    } else if (choice == 2) {
      this.y3++; // yを1増やす
    } else {
      this.y3--; // yを1減らす
    }
    // xがキャンバスの横幅を超えず、0より小さくならないようにする
    // yがキャンバスの縦幅を超えず、0より小さくならないようにする
    this.x3 = constrain(this.x3, width/2, 2 * width/3);
    this.y3 = constrain(this.y3, height/2, 2 * height/3);

    // 線の色をオレンジに指定
    stroke(255, 69, 0, 100);
    // 点をx, yに描画
    point(this.x3, this.y3);
  }


  render(x, y) {
    // 線の色をオレンジに指定
    stroke(255, 69, 0);
    // 点をx, yに描画
    point(x, y);
  }

  /*
  step_all(){
    this.step1();
    this.step2();
    this.step3();
  }*/

}
