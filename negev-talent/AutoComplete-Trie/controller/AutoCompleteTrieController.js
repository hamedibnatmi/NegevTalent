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
}

let t = new AutoCompleteTrieController();
t.addWord("Hammed");
t.addWord("Hammie");
// console.log(t.predictWords("Ha"))
console.log("Find: ", t.findWord("Hammie"))
