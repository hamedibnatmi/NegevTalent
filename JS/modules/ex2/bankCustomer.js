import Bank from "./bankModule.js";
// import { bankModule } from "./bankModule.js";


const bank = Bank()
// const bank = bankModule()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950

// The above is not a mistake. The names are purposefully different from the instructions. Understand why?
// Yes, the names are different because we are using the default export in the bankModule.js file