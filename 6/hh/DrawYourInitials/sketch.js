function setup(){
  createCanvas(500,300);
  background(0);
  smooth();
  stroke(255);
  strokeWeight(4);

  //H(右)
  line(width/8, 50,width/8,240);
  line(width/3+30, 50,width/3+30,240);
  noStroke();
  arc(width/5+30, 150, 120, 120, PI, TWO_PI, OPEN);

  //H(左)
  stroke(255);
  line(width/2+80, 150,width/2+150,150);
  noStroke();
  arc(3*width/4-50, 150, 100, 200, HALF_PI, -1*HALF_PI, OPEN);
  arc(3*width/4+30, 150, 100, 200, -1*HALF_PI, HALF_PI, OPEN);
}
