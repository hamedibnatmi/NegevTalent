//The first two genes should be the same as those in genes
const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]

console.log(genes.length);

//Replace "RLF" with "CRYZ" and "CRYZ" with "RLF" (swap their places)
[genes[2], genes[4]] = [genes[4], genes[2]]

console.log(genes)
//Remove "AZIN2" from where it is, and insert two of these "AZIN2"s at the end of the strand

genes.splice(3, 1)
genes.push("AZIN2", "AZIN2")
console.log(genes)

//Add "FXT" to the start of the strand
genes.unshift("FXT")
console.log(genes)
