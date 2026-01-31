// ex1
function checkLuckyNumber(num) {
    return new Promise((res, rej) => {
        if (num >= 0) {
            if (num % 7 == 0) {
                res("Lucky! ");
            } else {
                res("Not lucky")
            }
        } else {
            rej(Error("Invalid number"))
        }
    })
}

checkLuckyNumber(27).then(thRes => {
    console.log("The Result Is: ", thRes)
}
    // ,
    //     thRej => {
    //         console.log("Your Input: ", thRej)
    //     }
).catch(catchRej => {
    console.log("Your Error Handled By Catch: ", catchRej)
})





