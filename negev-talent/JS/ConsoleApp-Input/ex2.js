import promptSync from "prompt-sync";

const prompt = promptSync();

const store = [];

while (store.length < 4) {
    const question = "What is your name?";
    const answer = prompt(question);
    store.push({ [question]: answer });
    const question2 = "What is your age?";
    const answer2 = prompt(question2);
    store.push({ [question2]: answer2 });
    const question3 = "What is your gender?";
    const answer3 = prompt(question3);
    store.push({ [question3]: answer3 });
    const question4 = "What is your job?";
    const answer4 = prompt(question4);
    store.push({ [question4]: answer4 });
}

console.log(store);
