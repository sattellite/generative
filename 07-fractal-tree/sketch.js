// From here https://youtu.be/0jjeOYMjmDU
let angle, step;
function setup() {
  angle = random(3.14159265358979323846 / 3, 3.14159265358979323846 / 4);
  step = random(0.5, 0.75);
  console.log({ angle, step });
  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255);
  push();
  translate(windowWidth / 2, windowHeight);
  branch(windowHeight / 4);
  pop();
}

function branch(len) {
  let weight = len / 10;
  if (weight < 1) {
    weight = 1;
  }
  strokeWeight(weight);
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 2) {
    push();
    rotate(angle);
    branch(len * step);
    pop();
    push();
    rotate(-angle);
    branch(len * step);
    pop();
  }
}

function mouseClicked() {
  setup();
}
