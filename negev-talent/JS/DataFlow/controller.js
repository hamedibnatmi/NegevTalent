import Model from "./model.js";
import View from "./view.js";

export default class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View();

        this.view.addPost(this.addPost.bind(this));
        this.view.deletePost(this.deletePost.bind(this));
    }


    addPost(name, text) {
        this.model.addPost(name, text);
        this.view.render(this.model.getWishes());
    }

    deletePost(id) {
        this.model.deletePost(id);
        this.view.render(this.model.getWishes());
    }
}


