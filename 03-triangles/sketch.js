const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
const X = WIDTH / 2;
const Y = HEIGHT / 2;
let WC;
const MAX_SIZE = Math.max(WIDTH, HEIGHT) * 2;
const GROW = 45;
const ANGLE = 6;
const START_SIZE = 0.7;

let triangles = [];
let useMouseCoordinates = false;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  stroke(50, 180, 240);
  WC = createVector(X, Y);
}

function draw() {
  if (useMouseCoordinates) {
    clear();
    const toRemove = [];
    for (let i = 0, len = triangles.length; i < len; i += 1) {
      // Increase triangle size
      triangles[i].update();
      triangles[i].draw();

      if (triangles[i].getSize() > MAX_SIZE) {
        toRemove.push(i);
      }
    }

    toRemove.forEach(() => {
      let x = X;
      let y = Y;
      if (useMouseCoordinates) {
        x = mouseX;
        y = mouseY;
      }
      triangles.push(
        new Triangle(
          createVector(x, y),
          WC,
          triangles[triangles.length - 1].getAngle() + ANGLE,
          START_SIZE,
          GROW,
        ),
      );
      triangles.shift();
    });

    const lastTriangle = triangles[triangles.length - 1];
    if (lastTriangle.getSize() != START_SIZE && lastTriangle.getSize() < START_SIZE * 2) {
      let x = WIDTH / 2;
      let y = HEIGHT / 2;
      if (useMouseCoordinates) {
        x = mouseX;
        y = mouseY;
      }
      triangles.push(
        new Triangle(createVector(x, y), WC, lastTriangle.getAngle() + ANGLE, START_SIZE, GROW),
      );
    }
  }
}

function mouseMoved() {
  if (!useMouseCoordinates) {
    triangles.push(new Triangle(createVector(mouseX, mouseY), WC, ANGLE, START_SIZE, GROW));
  }
  useMouseCoordinates = true;
}
