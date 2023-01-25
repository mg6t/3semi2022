// Take a "Big Five" personality quiz to (ostensibly) quantify 
// your openness, conscientiousness, extraversion,  agreeableness, 
// and neuroticism. Generate a radar chart to visualize this 
// multivariate data. Ask some friends to take the quiz, and create 
// a trellis plot that allows their radar charts to be compared.

let titles = ["O", "C", "E", "A", "N"];
let dims0  = [ 7.0, 6.0, 3.0, 8.0, 5.5];
let dims1  = [ 5.5, 8.0, 2.0, 5.0, 6.0];
let dims2  = [ 8.0, 5.0, 5.0, 7.5, 2.0];
let dims3  = [ 4.0, 6.0, 4.0, 5.0, 7.0];
let dims = [dims0, dims1, dims2, dims3];

// PFont myFont; 

function setup() {
  noLoop();
  createCanvas(800, 800);
  // myFont = createFont("Helvetica-Bold", 72);
  // textFont(myFont);
}

function draw() {
  background(253); 

  let my = 0.750;
  let mx = 0.625;

  let count = 0; 
  for (let y=0; y<2; y++) {
    for (let x=0; x<2; x++) {

      let cx = my*(x-0.5)*width;
      let cy = my*(y-0.5)* width;

      push();
      translate(width/2, height/2);
      scale(mx); 
      translate(cx, cy); 
      drawRadarChart(0, 0, dims[count++]);
      pop();
    }
  }
}





//-----------------------------------------------------------  
function drawRadarChart(cx, cy, dimensions) {
  //ここのdimensionsが配列で入っていない？

  let diagramD = 550; 
  let R = diagramD/2;

  let nDimensions = dimensions.length;
  console.log(nDimensions);

  fill(255);  
  stroke(0, 0, 0);
  strokeWeight(8 / 0.625); 
  ellipseMode(CENTER);
  textAlign(CENTER, CENTER); 
  ellipse(cx, cy, diagramD, diagramD); 

  // Draw the radar chart, 
  // Also known as a star plot or web chart
  fill(255, 200, 200); 
  stroke(0); 
  strokeJoin(MITER); 
  strokeWeight(8 / 0.625); 
  beginShape(); 
  for (let i=0; i<nDimensions; i++) {
    let t = map(i, 0, nDimensions, 0, TWO_PI) - HALF_PI; 
    let radius = map(dimensions[i], 0, 10, 0, R); 
    let px = cx + radius * cos(t); 
    let py = cy + radius * sin(t); 
    vertex(px, py);
  }
  endShape(CLOSE);


  fill(0);
  for (let i=0; i<nDimensions; i++) {
    let t = map(i, 0, nDimensions, 0, TWO_PI) - HALF_PI;

    let px = cx+R*cos(t);
    let py = cy+R*sin(t); 
    strokeWeight(2 / 0.625);
    stroke(0, 0, 0);
    line(cx, cy, px, py);

    push(); 
    let tx = cx+(R+50)*cos(t);
    let ty = cy+(R+50)*sin(t);
    translate(tx, ty);

    rotate(t + HALF_PI);
    if ((t > 0.9) && (t < 2.5)) {
      rotate(PI);
    }

    // text(titles[i], 0, 0);
    pop();
  }
}

//===================================
function keyPressed() {
  if (key == ' ') {
    saveFrame("radar_chart.png");
  }
}
