const circle = function(x, y, R, vx, vy) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.r = R;
  this.isFilled = false;
};

circle.prototype.move = function(minx, miny, maxx, maxy) {
  this.x += this.vx;
  this.y += this.vy;
  this.checkCollision(minx, miny, maxx, maxy);
};

circle.prototype.checkCollision = function(minx, miny, maxx, maxy) {
  if (this.x - this.r < minx) {
    this.x = this.r;
    this.vx = -this.vx;
  }
  if (this.x + this.r >= maxx) {
    this.x = maxx - this.r;
    this.vx = -this.vx;
  }
  if (this.y - this.r < miny) {
    this.y = this.r;
    this.vy = -this.vy;
  }
  if (this.y + this.r >= maxy) {
    this.y = maxy - this.r;
    this.vy = -this.vy;
  }
};

circle.prototype.contain = function(x, y) {
  return (
    (this.x - x) * (this.x - x) + (this.y - y) * (this.y - y) <= this.r * this.r
  );
};

export default circle;
