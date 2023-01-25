var off_1;
var off_2;
var off_3;
var off_4;

var x_1;
var y_1;
var x_2;
var y_2;

var diam = 300;

function setup() {
  createCanvas(800, 800);
  ellipseMode(CENTER); 

  off_1 = random(10);
  off_2 = random(10);
  off_3 = random(10);
  off_4 = random(10);
}

//---------------------------------------
function draw() {
  background(253);

  var speed = 0.5; 
  off_1 += speed*0.01;
  off_2 += speed*0.015;
  off_3 += speed*0.005;
  off_4 += speed*0.020;

  x_1 = map(noise(off_1), 0, 1, 0, width);
  y_1 = map(noise(off_2), 0, 1, 0, height);
  x_2 = map(noise(off_3), 0, 1, 0, width);
  y_2 = map(noise(off_4), 0, 1, 0, height);

  // x_1 = mouseX; //334;
  // y_1 = mouseY; // 350;
  // x_2 = 475;
  // y_2 = 475;

  if (overlap(x_1, y_1, x_2, y_2)) {
    noStroke(); 

    blendMode(EXCLUSION);
    fill(0, 255, 255);
    ellipse(x_1, y_1, diam, diam);
    ellipse(x_2, y_2, diam, diam);

    blendMode(BLEND);
    fill(255, 255, 255, 200); 
    rect(0, 0, width, height);
  } 

  blendMode(BLEND);
  noFill(); 
  stroke(0, 0, 0);
  strokeWeight(8); 
  ellipse(x_1, y_1, diam, diam);
  ellipse(x_2, y_2, diam, diam);

  identifyIntersections();
}

//---------------------------------------
function overlap (x1, y1, x2, y2) {
  if (sqrt(pow(x2-x1, 2) + pow(y2-y1, 2)) < diam) {
    return true;
  } else {
    return false;
  }
}

//---------------------------------------
function keyPressed() {
  if (key == ' ') {
    saveFrame("collision_detection.png");
  }
}



function identifyIntersections() {
  // From http://paulbourke.net/geometry/circlesphere/.
  // Assumes radii are equal. 

  var dx = x_1 - x_2; 
  var dy = y_1 - y_2; 
  var dh = sqrt(dx*dx + dy*dy); 
  if (dh < diam) {
    
    var cx = (x_1 + x_2)/2; 
    var cy = (y_1 + y_2)/2; 

    var r = diam/2;
    var a = (dh*dh)/(2*dh); 
    var h = sqrt(r*r - a*a);
    var x3 = cx + h * (dy/dh);
    var y3 = cy - h * (dx/dh);
    var x4 = cx - h * (dy/dh);
    var y4 = cy + h * (dx/dh);

    let bDrawIntersectionPoints = false; 
    if (bDrawIntersectionPoints) {
      fill(0); 
      noStroke();
      ellipse(x3, y3, 24, 24); 
      ellipse(x4, y4, 24, 24);
    }

    var Kx = (dy/dh) * max(0, (75-h));
    var Ky = (dx/dh) * max(0, (75-h));

    stroke(0);
    strokeWeight(8); 

    push(); 
    translate(x3 + Kx, y3 - Ky); 
    rotate(PI + atan2(dy, dx)); 
    line(0, 60, 0, 100); 
    rotate( radians(20)); 
    line(0, 60, 0, 100);
    rotate( radians(-40)); 
    line(0, 60, 0, 100);
    pop();

    push(); 
    translate(x4 - Kx, y4 + Ky); 
    rotate(atan2(dy, dx)); 
    line(0, 60, 0, 100); 
    rotate( radians(20)); 
    line(0, 60, 0, 100);
    rotate( radians(-40)); 
    line(0, 60, 0, 100);
    pop();
  }
}
