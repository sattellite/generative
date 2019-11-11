const particles_a = [];
const particles_b = [];
const particles_c = [];
const particles_d = [];
let simplexA = new SimplexNoise(new Date().getTime() + 'A');
let simplexB = new SimplexNoise(new Date().getTime() + 'B');
let simplexC = new SimplexNoise(new Date().getTime() + 'C');
let simplexD = new SimplexNoise(new Date().getTime() + 'D');
const nums = 200;
const noiseScale = 800;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(55, 37, 73);
  for (let i = 0; i < nums; i++) {
    particles_a[i] = new Particle(random(0, width), random(0, height), simplexA, noiseScale);
    particles_b[i] = new Particle(random(0, width), random(0, height), simplexB, noiseScale);
    particles_c[i] = new Particle(random(0, width), random(0, height), simplexC, noiseScale);
    particles_d[i] = new Particle(random(0, width), random(0, height), simplexD, noiseScale);
  }
}

function draw() {
  noStroke();
  smooth();
  // background(55, 37, 73);
  for (let i = 0; i < nums; i++) {
    const radius = map(i, 0, nums, 1, 2);
    const alpha = map(i, 0, nums, 0, 250);

    fill(139, 30, 63, alpha);
    particles_a[i].move();
    particles_a[i].display(radius);
    particles_a[i].checkEdge();

    fill(230, 75, 89, alpha);
    particles_b[i].move();
    particles_b[i].display(radius);
    particles_b[i].checkEdge();

    fill(137, 189, 158, alpha);
    particles_c[i].move();
    particles_c[i].display(radius);
    particles_c[i].checkEdge();

    fill(240, 201, 135, alpha);
    particles_d[i].move();
    particles_d[i].display(radius);
    particles_d[i].checkEdge();
  }
}

function mousePressed() {
  simplexA = new SimplexNoise(new Date().getTime() + 'A');
  simplexB = new SimplexNoise(new Date().getTime() + 'B');
  simplexC = new SimplexNoise(new Date().getTime() + 'C');
  simplexD = new SimplexNoise(new Date().getTime() + 'D');
  particles_a.splice(0, nums - 1);
  particles_b.splice(0, nums - 1);
  particles_c.splice(0, nums - 1);
  particles_d.splice(0, nums - 1);

  for (let i = 0; i < nums; i++) {
    particles_a[i] = new Particle(random(0, width), random(0, height), simplexA, noiseScale);
    particles_b[i] = new Particle(random(0, width), random(0, height), simplexB, noiseScale);
    particles_c[i] = new Particle(random(0, width), random(0, height), simplexC, noiseScale);
    particles_d[i] = new Particle(random(0, width), random(0, height), simplexD, noiseScale);
  }
  clear();
  background(55, 37, 73);
}
