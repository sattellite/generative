const particles_a = [];
const particles_b = [];
const particles_c = [];
const particles_d = [];
const nums = 200;
const noiseScale = 800;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50, 14, 8);
  for (let i = 0; i < nums; i++) {
    particles_a[i] = new Particle(random(0, width), random(0, height));
    particles_b[i] = new Particle(random(0, width), random(0, height));
    particles_c[i] = new Particle(random(0, width), random(0, height));
    particles_d[i] = new Particle(random(0, width), random(0, height));
  }
}

function draw() {
  noStroke();
  smooth();
  for (let i = 0; i < nums; i++) {
    const radius = map(i, 0, nums, 1, 2);
    const alpha = map(i, 0, nums, 0, 250);

    fill(192, 64, 30, alpha);
    particles_a[i].move();
    particles_a[i].display(radius);
    particles_a[i].checkEdge();

    fill(230, 91, 52, alpha);
    particles_b[i].move();
    particles_b[i].display(radius);
    particles_b[i].checkEdge();

    fill(244, 178, 13, alpha);
    particles_c[i].move();
    particles_c[i].display(radius);
    particles_c[i].checkEdge();

    fill(246, 213, 126, alpha);
    particles_d[i].move();
    particles_d[i].display(radius);
    particles_d[i].checkEdge();
  }
}

function mousePressed() {
  particles_a.splice(0, nums - 1);
  particles_b.splice(0, nums - 1);
  particles_c.splice(0, nums - 1);
  particles_d.splice(0, nums - 1);

  for (let i = 0; i < nums; i++) {
    particles_a[i] = new Particle(random(0, width), random(0, height));
    particles_b[i] = new Particle(random(0, width), random(0, height));
    particles_c[i] = new Particle(random(0, width), random(0, height));
    particles_d[i] = new Particle(random(0, width), random(0, height));
  }
  clear();
  background(50, 14, 8);
}
