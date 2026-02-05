import Controller from "./Controller/Contoller.js";
export default class Main {
    constructor() {
        this.controller = new Controller();
        this.controller.start();
    }
}

const main = new Main();