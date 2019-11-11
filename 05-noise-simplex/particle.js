class Particle {
  constructor(x, y, simplex, scale) {
    this.dir = createVector(0, 0);
    this.vel = createVector(0, 0);
    this.pos = createVector(x, y);
    this.simplex = simplex;
    this.scale = scale;
    this.speed = 0.4;
  }

  move() {
    const angle =
      this.simplex.noise2D(this.pos.x / this.scale, this.pos.y / this.scale) *
      TWO_PI *
      this.scale;
    this.dir.x = cos(angle);
    this.dir.y = sin(angle);
    this.vel = this.dir.copy();
    this.vel.mult(this.speed);
    this.pos.add(this.vel);
  }

  checkEdge() {
    if (this.pos.x > width || this.pos.x < 0 || this.pos.y > height || this.pos.y < 0) {
      this.pos.x = random(0, width);
      this.pos.y = random(0, height);
    }
  }

  display(r) {
    ellipse(this.pos.x, this.pos.y, r, r);
  }

  update(dir) {
    // console.log(dir);
    this.dir = dir;
  }
}
