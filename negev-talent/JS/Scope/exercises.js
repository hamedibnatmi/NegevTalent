// Exercises
//section 1
// const run = true

// if (run) {
//     let distance = 8
//     for (var i = 0; i < distance; i++) {
//         console.log("running")
//     }
//     console.log("Finished running " + distance + " miles")
// }

// console.log("Damn, you see this gal? She ran " + distance + " miles")

// What will console log? : undefined
// Will there be an error? : yes
// Why? : distance is not defined
// Will something be undefined? : yes, distance out the for loop
// Why? : distance will be local in the loop
// To what scope does each variable belong? run: global, i: local, distance: local
// Global or local? If local, to which specifically? : run: global for all the file, i: local for the loop, distance: local for the loop


//section 2

// if (13 == "space") {
//     let cowSound = "moo"
// }
// else {
//     console.log("Cow says " + cowSound)
// }

//what will console.log? : undefined
//will there be an error? : yes
//why? : cowSound local to the if block
//to what scope does each variable belong? : cowSound: local to the if block
//global or local? if local, to which specifically? : cowSound: local to the if block

//section 3

// const serveOrders = function (orders) {

//     for (let order of orders) {
//         let specialOrder = "special " + order
//         console.log("Served a " + specialOrder)
//     }

//     console.log("Finished serving all the orders: " + orders)
// }
// const allOrders = ["fish", "lettuce plate", "curious cheese"]
// serveOrders(allOrders)

//what will console.log? : will wor as expected, will add "special" to each order then will print  the last message.
//will there be an error? : no
//why? : all the variables called in there scope.
//to what scope does each variable belong? : specialOrder: local to the for loop, orders: function scope
//global or local? if local, to which specifically? : specialOrder: local to the for loop, orders: to the function scope.


//section 4

// const pot = "red pot with earth in it"

// const getSeed = function () {
//     const seed = "brown seed"
// }

// const plant = function () {
//     getSeed()
//     console.log("Planting the " + seed + " inside a " + pot)
// }

// plant()

//what will console.log? : undefined
//will there be an error? : yes
//why? : seed is local to the getSeed function
//to what scope does each variable belong? : seed: local to the getSeed function, pot: global
//global or local? if local, to which specifically? : seed: local to the getSeed function, pot: global
// should to access to seed by getSeed function

//section 5
// const doesUserExist = function (name) {
//     const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
//     for (let u of users) {
//         if (u.name == name) {
//             const found = true
//         }
//     }
//     return found
// }

// const userExists = doesUserExist("Lucius")
// if (userExists) {
//     console.log("We found the ragamuffin!")
// }
// else {
//     console.log("No idea where this person is.")
// }


//what will console.log? : undefined
//will there be an error? : yes
//why? : found is local to the if condition
//to what scope does each variable belong? : found: local to the if condition
//global or local? if local, to which specifically? : found: local to the if condition
// we should to return found in the if condition  or to define found in the function scope 

//section 6

const isEnough = false

const makeEnough = function () {
    for (let i = 0; i < 10; i++) {
        if (i > 5) {
            isEnough = true
        }
    }
}

makeEnough()
if (isEnough) {
    console.log("Finally, sheesh")
}
else {
    console.log("Here we go again...")
}

//what will console.log? : assignment error
//will there be an error? : yes
//why? : isEnough is const and cannot be reassign
//to what scope does each variable belong? : isEnough: global
//global or local? if local, to which specifically? : isEnough: global


