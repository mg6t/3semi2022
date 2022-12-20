let vehicle;
let target;
let img1;
let img2;

function preload(){
  img1 = loadImage('cowLeft.png');
  img2 = loadImage('cowRight.png');
}

function setup() {
  createCanvas(640, 360);
  imageMode(CENTER);
  rectMode(CENTER);
  vehicle = new Vehicle(100, 100, img1, img2);
}

function draw() {
  background(177);
  fill(255, 0, 0);
  noStroke();
  target = createVector(mouseX, mouseY);
  rect(target.x, target.y, 80,60);//赤旗

  //cowを処理
  vehicle.seek(target);
  vehicle.update();
  vehicle.show();

}
