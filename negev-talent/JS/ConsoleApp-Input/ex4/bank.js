export default function bank() {

    let balance = 0;

    return {
        deposit: (amount) => {
            balance += +amount;
            console.log(`Deposited ${amount}`);
            console.log(`New balance: ${balance}`);
        },
        withdraw: (amount) => {
            balance -= +amount;
            console.log(`Withdrew ${amount}`);
            console.log(`New balance: ${balance}`);
        },
        checkBalance: () => balance,
    }
}