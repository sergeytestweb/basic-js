// -------- Done -------


const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( diskColor, movesSpeed ) {
  let countTurns = Math.pow(2, diskColor) - 1;
  let sec = Math.floor(countTurns * 3600 / movesSpeed);
  let result = {
    turns: countTurns,
    seconds: sec
  }
  return result;
};
