const circle = function(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;
};
circle.prototype.contain = function(x, y) {
  return (
    (this.x - x) * (this.x - x) + (this.y - y) * (this.y - y) <= this.r * this.r
  );
};

export default circle;
