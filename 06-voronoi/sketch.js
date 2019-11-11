//Original sketch here https://www.openprocessing.org/sketch/416366
let points,
  boundingBox,
  diagram,
  voronoi,
  palette,
  nextPalette,
  paletteInterp = 0.0,
  colorCycleSpeed = 10,
  pointCount = 700,
  framePalette,
  maxPoints = 700,
  palettes = [
    ['#20bf55', '#0b4f6c', '#01baef', '#fbfbff', '#757575'],
    ['#f6e8ea', '#ef626c', '#22181c', '#312f2f', '#84dccf'],
    ['#ceff1a', '#aaa95a', '#82816d', '#414066', '#1b2d2a'],
    ['#fe4a49', '#fed766', '#009fb7', '#e6e6ea', '#f4f4f8'],
    ['#909cc2', '#084887', '#f58a07', '#f9ab55', '#f7f5fb'],
    ['#202a25', '#5f4bb6', '#86a5d9', '#26f0f1', '#c4ebc8'],
    ['#4d9de0', '#e15554', '#e1bc29', '#3bb273', '#7768ae'],
    ['#393e41', '#d3d0cb', '#e7e5df', '#44bba4', '#e7bb41'],
    ['#1a535c', '#4ecdc4', '#f7fff7', '#ff6b6b', '#ffe66d'],
    ['#182825', '#016fb9', '#22aed1', '#6d8ea0', '#afa98d'],
    ['#ddfff7', '#93e1d8', '#ffa69e', '#aa4465', '#462255'],
    ['#7a5c61', '#f7accf', '#e8f0ff', '#6874e8', '#392759'],
  ];

function setup() {
  createCanvas(windowWidth, windowHeight);
  intializePalettes();
  generatePoints(pointCount);
  voronoi = new Voronoi();
  boundingBox = { xl: -1, xr: width + 1, yt: -1, yb: height + 1 };
}

function draw() {
  calcColors();
  background(255);

  diagram = calculateDiagram();
  for (let i = diagram.cells.length; i--; ) {
    if (diagram.cells[i].halfedges.length) {
      let v;
      const cellColor = diagram.cells[i].site.color;
      fill(cellColor);
      stroke(cellColor);
      beginShape();
      for (let j = diagram.cells[i].halfedges.length; j--; ) {
        v = diagram.cells[i].halfedges[j].getStartpoint();
        vertex(v.x, v.y);
      }
      endShape(CLOSE);
    }
  }
}

function mousePressed() {
  intializePalettes();
  generatePoints(pointCount);
}

function randomRadial(maxDist, center) {
  const md = maxDist === undefined ? max(width, height) / 2 : maxDist;
  const c = center === undefined ? createVector(width / 2, height / 2) : center;

  const angle = random(Math.PI * 2);
  const distance = random(sqrt(md));

  const x = c.x + cos(angle) * distance * distance;
  const y = c.y + -sin(angle) * distance * distance;

  return { x: x, y: y };
}

function randPoint() {
  return { x: random(width), y: random(height) };
}

function generatePointMetadata(point) {
  point.xOffset = random(PI * 2);
  point.yOffset = random(PI * 2);
  point.colorIndex = floor(random(palette.length));
  return point;
}

function generatePoints(count) {
  points = new Array(count);
  for (let i = points.length; i--; ) {
    points[i] = randPoint();
    points[i] = generatePointMetadata(points[i]);
  }
}

function intializePalettes() {
  palette = random(palettes);
  nextPalette = random(palettes);
  framePalette = new Array(palette.length);
}

function calcColors() {
  for (let i = palette.length; i--; ) {
    const c1 = palette[i],
      c2 = nextPalette[i];
    framePalette[i] = lerpColor(color(c1), color(c2), paletteInterp);
  }
}

function paint(x, y) {
  const point = { x: x, y: y };
  point = generatePointMetadata(point);
  points.push(point);

  if (points.length > maxPoints) {
    points.shift();
  }
}

function calculateDiagram() {
  const transform = new Array(points.length),
    timeOffset = (frameCount / 480) * Math.PI;

  for (let i = transform.length; i--; ) {
    transform[i] = {};
    transform[i].color = framePalette[points[i].colorIndex];

    transform[i].x = points[i].x + sin(timeOffset + points[i].xOffset) * 8;
    transform[i].y = points[i].y + sin(timeOffset + points[i].yOffset) * 8;
  }

  voronoi.recycle(diagram);
  return voronoi.compute(transform, boundingBox);
}
