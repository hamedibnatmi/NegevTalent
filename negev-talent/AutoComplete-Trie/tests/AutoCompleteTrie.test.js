import AutoCompleteTrie from "../model/AutoCompleteTrie.js";

describe("AutoCompleteTrie", () => {
    it("should add a word to the trie", () => {
        const trie = new AutoCompleteTrie();
        trie.addWord("hello");
        expect(trie.findWord("hello")).toBe(true);
    });
    it("should find a word in the trie", () => {
        const trie = new AutoCompleteTrie();
        trie.addWord("hello");
        expect(trie.findWord("hello")).toBe(true);
    });
    it("should not find a word in the trie", () => {
        const trie = new AutoCompleteTrie();
        trie.addWord("hello");
        expect(trie.findWord("world")).toBe(false);
    });
    it("should predict words in the trie", () => {
        const trie = new AutoCompleteTrie();
        trie.addWord("hello");
        expect(trie.predictWords("he")).toEqual(["hello"]);
    });
    it("should not predict words in the trie", () => {
        const trie = new AutoCompleteTrie();
        trie.addWord("hello");
        expect(trie.predictWords("world")).toEqual([]);
    });

})