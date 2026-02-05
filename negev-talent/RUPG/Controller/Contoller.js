import View from "../View/View.js";
import Models from "../Models/index.js";
export default class Controller {
    constructor() {
        this.view = new View();
        this.usersModel = new Models.usersModel();
        this.quoteModel = new Models.quoteModel();
        this.pokemonModel = new Models.pokemonModel();
        this.randomTextModel = new Models.randomTextModel();
        this.view.container.addEventListener("genrate", this.start.bind(this));
        this.pokemonList = ["dragonite", "pikachu", "charizard", "bulbasaur", "squirtle"];
    }


    start() {
        this.getUser();
        this.getUsers();
        this.getQuote();
        this.getPokemon(this.pokemonList[Math.floor(Math.random() * this.pokemonList.length)]);
        this.getAboutMe();
        this.createGenrateBtn();
    }

    async getUser() {
        return this.view.crateUserCard(await this.usersModel.getUser());
    }
    async getUsers() {
        return this.view.createUsersList(await this.usersModel.getUsers());
    }
    async getQuote() {
        return this.view.createQuoteSection(await this.quoteModel.getQuote());
    }
    async getPokemon(name) {
        return this.view.createPokemonBox(await this.pokemonModel.getPokemon(name));
    }
    async getAboutMe() {
        return this.view.createAboutMe(await this.randomTextModel.getRandomText());
    }
    createGenrateBtn() {
        return this.view.createGenrateBtn();
    }
}