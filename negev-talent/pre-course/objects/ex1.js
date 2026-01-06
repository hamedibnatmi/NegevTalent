let p1 = { name: "", age: 0, city: "" }
let p2 = { name: "", age: 0, city: "" }
console.log(p1)
console.log(p2)
p1.age = 27
p1.city = "Vienna"
p1.name = "John"

p2.age = 27
p2.city = "New York"
p2.name = "John"

console.log(p1)
console.log(p2)

let date = (p1.city == p2.city) ?
    "Jill wanted to date Robert"
    : "Jill wanted to date Robert, but couldn't"

console.log(date)
