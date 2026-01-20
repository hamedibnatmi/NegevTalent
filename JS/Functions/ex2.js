const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"', "?", "!", ";"]
const wordCounts = {}

const countWords = (str) => {
    const words = str.split(" ");
    const removedSpecialChars = words.map((word) => {
        for (let i = 0; i < specialChars.length; i++) {
            word = word.replace(specialChars[i], "");
        }
        return word;
    })


    let wordCount = {};
    for (let i = 0; i < removedSpecialChars.length; i++) {
        const word = removedSpecialChars[i];
        let wordFilter = removedSpecialChars.filter((wordToCheck) => {
            return wordToCheck.toLocaleLowerCase() === word.toLocaleLowerCase()
        })
        wordCount[word] = wordFilter.length;
    }
    return wordCount;
}

console.log(countWords(story));


