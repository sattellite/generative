let PI_2 = Math.PI * 2;

class Triangle {
  constructor(pos, angle, size = 0) {
    this.pos = pos;
    this.size = size;
    this.angle = angle;
  }
  setSize(s) {
    this.size = s;
  }
  getSize() {
    return this.size;
  }
  setPos(x, y) {
    this.pos.x = x;
    this.pos.y = y;
  }
  getPos() {
    return this.pos;
  }

  getAngle() {
    return this.angle;
  }
  draw() {
    let x1 = this.pos.x + Math.cos(this._getRadian(0)) * this.size;
    let x2 = this.pos.x + Math.cos(this._getRadian(120)) * this.size;
    let x3 = this.pos.x + Math.cos(this._getRadian(240)) * this.size;
    let y1 = this.pos.y + Math.sin(this._getRadian(0)) * this.size;
    let y2 = this.pos.y + Math.sin(this._getRadian(120)) * this.size;
    let y3 = this.pos.y + Math.sin(this._getRadian(240)) * this.size;

    noFill();
    triangle(x1, y1, x2, y2, x3, y3);
  }
  update(s = 0) {
    this.size += s;
    this.angle++;
  }
  _getRadian(a) {
    return (PI_2 / 360) * (this.angle + a);
  }
}
