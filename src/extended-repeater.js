// ---Done 
const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, options = {}) {
  if (!options.hasOwnProperty('separator')) options.separator = '+';
  if (!options.hasOwnProperty('additionSeparator'))
    options.additionSeparator = '|';

  if (!options.hasOwnProperty('addition')) {
    return createStr(str, options.repeatTimes, options.separator);
  } else {
    const additionStr = createStr(
      options.addition,
      options.additionRepeatTimes,
      options.additionSeparator
    );
    return createStr(str + additionStr, options.repeatTimes, options.separator);
  }

  function createStr(str, repeatTimes, separator) {
    if (isNaN(repeatTimes) || repeatTimes < 0) return str;
    const result = [];
    for (let i = 0; i < repeatTimes; i++) {
      result.push(str + '');
    }
    return result.join(separator.toString());
  }
};