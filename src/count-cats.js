//  --- Done ---

const CustomError = require("../extensions/custom-error");

module.exports = function countCats(cats) {
  let count = 0;
  for(let i = 0; i < cats.length; ++i){
      for (let j = 0; j < cats[i].length; j++) {
        if(cats[i][j] === '^^') count++;
      }
    }
    return count;
};
