import Model from "../Model.js";

const tweeter = new Model();

describe("addPost", () => {
    it("should add a post", () => {
        tweeter.addPost("This is my own post!!");
        expect(tweeter.getPosts()[tweeter.getPosts().length - 1]).toEqual({
            id: "p" + (tweeter.postIdCounter - 1),
            text: "This is my own post!!",
            comments: []
        });
    });
});

describe("removePost", () => {
    it("should remove a post", () => {
        tweeter.removePost("p2");
        expect(tweeter.getPosts()).not.toContain(tweeter.getPosts().find(post => post.id === "p2"));
    });
});

describe("Add comments", () => {

    describe("addComment", () => {
        it("should add a comment", () => {
            tweeter.addComment("p1", "Damn straight it is!");
            console.log("addCommentTest125", tweeter.getPosts())
            console.log("addCommentTest126: ", tweeter.getPosts().find(post => post.id === "p1"));
            expect(tweeter.getPosts().find(post => post.id === "p1")).toEqual({
                id: "p1",
                text: "First post!",
                comments: [
                    { id: 'c1', text: 'First comment on first post!' },
                    { id: 'c2', text: 'Second comment on first post!!' },
                    { id: 'c3', text: 'Third comment on first post!!!' },
                    { id: "c7", text: "Damn straight it is!" }
                ]
            });
        });
    });
    describe("addComment", () => {
        it("should add a comment", () => {
            tweeter.addComment("p1", "Damn straight it is!2");
            expect(tweeter.getPosts().find(post => post.id === "p1")).toEqual({
                id: "p1",
                text: "First post!",
                comments: [
                    { id: 'c1', text: 'First comment on first post!' },
                    { id: 'c2', text: 'Second comment on first post!!' },
                    { id: 'c3', text: 'Third comment on first post!!!' },
                    { id: "c7", text: "Damn straight it is!" },
                    { id: "c8", text: "Damn straight it is!2" }
                ]
            });
        });
    });
})

describe("Remove comments", () => {
    describe("removeComment", () => {
        it("should remove a comment", () => {
            tweeter.removeComment("p1", "c1");
            console.log("removeCommentTest125", tweeter.getPosts())
            console.log("removeCommentTest126: ", tweeter.getPosts().find(post => post.id === "p1"));
            expect(tweeter.getPosts().find(post => post.id === "p1")).toEqual({
                id: "p1",
                text: "First post!",
                comments: [
                    { id: 'c2', text: 'Second comment on first post!!' },
                    { id: 'c3', text: 'Third comment on first post!!!' },
                    { id: "c7", text: "Damn straight it is!" },
                    { id: "c8", text: "Damn straight it is!2" }
                ]
            });
        });
    });
    describe("removeComment", () => {
        it("should remove a comment", () => {
            tweeter.removeComment("p1", "c2");
            console.log("removeCommentTest125", tweeter.getPosts())
            console.log("removeCommentTest126: ", tweeter.getPosts().find(post => post.id === "p1"));
            expect(tweeter.getPosts().find(post => post.id === "p1")).toEqual({
                id: "p1",
                text: "First post!",
                comments: [
                    { id: 'c3', text: 'Third comment on first post!!!' },
                    { id: "c7", text: "Damn straight it is!" },
                    { id: "c8", text: "Damn straight it is!2" }
                ]
            });
        });
    });
})






