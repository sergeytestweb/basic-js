// --- Done 
const CustomError = require('../extensions/custom-error');

const chainMaker = {
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) {
      value = '( )';
    }
    if (this.chain === undefined) {
      this.chain = [];
      this.chain.push(`( ${value} )`);
    } else {
      this.chain.push(`( ${value} )`);
    }

    return this;
  },
  removeLink(position) {
    if (
      Number.isInteger(position) &&
      position <= this.chain.length &&
      position >= 1
    ) {
      this.chain.splice(position - 1, 1);
    } else {
      this.chain = [];
      throw new Error('Error');
    }

    return this;
  },
  reverseChain() {
    if (this.chain && this.chain.length > 1) {
      this.chain = this.chain.reverse();
    }

    return this;
  },
  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  },
};

module.exports = chainMaker;