let moverA;
let moverB;

function setup() {
  createCanvas(640, 360);
  moverA = new Mover(200, 30, 10);//basketball
  moverB = new Mover(440, 30, 2);//tennisball
}

function draw() {
  background(135,206,235);//skyblue

  let gravity = createVector(0, 0.1);

  let gravityA = p5.Vector.mult(gravity, moverA.mass);
  moverA.applyForce(gravityA);

  let gravityB = p5.Vector.mult(gravity, moverB.mass);
  moverB.applyForce(gravityB);

  if (mouseIsPressed) {
    let wind = createVector(0.1, 0);
    moverA.applyForce(wind);
    moverB.applyForce(wind);
  }

  //basketball
  moverA.update();
  moverA.display(210,105,30);//chocolate
  moverA.displayA(0,0,0);//black
  moverA.checkEdges();

  //tennisball
  moverB.update();
  moverB.display(173,255,47);//greenyellow
  moverB.displayB(255,255,255);//white
  moverB.checkEdges();

}
