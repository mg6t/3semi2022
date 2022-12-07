let r;
let thetaL;//長針角度
let thetaS;//短針角度

function setup() {
  createCanvas(640, 360);
  r = height * 0.45;
  thetaL = PI + HALF_PI;
  thetaS = 0;
}

function draw() {
  background(255);
  translate(width / 2, height / 2);

  //長針座標
  let xL = r * cos(thetaL);
  let yL = r * sin(thetaL);
  //短針座標
  let xS = r * cos(thetaS);
  let yS = r * sin(thetaS);

  //外側
  stroke(0);
  strokeWeight(2);
  circle(0,0,r*2);
  point(0,0);

  //目盛り
  var num = 12;
  for(var i=0; i<num; i++){
    let r1 = r*0.95;
    var angle = i * (360/num) - 90;
    var radian = angle * Math.PI /180;
    fill(255);
    stroke(255);
    circle(r1*cos(radian), r1*sin(radian),5);
  }

  ellipseMode(CENTER);
  fill(127);
  stroke(255);
  strokeWeight(2);

  //長針
  line(0, 0, xL*0.9, yL*0.9);
  ellipse(xL*0.9, yL*0.9, 10, 10);
  //短針
  line(0, 0, xS*0.6, yS*0.6);
  ellipse(xS*0.6, yS*0.6, 20, 20);

  thetaL += 0.012;
  thetaS += 0.001;
}
