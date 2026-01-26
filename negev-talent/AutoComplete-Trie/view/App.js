import readLine from "readline"

export default class App {
    constructor(controller) {
        this.controller = controller;

        this.rl = readLine.createInterface({
            input: process.stdin,
            output: process.stdout
        })
    }

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
}