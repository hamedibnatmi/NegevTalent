
function bankModule() {
    let balance = 500;
    return {
        showBalance: () => console.log(balance),
        deposit: (amount) => balance += amount,
    }
}

export default bankModule
// export { bankModule }
