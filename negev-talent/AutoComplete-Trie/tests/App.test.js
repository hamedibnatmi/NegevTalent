import App from "../view/App.js";


describe("App", () => {
    it("should start the app", () => {
        const app = new App();
        app.start();
    });
})
