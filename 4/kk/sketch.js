let emitters = [];

function mousePressed() {
  emitters.push(new Emitter(mouseX, mouseY));
}

function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(0,0,125);
  line(0,250, 300,250);
  fill('brown');
  rect(0,250, 300, 50);
  fill('white');
  rect(100,150, 100, 100);
  fill('red');
  triangle( 150,75,  75,150,  225,150 );
  fill('yellow');
  circle(250,50,50);
  for(let emitter of emitters){
    emitter.emit(1);
    emitter.show();
    emitter.update();
  }
}
