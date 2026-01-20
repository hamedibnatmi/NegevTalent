function calculator() {
    const [num1, num2, operator] = process.argv.slice(2);
    switch (operator) {
        case "+":
            console.log(num1 + num2);
            break;
        case "-":
            console.log(num1 - num2);
            break;
        case "*":
            console.log(num1 * num2);
            break;
        case "/":
            console.log(num1 / num2);
            break;
        default:
            console.log("Invalid operator");
    }
}

calculator();
