// Copy of https://github.com/neefrehman/Generative/blob/master/sketches/19/11/181119.js
const blobs = [];
const blobsMax = 7;
let anim = true;
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  strokeWeight(blobsMax * 2);
  blendMode(SCREEN);
  noFill();
  for (let i = 0; i < blobsMax; i++) {
    blobs.push(new Blob(0, 0, 128, [i * (360 / blobsMax), 100, 100, 0.75], i));
  }
}

function draw() {
  if (anim) {
    clear();
    translate(width / 2, height / 2);
    for (const blob of blobs) {
      blob.show();
    }
  }
}

function mouseClicked() {
  anim = !anim;
}
