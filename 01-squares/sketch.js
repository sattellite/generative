let sideSize;
let margin;
let step;
let halfMargin;
let maxInnerSquares;
let width;
let height;

const squares = {};
const strokeStepGrow = 0.05;
const maxStrokeWeight = 3;

let animated = false;

function setup() {
  sideSize = random(15, 50);
  margin = sideSize / 6;
  step = sideSize + margin;
  halfMargin = margin / 2;
  maxInnerSquares = Math.ceil(sideSize / 10);

  width = Math.floor(window.innerWidth / step) * step;
  height = Math.floor(window.innerHeight / step) * step;

  createCanvas(width, height);
  frameRate(30);
  noFill();
  stroke(62, 39, 35);

  for (let y = halfMargin; y < height; y += step) {
    squares[y] = {};
    for (let x = halfMargin; x < width; x += step) {
      strokeWeight(1);
      square(x, y, sideSize);
      squares[y][x] = {
        cnt: Math.ceil(random(1, maxInnerSquares)),
        arr: [],
      };
      const cnt = squares[y][x].cnt;
      for (let z = 0; z < cnt; z += 1) {
        const offset = ((sideSize - margin) / (2 * cnt)) * z + random(1, 5);
        squares[y][x].arr.push({
          o: offset,
          w: random(1, maxStrokeWeight),
          d: Math.round(random(1)),
        });
        strokeWeight(squares[y][x].arr[z].w);
        square(x + offset, y + offset, sideSize - offset * 2);
      }
    }
  }
}

function draw() {
  if (animated) {
    clear();
    for (let y = halfMargin; y < height; y += step) {
      for (let x = halfMargin; x < width; x += step) {
        strokeWeight(1);
        square(x, y, sideSize);
        const cnt = squares[y][x].cnt;
        for (let z = 0; z < cnt; z += 1) {
          const offset = squares[y][x].arr[z].o;
          let dir = squares[y][x].arr[z].d;
          let w = squares[y][x].arr[z].w;
          if (w > maxStrokeWeight) {
            dir = 0;
          }
          if (w < 1) {
            dir = 1;
          }
          if (dir) {
            w += strokeStepGrow;
          } else {
            w -= strokeStepGrow;
          }
          squares[y][x].arr[z].w = w;
          squares[y][x].arr[z].d = dir;
          strokeWeight(w);
          square(x + offset, y + offset, sideSize - offset * 2);
        }
      }
    }
  }
}

function mousePressed() {
  animated = !animated
}
