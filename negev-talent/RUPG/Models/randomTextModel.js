export default class randomTextModel {
    constructor() {
        this.randomText = null;
        this.randomTextApi = "https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1";
    }

    async getRandomText() {
        try {
            let response = await fetch(`${this.randomTextApi}`);
            let data = await response.json();
            this.randomText = data;
            return this.randomText;
        } catch (error) {
            return Error("Random text not found, try again later");
        }
    }
}