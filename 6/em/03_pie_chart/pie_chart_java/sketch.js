
let myFont; 
let amounts = [8, 5, 11, 16];
let names = ["breakfast", "coffee", "lunch", "dinner"];
let colors = [
  'rgb(191, 241, 255)', 
  'rgb(236, 213, 162)', 
  'rgb(223, 255, 191)', 
  'rgb(255, 227, 254)'
];


function setup() {
  noLoop();
  createCanvas(800, 800);
  myFont = textFont("Helvetica-Bold", 48);
  textFont(myFont);
}

function draw() {
  background(253); 
  noLoop(); 

  let total = 0; 
  for (let i=0; i<amounts.length; i++) {
    total += amounts[i];
  }



  let cx = width/2;
  let cy = height/2; 
  let diam = 600;
  let angleStart = 0-HALF_PI; 
  for (let i=0; i<amounts.length; i++) {
    let ithFraction = amounts[i]/total;
    let ithAngle = ithFraction * TWO_PI; 
    let angleEnd = angleStart + ithAngle;

    fill(colors[i]); //(255);
    stroke(0, 0, 0); 
    strokeWeight(8); 
    strokeJoin(ROUND); 
    arc(cx, cy, diam, diam, angleStart, angleEnd, PIE); 

    fill(0); 
    push();
    translate(cx, cy); 
    rotate(angleEnd); 
    textAlign(RIGHT, BOTTOM); 
    text(names[i], diam/2 - 20, -8); 
    pop();

    angleStart += ithAngle;
  }
}

//===================================
function keyPressed() {
  if (key == ' ') {
    saveFrame("pie_chart.png");
  }
}
