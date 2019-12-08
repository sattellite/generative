class Blob {
  constructor(x, y, r, color = [255, 100, 100, 150], mult = 3) {
    this.pos = createVector(x, y);
    this.r = r;
    this.color = color;
    this.vel = createVector(0, 0);

    this.noiseTurbulence = 0.5;
    this.mult = mult;
    this.zOff = mult;
  }

  show() {
    push();
    translate(this.pos.x, this.pos.y);
    stroke(color(this.color));
    beginShape();
    for (let a = 0; a < TWO_PI; a += TWO_PI / 500) {
      let xOff = map(cos(a), -1, 1, 0, this.noiseTurbulence);
      let yOff = map(sin(a), -1, 1, 0, this.noiseTurbulence);
      const offset = map(noise(xOff, yOff, this.zOff), 0, 1, 0, 50);
      const r = this.r + offset;
      const x = r * cos(a);
      const y = r * sin(a);
      vertex(x, y);
    }
    endShape(CLOSE);
    pop();

    this.zOff += 0.01;
    this.noiseTurbulence += 0.0001 * this.mult;
  }
}
