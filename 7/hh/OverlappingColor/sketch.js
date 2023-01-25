function setup() {
  createCanvas(800, 800);

  noLoop();
}

function draw() {
  background(253);

  blendMode(DIFFERENCE);
  noStroke();

  var alpha = 255;
  var a = width/10;
  var d = a*1.618;

  //colored circles
  //part1
  fill(0, 255, 0, alpha);
  ellipse(100, 100, d, d);

  fill(255, 0, 0, alpha);
  ellipse(180, 100, d, d);

  fill(0, 0, 255, alpha);
  ellipse(140, 180, d, d);

  //part2
  fill(100, 255, 100, alpha);
  ellipse(400, 100, d, d);

  fill(255, 100, 100, alpha);
  ellipse(480, 100, d, d);

  fill(100, 100, 255, alpha);
  ellipse(440, 180, d, d);

  //part3
  fill(0, 255, 100, alpha);
  ellipse(100, 400, d, d);

  fill(255, 100, 0, alpha);
  ellipse(180, 400, d, d);

  fill(100, 0, 255, alpha);
  ellipse(140, 480, d, d);

  //part4
  fill(50, 200, 50, alpha);
  ellipse(400, 400, d, d);

  fill(200, 50, 50, alpha);
  ellipse(480, 400, d, d);

  fill(50, 50, 200, alpha);
  ellipse(440, 480, d, d);

}
