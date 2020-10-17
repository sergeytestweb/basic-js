//  --- Done ---
const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(!(sampleActivity instanceof String) || +sampleActivity <= 0 || sampleActivity === null) {
    return false;
  }
  let age = Math.LN2(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD / 0.693;
  return Math.ceil(age);
};