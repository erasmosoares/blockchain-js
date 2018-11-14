const SHA256 = require('crypto-js/sha256');

class Block{
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data= data;
        this.hash = this.calculateHash();
        this.nonce = 0;
      }

      calculateHash(){
          //npm install --save crypto-js /// support hash functions
          return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
      }

      /**
         * Starts the mining process on the block. It changes the 'nonce' until the hash
         * of the block starts with enough zeros (= difficulty)
         *
         * @param {number} difficulty
      */
      mineBlock(difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
            this.nonce++;
            this.hash = this.calculateHash();
        }
    
        console.log(`Block mined: ${this.hash}`);
      }
}

module.exports = Block;