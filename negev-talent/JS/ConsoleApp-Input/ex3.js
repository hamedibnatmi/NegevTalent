import readLine from "readline";

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    "What is your name?",
    "How old are you?",
    "What is your gender?",
    "What is your job?"
];

const answers = [];

// rl.question("What is your name?", (answer) => {
//     answers.push(answer);
//     rl.question("How old are you?", (answer) => {
//         answers.push(answer);
//         rl.question("What is your gender?", (answer) => {
//             answers.push(answer);
//             rl.question("What is your job?", (answer) => {
//                 answers.push(answer);
//                 rl.close();
//             });
//         });
//     });
// });

// rl.on("close", () => {
//     console.log(answers);
// });

const question = (q) => new Promise((resolve) => rl.question(q, resolve));
const answer = await question("What is your name?");
answers.push(answer);
const answer2 = await question("How old are you?");
answers.push(answer2);
const answer3 = await question("What is your gender?");
answers.push(answer3);
const answer4 = await question("What is your job?");
answers.push(answer4);
rl.close();
console.log(answers);



