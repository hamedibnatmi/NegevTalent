import bank from "./bank.js";
import readLine from "readline";

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const BLUE = '\x1b[34m';
const RESET = '\x1b[0m';

const menu = bank();

function atm() {
    rl.question(`${BLUE}select option number: \n1- check balance, \n2- deposit, \n3-withdraw, \n4-exit\n${RESET}`, (answer) => {
        switch (answer) {
            case "1":
                if (menu.checkBalance() < 0) {
                    console.log(`${RED}You don't have enough balance${RESET}`);

                } else {
                    console.log(`${GREEN}Balance: ${menu.checkBalance()}${RESET}`);
                }
                atm();
                break;
            case "2":
                rl.question(`${BLUE}How much would you like to deposit?\n${RESET}`, (amount) => {
                    if (isNaN(amount)) {
                        console.log(`${YELLOW}Please enter a valid number${RESET}`);
                        atm();
                        return;
                    }
                    menu.deposit(amount);
                    atm();
                });
                break;
            case "3":
                rl.question(`${BLUE}How much would you like to withdraw?\n${RESET}`, (amount) => {

                    if (isNaN(amount)) {
                        console.log(`${RED}Please enter a valid number${RESET}`);
                        atm();
                        return;
                    }
                    if (amount < 0) {
                        console.log(`${RED}Please enter a positive number${RESET}`);
                        atm();
                        return;
                    }
                    if (amount > menu.checkBalance()) {
                        console.log(`${RED}You don't have enough balance${RESET}`);
                        atm();
                        return;
                    }
                    menu.withdraw(amount);
                    atm();
                });
                break;
            case "4":
                rl.close();
                break;
            default:
                console.log(`${YELLOW}Invalid option${RESET}`);
                atm();
        }
    });
}
atm();
