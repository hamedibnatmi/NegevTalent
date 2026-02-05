export default class View {
    constructor() {
        this.container = document.getElementById("root");
        this.uiElementsOrder = {}
    }


    render() {
        this.container.innerHTML = "";
        if (this.uiElementsOrder.card) {
            this.container.appendChild(this.uiElementsOrder.card);
        }
        if (this.uiElementsOrder.list) {
            this.container.appendChild(this.uiElementsOrder.list);
        }
        if (this.uiElementsOrder.quote) {
            this.container.appendChild(this.uiElementsOrder.quote);
        }
        if (this.uiElementsOrder.pokemon) {
            this.container.appendChild(this.uiElementsOrder.pokemon);
        }
        if (this.uiElementsOrder.aboutMe) {
            this.container.appendChild(this.uiElementsOrder.aboutMe);
        }
        if (this.uiElementsOrder.genrateBtn) {
            this.container.appendChild(this.uiElementsOrder.genrateBtn);
        }
    }

    createElement(tag, attributes, content) {
        let element = document.createElement(tag);
        for (let attribute in attributes) {
            element.setAttribute(attribute, attributes[attribute]);
        }
        element.innerHTML = content;
        return element;
    }

    crateUserCard(mainUser) {
        let card = this.createElement("div", { class: "card" }, "");
        if (mainUser instanceof Error) {
            card.innerHTML = mainUser.message;
            card.style.backgroundColor = "red";
            this.uiElementsOrder.card = card;
            this.render();
            return card;
        }
        let img = this.createElement("img", { src: mainUser.picture.large }, "");
        let info = this.createElement("div", { class: "info" }, "");
        let name = this.createElement("h2", { class: "name" }, `${mainUser.name.first} ${mainUser.name.last}`);
        let address = this.createElement("p", { class: "address" }, `${mainUser.location.city}, ${mainUser.location.state}`);
        card.appendChild(img);
        info.appendChild(name);
        info.appendChild(address);
        card.appendChild(info);
        this.uiElementsOrder.card = card;
        this.render();
        return card;
    }

    createUsersList(users) {
        let list = this.createElement("ul", { class: "list" }, "");
        if (users instanceof Error) {
            list.innerHTML = users.message;
            list.style.backgroundColor = "red";
            this.uiElementsOrder.list = list;
            this.render();
            return list;
        }
        for (let user of users) {
            let li = this.createElement("li", { class: "list-item" }, "");
            li.innerHTML = user.name.title + " " + user.name.first + " " + user.name.last;
            list.appendChild(li);
        }
        this.uiElementsOrder.list = list;
        this.render();
        return list;
    }

    createQuoteSection(quote) {
        let section = this.createElement("section", { class: "quote-section" }, "");
        if (quote instanceof Error) {
            section.innerHTML = quote.message;
            section.style.backgroundColor = "red";
            this.uiElementsOrder.quote = section;
            this.render();
            return section;
        }
        let quoteH2 = this.createElement("h6", { class: "quote-title" }, "Favorite quote");
        let quoteP = this.createElement("p", { class: "quote" }, `"${quote}"`);
        section.appendChild(quoteH2);
        section.appendChild(quoteP);
        this.uiElementsOrder.quote = section;
        this.render();
        return section;
    }
    createPokemonBox(pokemon) {
        let box = this.createElement("div", { class: "pokemon-box" }, "");
        if (pokemon instanceof Error) {
            box.innerHTML = pokemon.message;
            box.style.backgroundColor = "red";
            this.uiElementsOrder.pokemon = box;
            this.render();
            return box;
        }
        let sprit = [];
        for (let sp in pokemon.sprites) {
            if (pokemon.sprites[sp] != null) {
                sprit.push(pokemon.sprites[sp]);
            }
        }
        if (sprit.length) {
            let img = this.createElement("img", "");
            box.appendChild(img);
            let count = 0;
            setInterval(() => {
                if (typeof sprit[count] == "string") {
                    img.src = sprit[count];
                }
                count++;
                if (count == sprit.length) {
                    count = 0;
                }
            }, 1000);
        }
        let subtitle = this.createElement("span", { class: "pokemon-title" }, "Favorite pokemon: ");
        let pokemonName = this.createElement("span", { class: "pokemon" }, `${pokemon.name}`);
        box.appendChild(subtitle);
        box.appendChild(pokemonName);
        this.uiElementsOrder.pokemon = box;
        this.render();
        return box;
    }

    createAboutMe(aboutMe) {
        let section = this.createElement("section", { class: "about-me" }, "");
        if (aboutMe instanceof Error) {
            section.innerHTML = aboutMe.message;
            section.style.backgroundColor = "red";
            this.uiElementsOrder.aboutMe = section;
            this.render();
            return section;
        }
        let title = this.createElement("h6", { class: "about-me-title" }, "About me");
        let text = this.createElement("p", { class: "about-me-text" }, aboutMe);
        section.appendChild(title);
        section.appendChild(text);
        this.uiElementsOrder.aboutMe = section;
        this.render();
        return section;
    }

    createGenrateBtn() {
        let btn = this.createElement("button", { class: "genrate-btn" }, "Genrate");
        this.uiElementsOrder.genrateBtn = btn;
        btn.addEventListener("click", () => {
            this.container.dispatchEvent(new CustomEvent("genrate"));
        });
        this.render();
        return btn;
    }
}
