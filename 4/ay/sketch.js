let systems = [];

function setup() {
  createCanvas(360, 360);
}

function draw() {
  background(30,144,255);//dodgerblue

  for (let i = 0; i < systems.length; i++) {
    if(i <= 13){
      systems[i].addParticle();
      systems[i].run(0,191,255);////deepskyblue
    }
    if(i >= 14 && i <= 29 ){
      if(i%3 == 0){
        systems[i].addParticle();
        systems[i].run(30,144,255);////dodgerblue
      }else{
        systems[i].addParticle();
        systems[i].run(0,191,255);//deepskyblue
      }
    }
  }

  //waterfall_1
  let x1 = 100;
  let y1 = 50;
  for(let i = 0; i<7; i++){
    systems.push(new ParticleSystem(1, createVector(x1, y1)));
    systems.push(new ParticleSystem(1, createVector(x1, y1)));
    x1 += 10;
  }

  //waterfall_2
  let x2 = 150;
  let y2 = 200;
  for(let i = 0; i<8; i++){
    systems.push(new ParticleSystem(1, createVector(x2, y2)));
    systems.push(new ParticleSystem(1, createVector(x2+10, y2)));
    x2 += 20;
  }


  //rock_Left
  stroke(128,128,128);//gray
  fill(128,128,128);
  beginShape();
  vertex(0,0);
  vertex(60,0);
  vertex(90,50);
  vertex(100,160);
  vertex(180,220);
  vertex(200,360);
  vertex(0,360);
  endShape(CLOSE);

  //rock_Right
  stroke(105,105,105);//dimgray
  fill(105,105,105);
  beginShape();
  vertex(100,0);
  //vertex(180,0);
  vertex(170,50);
  vertex(200,160);
  vertex(300,220);
  vertex(320,360);
  vertex(360,360);
  vertex(360,0);
  endShape(CLOSE);

  //rock1
  stroke(169,169,169);//darkgray
  fill(169,169,169);
  let xRock1 = 80;
  let yRock1 = 170;
  beginShape();
  vertex(xRock1+10, yRock1);
  vertex(xRock1, yRock1+15);
  vertex(xRock1+5, yRock1+20);
  vertex(xRock1+45, yRock1+20);
  vertex(xRock1+50, yRock1+15);
  vertex(xRock1+40, yRock1);
  endShape(CLOSE);

  //rock2
  let xRock2 = 120;
  let yRock2 = 200;
  beginShape();
  vertex(xRock2+10, yRock2);
  vertex(xRock2, yRock2+15);
  vertex(xRock2+5, yRock2+20);
  vertex(xRock2+45, yRock2+20);
  vertex(xRock2+50, yRock2+15);
  vertex(xRock2+40, yRock2);
  endShape(CLOSE);

  //rock3
  stroke(128,128,128);//gray
  fill(128,128,128);
  let xRock3 = 250;
  let yRock3 = 160;
  beginShape();
  vertex(xRock3+10, yRock3);
  vertex(xRock3, yRock3+15);
  vertex(xRock3+5, yRock3+20);
  vertex(xRock3+45, yRock3+20);
  vertex(xRock3+50, yRock3+15);
  vertex(xRock3+40, yRock3);
  endShape(CLOSE);

  //grasses1
  stroke(0,100,0);//darkgreen
  fill(0,100,0);
  strokeWeight(2);
  let xGrasses1 = 110;
  let yGrasses1 = 220;
  beginShape();
  vertex(xGrasses1-4, yGrasses1);
  vertex(xGrasses1-10, yGrasses1-5);
  vertex(xGrasses1-2, yGrasses1);
  vertex(xGrasses1, yGrasses1-10);
  vertex(xGrasses1+2, yGrasses1);
  vertex(xGrasses1+10, yGrasses1-5);
  vertex(xGrasses1+4, yGrasses1);
  endShape(CLOSE);

  //grasses2
  let xGrasses2 = 240;
  let yGrasses2 = 170;
  beginShape();
  vertex(xGrasses2-6, yGrasses2);
  vertex(xGrasses2-12, yGrasses2-5);
  vertex(xGrasses2-3, yGrasses2);
  vertex(xGrasses2, yGrasses2-10);
  vertex(xGrasses2+3, yGrasses2);
  vertex(xGrasses2+12, yGrasses2-5);
  vertex(xGrasses2+6, yGrasses2);
  endShape(CLOSE);


  //sky
  stroke(176,224,230);//powderblue
  fill(176,224,230);
  rect(0, 0, 640, 50);
}
