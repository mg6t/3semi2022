var obj,randomObj;

//最大スピード
var maxspeed = 7;

//旋回力 大きいほど舵を切りやすい
var maxsteer = 0.3;

function setup() {
  createCanvas(600,400);
  smooth();
  obj = new MovingObj(100,100);
  randomObj = new RandomMovingObj(300,300);
}

function draw() {
  background(205);

  //これはブロック崩しのボールのように動く
  randomObj.move();
  randomObj.draw();

  //ボールを追いかける（追跡 = seek）
  obj.seek(randomObj.pos);
  obj.move();
  obj.draw();

}

function mousePressed() {
  var wind = createVector(-12.4,0);
  obj.applyForce(wind);
}

//Steering Behavior（操舵行動）を扱うクラス
var MovingObj = function(x,y){

  this.pos = createVector(x,y); //位置
  this.vel = createVector(0,0); //速度
  this.acc = createVector(0,0); //加速度

  this.move = function(){
    this.vel.add(this.acc);//速度に加速度をプラス
    this.pos.add(this.vel);//位置に速度をプラス
    this.acc.mult(0);
  };

  //操舵行動 追跡(seek)
  this.seek = function(target){
    //希望ベクトル = 目標位置 - 現在位置
    var desired = p5.Vector.sub(target,this.pos);

    //希望ベクトルをノーマライズ
    desired.normalize();

    //希望ベクトルのマグニチュードをmaxに
    desired.setMag(maxspeed);

    //ステアリングベクトル（速度） = 希望ベクトル - 現在のベクトル（速度）
    var steer = p5.Vector.sub(desired,this.vel);

    //速度を限る
    steer.limit(maxsteer);

    //適用
    this.applyForce(steer);
  };


  this.applyForce = function(force){
    this.acc.add(force);
  };

  this.draw = function(){
    ellipse(this.pos.x,this.pos.y,30,30);
  };
};


//ここからはランダムに動くオブジェクトなので蛇足
var RandomMovingObj  = function(x,y){
  this.pos = createVector(x,y);
  this.vel = createVector(5,5);

  this.move = function(){
    this.pos.add(this.vel);
    if(this.pos.x < 0 || this.pos.x > 600){
      this.vel.x *= -1;
    }
    if(this.pos.y < 0 || this.pos.y > 400){
      this.vel.y *= -1;
    }
  };

  this.draw = function(){
    ellipse(this.pos.x,this.pos.y,10,10);
  };
}

