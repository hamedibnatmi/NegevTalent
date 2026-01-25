export default class AutoCompleteTrieNode {
    constructor() {
        this.value = null;
        this.children = {};
        this.endOfWord = false;
    }
}