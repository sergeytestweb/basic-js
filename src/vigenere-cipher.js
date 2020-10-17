//  --- Done ---
const CustomError = require('../extensions/custom-error');

class VigenereCipheringMachine {
  constructor(mod) {
    this.mod = mod;
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error();
    }

    const output = [];
    let messageWord = message.toLowerCase();
    let keyWord = key.toLowerCase();
    let keyIndex = 0;

    for (let i = 0; i < messageWord.length; i++) {
      if (!messageWord[i].match(/[a-z]/)) {
        output.push(messageWord[i]);
      } else {
        if (keyIndex > keyWord.length - 1) keyIndex = 0;
        const res =
          (this.alphabet.indexOf(messageWord[i]) +
            this.alphabet.indexOf(keyWord[keyIndex])) %
          26;
        output.push(this.alphabet[res]);
        keyIndex++;
      }
    }

    return !this.mod
      ? output.join('').toUpperCase()
      : output.reverse().join('').toUpperCase();
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error();
    }

    const output = [];
    let messageWord = message.toLowerCase();
    let keyWord = key.toLowerCase();
    let keyIndex = 0;

    for (let i = 0; i < messageWord.length; i++) {
      if (!messageWord[i].match(/[a-z]/)) {
        output.push(messageWord[i]);
      } else {
        if (keyIndex > keyWord.length - 1) keyIndex = 0;
        const res =
          (this.alphabet.indexOf(messageWord[i]) +
            26 -
            this.alphabet.indexOf(keyWord[keyIndex])) %
          26;
        output.push(this.alphabet[res]);
        keyIndex++;
      }
    }

    return !this.mod
      ? output.join('').toUpperCase()
      : output.reverse().join('').toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;