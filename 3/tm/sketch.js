var movers = [];

function setup(){
	createCanvas(windowWidth, windowHeight);
	for(var i = 0; i< 30; i++){
		movers[i] = new Mover();
	}
}

function draw(){
	background(30);
	for(var i = 0; i < movers.length; i++){
		movers[i].show();
		movers[i].update();
	}
}