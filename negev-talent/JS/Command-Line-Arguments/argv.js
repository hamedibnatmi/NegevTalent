// const args = process.argv.slice(2);
// console.log(args);
// const name = args[0];
// const age = args[1];

// console.log(name, "S" + age);

// import readline from "readline";

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("ما اسمك؟ ", (name) => {

//     console.log("أهلاً", name);
//     rl.close();
// });

import readline from "readline/promises";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const name = await rl.question("ما اسمك؟ ");
const age = await rl.question("كم عمرك؟ ");

console.log(`مرحباً ${name}، عمرك ${age}`);

rl.close();
