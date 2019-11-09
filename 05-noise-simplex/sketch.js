const particles_a = [];
const particles_b = [];
const particles_c = [];
const particles_d = [];
const simplexA = new SimplexNoise('A');
const simplexB = new SimplexNoise('B');
const simplexC = new SimplexNoise('C');
const simplexD = new SimplexNoise('D');
const nums = 200;
const noiseScale = 800;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(55, 37, 73);
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
  // background(55, 37, 73);
  for (let i = 0; i < nums; i++) {
    const radius = map(i, 0, nums, 1, 2);
    const alpha = map(i, 0, nums, 0, 250);

    fill(139, 30, 63, alpha);
    const angle_a =
      map(simplexA.noise2D(particles_a[i].pos.x, particles_a[i].pos.y), 0, 1, 0, TWO_PI) * 40;
    var dir_a = p5.Vector.fromAngle(angle_a);
    particles_a[i].update(dir_a);
    particles_a[i].move();
    particles_a[i].display(radius);
    particles_a[i].checkEdge();

    fill(230, 75, 89, alpha);
    const angle_b =
      map(simplexB.noise2D(particles_b[i].pos.x, particles_b[i].pos.y), 0, 1, 0, TWO_PI) * 40;
    var dir_b = p5.Vector.fromAngle(angle_b);
    particles_a[i].update(dir_b);
    particles_b[i].move();
    particles_b[i].display(radius);
    particles_b[i].checkEdge();

    fill(137, 189, 158, alpha);
    const angle_c =
      map(simplexC.noise2D(particles_c[i].pos.x, particles_c[i].pos.y), 0, 1, 0, TWO_PI) * 40;
    var dir_c = p5.Vector.fromAngle(angle_c);
    particles_a[i].update(dir_c);
    particles_c[i].move();
    particles_c[i].display(radius);
    particles_c[i].checkEdge();

    fill(240, 201, 135, alpha);
    const angle_d =
      map(simplexD.noise2D(particles_d[i].pos.x, particles_d[i].pos.y), 0, 1, 0, TWO_PI) * 40;
    var dir_d = p5.Vector.fromAngle(angle_d);
    particles_a[i].update(dir_d);
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
  background(55, 37, 73);
}
