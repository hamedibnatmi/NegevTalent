import AutoCompleteTrieNode from "./AutoCompleteTrieNode.js"
class AutoCompleteTrie {
    constructor() {
        this.root = new AutoCompleteTrieNode();
    }

    addWord(word) {
        let node = this.root;
        let lword = word.toLocaleLowerCase();
        for (let char of lword) {
            if (!node.children[char]) {
                node.value = char;
                node.children[char] = new AutoCompleteTrieNode();
            }
            console.log("node", node)
            node = node.children[char];
        }
        node.endOfWord = true;
    }



}


let t = new AutoCompleteTrie();
console.log("t", t.addWord("Hamed"))