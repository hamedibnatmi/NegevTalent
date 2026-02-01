import Model from "./Model.js";
import View from "./render.js";

class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View();
        this.view.root.addEventListener("addPost", this.addPost.bind(this));
        this.view.root.addEventListener("add-comment-event", this.addComment.bind(this))
        this.view.root.addEventListener("delete-post-button", this.removePost.bind(this));
        this.view.root.addEventListener("delete-comment-event", this.removeComment.bind(this))
    }

    start() {
        this.view.createTweeterTitle("Tweeter");
        this.view.createAddPostSection();
        this.view.renderPosts(this.model.getPosts());
        console.log(this.model.getPosts());
    }
    addPost(event) {
        this.model.addPost(event.detail);
        this.view.renderPosts(this.model.getPosts());
    }

    addComment({ detail }) {
        console.log("ev: ", detail)
        this.model.addComment(detail.postId, detail.text);
        this.view.renderPosts(this.model.getPosts());
        console.log("ev: ", this.model.getPosts())
    }

    removePost(e) {
        this.model.removePost(e.detail.postId);
        this.view.renderPosts(this.model.getPosts());
    }

    removeComment(e) {
        this.model.removeComment(e.detail.postId, e.detail.commentId);
        this.view.renderPosts(this.model.getPosts());
    }







}

const controller = new Controller();
controller.start();