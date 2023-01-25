var p;
var c, d;

function setup() {
  createCanvas(500, 500);
  c= color(random(255), random(255), random(255));
  d= color(random(255), random(255), random(255));
}

function draw() {
  for (var x=0; x<width; x++) {
    p = lerpColor(c, d, 1.0*x/width);
    stroke(p);
    line(x, 0, x, height); 
  }
}

function mousePressed() {
  c= color(random(255), random(255), random(255));
  d= color(random(255), random(255), random(255));
}
