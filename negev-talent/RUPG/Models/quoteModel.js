export default class quotesModel {
    constructor() {
        this.quote = null;
        this.quoteApi = "https://api.kanye.rest/";
    }

    async getQuote() {
        try {
            let response = await fetch(this.quoteApi);
            let data = await response.json();
            this.quote = data.quote;
            return this.quote;
        } catch (error) {
            return Error("Quote not found, try again later");
        }
    }
}