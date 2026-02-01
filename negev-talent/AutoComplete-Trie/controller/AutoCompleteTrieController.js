import AutoCompleteTrie from "../model/AutoCompleteTrie.js";
import App from "../view/App.js";


export default class AutoCompleteTrieController {
    constructor() {
        this.trie = new AutoCompleteTrie();
        this.app = new App();
        this.app.getAddWord(this.addWord.bind(this));
        this.app.getSuggestions(this.predictWords.bind(this));
    }

    addWord(word) {
        console.log("word added", word);
        if (word) {
            this.trie.addWord(word);
            console.log(this.trie);
            this.app.updateWordCount(this.trie.wordsCount)
        }
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