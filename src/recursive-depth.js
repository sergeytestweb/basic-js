//  --- Done ---
const CustomError = require('../extensions/custom-error');

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (arr.length === 0) {
      return 1;
    }
    const deeps = arr.map((element) => {
      let deep = 1;
      if (element instanceof Array) {
        deep += this.calculateDepth(element);
      }
      return deep;
    });

    return Math.max(...deeps);
  }
};