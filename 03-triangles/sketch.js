const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
const MAX_SIZE = Math.max(WIDTH, HEIGHT) * 2;
const GROW = 45;
const ANGLE = 6;
const START_SIZE = 0.7;

let triangles = [];
let useMouseCoordinates = false;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  triangles.push(new Triangle(createVector(WIDTH / 2, HEIGHT / 2), ANGLE, START_SIZE));
}

function draw() {
  clear();
  const toRemove = [];
  for (let i = 0, len = triangles.length; i < len; i += 1) {
    // Increase triangle size
    if (i) {
      triangles[i].update(triangles[i - 1].getSize() / GROW);
    } else {
      triangles[i].update(triangles[i].getSize() / GROW);
    }
    triangles[i].draw();

    if (triangles[i].getSize() > MAX_SIZE) {
      toRemove.push(i);
    }
  }

  toRemove.forEach(() => {
    triangles.shift();
    let x = WIDTH / 2;
    let y = HEIGHT / 2;
    if (useMouseCoordinates) {
      x = mouseX;
      y = mouseY;
    }
    triangles.push(
      new Triangle(
        createVector(x, y),
        triangles[triangles.length - 1].getAngle() + ANGLE,
        START_SIZE,
      ),
    );
  });

  const lastTriangle = triangles[triangles.length - 1];
  if (lastTriangle.getSize() != START_SIZE && lastTriangle.getSize() < 1) {
    let x = WIDTH / 2;
    let y = HEIGHT / 2;
    if (useMouseCoordinates) {
      x = mouseX;
      y = mouseY;
    }
    triangles.push(new Triangle(createVector(x, y), lastTriangle.getAngle() + ANGLE, START_SIZE));
  }
}

function mouseMoved() {
  useMouseCoordinates = true;
}

function mousePressed() {
  // clear();
  // for (let i = 0, len = triangles.length; i < len; i += 1) {
  //   if (i) {
  //     triangles[i].update(triangles[i - 1].getSize() / GROW);
  //   } else {
  //     triangles[i].update(triangles[i].getSize() / GROW);
  //     console.log(triangles[i].getSize());
  //   }
  //   triangles[i].draw();
  // }
}
