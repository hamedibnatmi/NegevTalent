import AutoCompleteTrie from "../model/AutoCompleteTrie.js";


export default class AutoCompleteTrieController {
    constructor() {
        this.trie = new AutoCompleteTrie();
    }

    addWord(word) {
        this.trie.addWord(word);
    }

    predictWords(word) {
        return this.trie.predictWords(word);
    }

    findWord(word) {
        return this.trie.findWord(word);
    }

    help() {
        console.log(`
Commands:
  add <word>      - Add word to dictionary
  find <word>     - Check if word exists
  complete <prefix> - Get completions
  help           - Show this message
  exit           - Quit program`)
    }
}