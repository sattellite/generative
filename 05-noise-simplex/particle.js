class Particle {
  constructor(x, y) {
    this.dir = createVector(0, 0);
    this.vel = createVector(0, 0);
    this.pos = createVector(x, y);
    this.simplex = new SimplexNoise(x * y);
    this.speed = 0.4;
  }

  move() {
    const angle = noise(this.pos.x / noiseScale, this.pos.y / noiseScale) * TWO_PI * noiseScale;
    this.dir.x = cos(angle);
    this.dir.y = sin(angle);
    this.vel = this.dir.copy();
    this.vel.mult(this.speed);
    this.pos.add(this.vel);
  }

  checkEdge() {
    if (this.pos.x > width || this.pos.x < 0 || this.pos.y > height || this.pos.y < 0) {
      this.pos.x = random(50, width);
      this.pos.y = random(50, height);
    }
  }

  display(r) {
    ellipse(this.pos.x, this.pos.y, r, r);
  }

  update(dir) {
    this.dir = dir;
  }
}
