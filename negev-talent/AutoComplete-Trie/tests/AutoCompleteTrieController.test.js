import AutoCompleteTrieController from "../controller/AutoCompleteTrieController.js";

describe("AutoCompleteTrieController", () => {
    it("should add a word to the trie", () => {
        const controller = new AutoCompleteTrieController();
        controller.addWord("hello");
        expect(controller.findWord("hello")).toBe(true);
    });
    it("should find a word in the trie", () => {
        const controller = new AutoCompleteTrieController();
        controller.addWord("hello");
        expect(controller.findWord("hello")).toBe(true);
    });
    it("should not find a word in the trie", () => {
        const controller = new AutoCompleteTrieController();
        controller.addWord("hello");
        expect(controller.findWord("world")).toBe(false);
    });
    it("should predict words in the trie", () => {
        const controller = new AutoCompleteTrieController();
        controller.addWord("hello");
        expect(controller.predictWords("he")).toEqual(["hello"]);
    });
    it("should not predict words in the trie", () => {
        const controller = new AutoCompleteTrieController();
        controller.addWord("hello");
        expect(controller.predictWords("world")).toEqual([]);
    });
})
