export default class pokemonModel {
    constructor() {
        this.pokemon = null;
        this.pokemonApi = "https://pokeapi.co/api/v2/pokemon/";
    }

    async getPokemon(name) {
        try {
            let response = await fetch(`${this.pokemonApi}${name}`);
            let data = await response.json();
            this.pokemon = data;
            return this.pokemon;
        } catch (error) {
            return Error("Pokemon not found, try again later");
        }
    }
}