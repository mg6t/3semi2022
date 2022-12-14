let particles=[];

function setup(){
  createCanvas(600, 300);
}

function draw(){
  background(0);
  for(let i=0;i<20;i++){
  particles.push(new Particle(30*i,150));
  }
  for(let particle of particles){
    let gravity=createVector(0,0.2);
    particle.applyForce(gravity);

    particle.update();
    particle.show();
  }
  for(let i=particles.length-1;i>=0;i--){
    if(particles[i].finished()){
      particles.splice(i,1);
    }
  }
}
