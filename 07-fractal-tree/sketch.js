// From here https://youtu.be/0jjeOYMjmDU
const angle = 3.14159265358979323846 / 3.5;
const step = 0.666666667;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255);
  translate(windowHeight / 2, windowHeight);
  branch(windowHeight / 4);
}

function draw() {}

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
