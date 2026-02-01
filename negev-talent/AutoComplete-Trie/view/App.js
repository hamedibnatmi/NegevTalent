// import readLine from "readline"

export default class App {
    constructor(controller) {
        this.controller = controller;

        // this.rl = readLine.createInterface({
        //     input: process.stdin,
        //     output: process.stdout
        // }) comment out for browser

        this.createUI();
    }


    //read line 
    start() {
        console.log("=== AutoComplete Trie Console ===")
        console.log("Type 'help' for command")
        this.prompt()
    }

    prompt() {
        this.rl.question("--> ", (input) => {
            const [command, value] = input.trim().split(" ");
            switch (command) {
                case "add":
                    this.controller.addWord(value);
                    console.log(`Added: ${value} to dictionary`);
                    break;

                case "complete":
                    let Suggestions = this.controller.predictWords(value).join(", ");
                    console.log(`Suggestions for ${value}: ${Suggestions}`);
                    break;

                case "find":
                    this.controller.findWord(value)
                        ? console.log(`${value} exists in dictionary`)
                        : console.log(`${value} not found in dictionary`);
                    break;

                case "help":
                    this.controller.help();
                    break;

                case "exit":
                    this.rl.close();
                    console.log("Goodbye!")
                    return

                default:
                    console.log("Unkown command");
            }
            this.prompt();


        })
    }





    // AutoComplete-Trie - UI
    createUI() {
        console.log(document.body)
        document.body.append(
            this.createInput("word", "add-word", "text", "Enter a word to add to dictionary", "200px"),
            this.createButton("add-word-btn", "Add Word"),
            document.createElement("br"),
            document.createElement("br"),
            this.createInput("search", "search", "text", "Start typing to see suggestions", "290px", "block"))
        this.wordCount()
    }

    createInput(name, id, type, placeholder, width, display) {
        let input = document.createElement("input");
        input.name = name;
        input.id = id;
        input.type = type;
        input.placeholder = placeholder;
        input.style.borderRadius = "5px";
        input.style.padding = "5px 8px";
        input.style.width = width;
        input.style.display = display || "inline"
        return input;
    }

    createButton(id, text) {
        let addWordBtn = document.createElement("button");
        addWordBtn.id = id;
        addWordBtn.innerHTML = text;
        addWordBtn.style.color = "white";
        addWordBtn.style.background = "blue";
        addWordBtn.style.border = "none";
        addWordBtn.style.borderRadius = "5px";
        addWordBtn.style.padding = "5px 10px";
        addWordBtn.style.cursor = "pointer";
        addWordBtn.style.margin = "10px";
        return addWordBtn;
    }

    createSuggestions(suggestions, prefix) {
        let suggestionsList = document.createElement("ul");
        suggestionsList.setAttribute("id", "suggestionsList");
        suggestionsList.style.borderRadius = "5px";
        suggestionsList.style.padding = "0px 0px";
        suggestionsList.style.width = "305px";
        suggestionsList.style.listStyle = "none";
        suggestionsList.style.backgroundColor = "white";
        suggestionsList.style.border = "1px solid #ccc";
        suggestionsList.style.margin = "0px";
        suggestionsList.style.maxHeight = "auto";
        suggestionsList.style.position = "absolute";
        suggestionsList.style.zIndex = "1";
        suggestions.forEach(suggestion => {
            let li = document.createElement("li");
            li.style.cursor = "pointer";
            li.style.borderBottom = "1px solid #f5f5f5ff";
            li.style.padding = "5px 8px";
            li.innerHTML = `<span style="background-color: pink;"><b>${prefix}</b></span>${suggestion.slice(prefix.length)}`;
            suggestionsList.append(li);
        })
        return suggestionsList;
    }

    getSuggestions(handler) {
        let searchInput = document.getElementById("search");
        searchInput.addEventListener("input", (e) => {
            let suggestions = handler(e.target.value)
            let ul = document.getElementById("suggestionsList")
            if (ul) {
                ul.remove()
            }
            if (suggestions.length > 0) {
                let list = this.createSuggestions(suggestions, e.target.value);
                searchInput.after(list);
            }
        })
        searchInput.addEventListener("blur", (e) => {
            let ul = document.getElementById("suggestionsList")
            if (ul) {
                ul.remove()
            }
            searchInput.value = ""
        })
    }





    getAddWord(handler) {
        let addWordBtn = document.getElementById("add-word-btn");
        addWordBtn.addEventListener("click", () => {
            let word = document.getElementById("add-word").value;
            document.getElementById("add-word").value = "";
            if (!word.trim()) {
                this.addedWordMessage(word, false, "Please enter a word");
                return;
            }
            if (word) {
                try {
                    handler(word);
                    this.addedWordMessage(word, true);
                } catch (error) {
                    this.addedWordMessage(word, false, error.message);
                }
            }
        })
    }

    countUI() {
    }

    wordCount() {
        let inputDiv = document.getElementById("search")
        let countDiv = document.createElement("div")
        let h1 = document.createElement("h1")
        h1.setAttribute("id", "h1");
        let subTitle = document.createElement("h5")
        inputDiv.after(countDiv);
        countDiv.append(h1);
        countDiv.append(subTitle);
        countDiv.style.width = "290px";
        countDiv.style.textAlign = "center";
        countDiv.style.backgroundColor = "white";
        countDiv.style.borderRadius = "5px";
        countDiv.style.padding = "5px 10px";
        countDiv.style.backgroundColor = "#f3f4f8ff";
        countDiv.style.margin = "30px 0px 0px 0px";
        countDiv.style.maxHeight = "auto";
        countDiv.style.height = "fit-content";

        h1.innerHTML = "0";
        h1.style.color = "#2470bdff";
        subTitle.innerHTML = "Words in Dictionary";
    }

    updateWordCount(num) {
        let h1 = document.getElementById("h1");
        if (h1) {
            h1.innerHTML = num;
        }
    }

    addedWordMessage(word, isAdded, message = "") {
        let inputDiv = document.getElementById("add-word-btn")
        let messageDiv = document.createElement("div")
        messageDiv.setAttribute("id", "messageDiv");
        if (document.getElementById("messageDiv")) {
            document.getElementById("messageDiv").remove();
        }
        inputDiv.after(messageDiv);
        messageDiv.style.width = "290px";
        messageDiv.style.textAlign = "center";
        messageDiv.style.backgroundColor = "white";
        messageDiv.style.borderRadius = "5px";
        messageDiv.style.padding = "5px 10px";
        messageDiv.style.backgroundColor = isAdded ? "#51ac77ff" : "#ac5151ff";
        messageDiv.style.margin = "30px 0px 0px 0px";
        messageDiv.style.maxHeight = "auto";
        messageDiv.innerHTML = isAdded ? `✓ Added '${word}' to dictionary` : `${message}`;
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }






}