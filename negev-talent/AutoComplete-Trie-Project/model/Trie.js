import TrieNode from "./TrieNode.js";

export default class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root; //start from the root
        const lWord = word.toLowerCase(); //convert to lower case

        for (const char of lWord) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode(); //craete new node if not exist
                console.log(this.root)
            }
            node = node.children[char]; //move to the next node
        }
        node.isEndOfWord = true; //mark the end of the word
        node.words.push(word); //add the word to the node
    }



    autoComplete(prefix) {
        let node = this.root;
        const lPrefix = prefix.toLowerCase();

        for (const char of lPrefix) {
            if (!node.children[char]) {
                return []; //no words (for the given prefix) found
            }
            node = node.children[char]; //move to the next node (for the given prefix) till the end of the prefix
        }
        return node.collectWords(node); //return all words (with the given prefix) found
    }



    collectWords(node) {
        let words = [];
        if (node.isEndOfWord) {
            words.push(...node.words); // add the word to the list if the node is the end of a word
        }
        for (const child of Object.values(node.children)) {
            words.push(...this.collectWords(child)); // dive deep in the trie and collect all words under the current node
        }
        return words;

    }


}



