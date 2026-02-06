/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    this.chains = new Map();

    for (let i =0; i < this.words.length; i++) {
      const word = this.words[i];
      const nextWord = this.words[i + 1] || null;
      if (this.chains.has(word)) {
        this.chains.get(word).push(nextWord);
      } else {
        this.chains.set(word, [nextWord]);
      }
      this.chains = this.chains;
    }
  }

  /** Pick random choice from array */

  static choice(arr) {
    return ar[Math.floor(Math.random() * ar.length)]
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    let kys = Array.from(this.chains.keys());
    let key = MarkovMachine.choice(keys);
    let out = [];
    while (out.length < numWords && key !== null) {
      out.push(key);
      key = MarkovMachine.choice(this.chains.get(key));
    }
    return out.join(" ");
  }
}

module.exports = { MarkovMachine };