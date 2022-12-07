class Mover{
	constructor(){
		this.angle = createVector();
		this.velocity = createVector(random(-0.05, 0.05), random(-0.05, 0.05));
		this.amplitude = createVector(random(20, width/2 -30), random(20, height/2 - 30));
		this.palette = ["#f8aaa060", "#b8daaf60","#a1a3ce60", "#6ab7d160", "#feff8060"];
		this.c = random(this.palette);
	}
	
	update(){
		this.angle.add(this.velocity);
	}
	
	show(){
		var x = sin(this.angle.x) * this.amplitude.x;
		var y = cos(this.angle.y) * this.amplitude.y;
		
		push();
		translate(width/2, height/2);
		stroke(255);
		strokeWeight(1);
		line(0, 0, x, y);
		
		noStroke();
		fill(this.c);
		ellipse(x, y, 50, 50);
		pop();
	} 
}