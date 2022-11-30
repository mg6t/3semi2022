var rndX = 300;
var rndY = 150;
var nisX = 300;
var nisY = 450;
var noiseValX = Math.random()*100;
var noiseValY = Math.random()*100;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(255);
    noStroke();
    fill(255, 0, 0);
    ellipse(rndX, rndY, 100);
    fill(0, 0, 255);
    ellipse(nisX, nisY, 100);

    rndX += random(-2, 2);
    rndY += random(-2, 2);

    nisX += noise(noiseValX)*4-1.85;
    nisY += noise(noiseValY)*4-1.85;
    noiseValX += 0.02;
    noiseValY += 0.02;

    if (rndX > width) { rndX = width; }
    if (rndX < 0) { rndX = 0; }
    if (rndY > height) { rndY = height; }
    if (rndY < 0) { rndY = 0; }
    if (nisX > width) { nisX = width; }
    if (nisX < 0) { nisX = 0; }
    if (nisY > height) { nisY = height; }
    if (nisY < 0) { nisY = 0; }
}

