let img;
let walker;
let walker2;

function setup() {
  createCanvas(727, 762);
  img = loadImage('car_winter_samui.png'); 
  walker = new Walker(200, 200);
  walker2 = new Walker2(200, 200);
  background(0);
}

function draw() {
  image(img, 0, 0);
  walker.update();
  walker2.update();
  walker.show();
  walker2.show();
}