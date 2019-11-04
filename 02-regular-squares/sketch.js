const sideSize = 40;
const margin = sideSize / 10;
const step = sideSize + margin;
const halfMargin = margin / 2;
const maxInnerSquares = 4; //Math.ceil(sideSize / 5);

const width = Math.floor(window.innerWidth / step) * step;
const height = Math.floor(window.innerHeight / step) * step;

function setup() {
  createCanvas(width, height);
  noFill();
  stroke(62, 39, 35);
  drawSquares();
}

function mousePressed() {
  clear();
  drawSquares();
}

function drawSquares() {
  for (let y = halfMargin; y < height; y += step) {
    for (let x = halfMargin; x < width; x += step) {
      strokeWeight(1);
      square(x, y, sideSize);
      const cnt = Math.ceil(random(1, maxInnerSquares));
      for (let z = 1; z <= cnt; z += 1) {
        const offset = margin * z;
        // const offset = ((sideSize - margin) / (2 * cnt)) * z + random(1, 5);
        square(x + offset, y + offset, sideSize - offset * 2);
      }
    }
  }
}
