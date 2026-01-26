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
                node.children[char] = new AutoCompleteTrieNode();
                node.children[char].value = char;
            }
            node = node.children[char];
        }
        node.endOfWord = true;
        console.log("Root: ", this.root)
    }

    predictWords(prefix) {
        let node = this.root;
        let lPrefix = prefix.toLocaleLowerCase();

        for (let char of lPrefix) {
            if (char !== node.children[char].value) return []; // if a char is not match
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
}


let t = new AutoCompleteTrie();
t.addWord("Hammed");
t.addWord("Hammie");
console.log(t.predictWords("Ha"))