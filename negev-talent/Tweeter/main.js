import Model from "./Model.js";
import View from "./render.js";

class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View();
    }

    init() {
        this.view.createTweeterTitle("Tweeter");
        this.view.createAddPostSection();
        this.view.renderPosts(this.model.getPosts());
        console.log(this.model.getPosts());
    }
}

const controller = new Controller();
controller.init();