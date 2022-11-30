//作品制作1
//参考例題 1-4: Vector multiplication
//

function setup() {
  createCanvas(640,360);
}

function draw() {
  background(51);

  c1 = color(255,215,0);//Gold
  c2 = color(255,140,0);//DarkOrange
  c3 = color(255,69,0);//OrangeRed
  c4 = color(0,100,0);//DarkGreen

  v1 = p5.Vector.random2D();
  v2 = p5.Vector.random2D();
  v3 = p5.Vector.random2D();
  v1.mult(30);
  v2.mult(35);
  v3.mult(40);


  translate(width/2,height/2+100);
  strokeWeight(2);
  stroke(c4);
  line(0,0,0,-200);//持ち手

  stroke(c1);
  line(0,0,v1.x,v1.y);//火花1

  stroke(c2);
  line(0,0,v2.x,v2.y);//火花2

  stroke(c3);
  line(0,0,v3.x,v3.y);//火花3

  fill(c3);
  ellipse(0,0,5);//火花中心
}
