import utils from "../../assets/script/utils";

const SelectionSortData = function(n, randomBound = 100) {
  this.numbers = [];
  this.N = n;
  this.orderedIndex = -1;
  this.currentMinIndex = -1;
  this.currentCompareIndex = -1;

  for (let i = 0; i < n; i++) {
    this.numbers.push(utils.getRandomInt(1, randomBound));
  }
};

SelectionSortData.prototype.get = function(index) {
  if (index < 0 || index >= this.numbers.length) {
    throw new Error("序号超出限制");
  }
  return this.numbers[index];
};

SelectionSortData.prototype.swap = function(i, j) {
  const t = this.numbers[i];
  this.numbers[i] = this.numbers[j];
  this.numbers[j] = t;
};

export default SelectionSortData;
