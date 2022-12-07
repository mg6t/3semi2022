//

let angle = 0;
let r;
let phase = 0;

function setup() {
  createCanvas(800,500);
  r = width / 15;
}

function draw() {
  background(0);
  translate(width/2, height/2);

  let increment = TWO_PI / 50;
  beginShape();
  for (let a = 0; a < TWO_PI; a += increment){
    let r1 = r + sin(a * 30 + phase)*50;
    let x = r1 * cos(a);
    let y = r1 * sin(a);
    curveVertex(x, y);
  }
  endShape(CLOSE);
  phase += 0.02;

  stroke(255,208,0);
  circle(0,0,r*2);
  fill(255,64,0);
}
