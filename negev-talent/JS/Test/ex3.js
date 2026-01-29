//should return a clean string without these symbols: "!", "#", ".", ",", "'"
function simplify(str) {
    let symbols = ["!", "#", ".", ",", "'"]
    return str.split("").filter(c => symbols.indexOf(c) == -1).join("")
}

export { simplify }
