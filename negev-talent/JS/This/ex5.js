const revealSecret = function (secret) {
    return secret;
};

const shoutIt = function (person, func) {
    person.revealItAll = func;
    const result = person.revealItAll(person.secret);
    console.log(person.name + " said: " + result);
};

const avi = {
    name: "Avi",
    secret: "Im scared of snakes!"
};

const narkis = {
    name: "Narkis",
    secret: "I don't have secrets because I'm zen like that."
};

shoutIt(avi, revealSecret);
shoutIt(narkis, revealSecret);
