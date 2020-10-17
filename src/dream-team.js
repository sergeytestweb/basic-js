//  --- Done ---

const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if (arr && arr.length) {
    let sum = "",
      abbr = "";
    for (let elem of arr) {
      if (typeof elem == "string") {
     elem = elem.trim();
        sum += elem.slice(elem[0], 1).toUpperCase();
        abbr = sum.split("").sort().join("");
      }
    }
    return abbr;
  } else {
    return false;
  }
};
