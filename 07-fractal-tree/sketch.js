// From here https://youtu.be/0jjeOYMjmDU
let angle = 3.14159265358979323846 / 3.5;
let step = 0.666666667;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255);
  push();
  translate(windowHeight / 2, windowHeight);
  branch(windowHeight / 4);
  pop();
}

function branch(len) {
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
  angle = random(3.14159265358979323846 / 3, 3.14159265358979323846 / 4);
  step = random(0.5, 0.75);
  console.log({ angle, step });
  push();
  clear();
  background(0);
  stroke(255);
  translate(windowHeight / 2, windowHeight);
  branch(windowHeight / 4);
  pop();
}
