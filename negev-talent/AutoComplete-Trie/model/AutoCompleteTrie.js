import AutoCompleteTrieNode from "./AutoCompleteTrieNode.js"
export default class AutoCompleteTrie {
    constructor() {
        this.root = new AutoCompleteTrieNode();
        this.wordsCount = 0;
    }

    addWord(word) {
        if (this.findWord(word)) {
            throw new Error("✕ Word already exists");
        }
        if (!word.trim()) {
            throw new Error("✕ Cannot add empty word");
        }
        console.log("word added", word);
        let node = this.root;
        let lword = word.toLocaleLowerCase();
        for (let char of lword) {
            if (!node.children[char]) {
                node.children[char] = new AutoCompleteTrieNode();
                node.children[char].value = char;
            }
            node = node.children[char];
        }
        node.endOfWord = true;
        this.wordsCount++;
    }

    predictWords(prefix) {
        if (!prefix) {
            return []
        }
        let node = this.root;
        let lPrefix = prefix.toLocaleLowerCase();

        for (let char of lPrefix) {
            if (!node.children[char]) return []; // if a char is not match
            node = node.children[char]; // if yes node procced
        }
        return this.collectWords(node, lPrefix)
    }

    collectWords(node, lPrefix) {
        let wordsCollection = [];

        if (node.endOfWord) {
            wordsCollection.push(lPrefix);
        }
        for (let child of Object.values(node.children)) {

            wordsCollection.push(...this.collectWords(child, lPrefix + child.value))
        }
        return wordsCollection;
    }


    findWord(word) {
        let node = this.root;
        let lword = word.toLocaleLowerCase();

        for (let char of lword) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return node.endOfWord
    }




}
