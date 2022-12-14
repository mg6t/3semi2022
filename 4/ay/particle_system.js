class ParticleSystem {
  constructor(num, position) {
    this.origin = position.copy();
    this.particles = [];
    for (let i = 0; i < num; i++) {
      this.particles.push(new Particle(this.origin));
    }
  }

  addParticle() {
    this.particles.push(new Particle(this.origin));
  }

  run(r,g,b) {
    for (let particle of this.particles) {
      particle.run(r,g,b);
    }
    this.particles = this.particles.filter(particle => !particle.isDead());
  }
  
}
