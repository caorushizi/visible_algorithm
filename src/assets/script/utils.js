export default {
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
  },
  compareFn(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }
};
