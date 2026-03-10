const express = require("express")
const users = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]
const app = express();

app.use(express.json())

let wordCounter = {};

let reqCounter = 0;

const logger = (req, res, next) => {
    const date = new Date().toLocaleString()
    console.log(date + " Method: " + req.method + " URL: " + req.url)
    next()
}
const reqCounterMid = (req, res, next) => {
    reqCounter++;
    req.requiestsCount = reqCounter
    console.log("Requiests: ", req.requiestsCount)
    next()
}

const validateId = (req, res, next) => {
    const id = req.params.id;

    if (id && !isNaN(id)) {
        next()
    } else {
        next({ status: 400, message: "invalid ID format" })
    }
}

const checkResourceExists = (req, res, next) => {
    const { id } = req.params;
    const user = users.find(user => user.id == id)
    if (user) {
        next()
    } else {
        next({ status: 404, message: "user not found" })

    }
}
app.use(logger)
app.use(reqCounterMid)

app.get("/sanity", (req, res) => {
    res.send("Server is up and running")
})

app.get("/:word", (req, res) => {
    const word = req.params.word
    if (word) wordCounter = { ...wordCounter, [word]: (wordCounter[word] || 0) + 1 }
    res.send(`count: ${wordCounter[word]}`)
})

app.post("/post", (req, res) => {
    const { word } = req.body;
    if (word) wordCounter = { ...wordCounter, [word]: (wordCounter[word] || 0) + 1 }
    res.send({ text: `Added ${word}`, currentCount: wordCounter[word] })
})

app.get("/user/:id", validateId, checkResourceExists, (req, res) => {
    const { id } = req.params
    const user = users.find(u => u.id == id).name
    res.send("user: " + user)
})


app.use((err, req, res, next) => {
    const statusCode = err.status || 500
    res.status(statusCode).json({
        error: true,
        message: err.message || "Server Error!!"
    })
})



app.listen(3000, () => {
    console.log("this server listen to PORT 3000")
})