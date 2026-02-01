import data from "./data.js";
class Model {
    constructor() {
        this.posts = data;
        this.postIdCounter = data.length;
        this.commentIdCounter = parseInt(data[data.length - 1].comments[data[data.length - 1].comments.length - 1].id.slice(1)) + 1;
    }

    addPost(postText) {
        this.posts.push({ id: "p" + this.postIdCounter++, text: postText, comments: [] });
    }

    getPosts() {
        return this.posts;
    }

    removePost(postId) {
        this.posts = this.posts.filter(post => post.id !== postId);
    }

    removeComment(postId, commentId) {
        this.posts = this.posts.map(post => {
            if (post.id === postId) {
                post.comments = post.comments.filter(comment => comment.id !== commentId);
            }
            return post;
        });
    }

    addComment(postId, commentText) {
        this.posts = this.posts.map(post => {
            if (post.id === postId) {
                post.comments.push({ id: "c" + this.commentIdCounter, text: commentText });
                this.commentIdCounter++;
            }
            return post;
        });
    }
}

export default Model;