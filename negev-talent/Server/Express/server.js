import express from "express";

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]


const app = express();
const PORT = 3000;
app.use(express.static("dist"))


app.get("/", (req, res) => {
    res.send("Server is up and running smoothly")
});

app.get("/priceCheck/:name", (req, res) => {

    console.log("params", req.params)
    const { name } = req.params
    const item = store.find(item => item.name === name)
    if (item) {
        res.send({ price: item.price })
    } else {
        res.send({ price: null })
    }
})

app.get("/buy/:name", (req, res) => {
    const { name } = req.params
    const item = store.find(item => item.name === name)
    if (item) {
        if (item.inventory > 0) {
            item.inventory--
            res.send({ success: true, price: item.price, inventory: item.inventory })
        } else {
            res.send({ success: false, price: null })
        }
    } else {
        res.send({ success: false, price: null })
    }
})

app.get("/sale/", (req, res) => {
    const { admin } = req.query
    if (admin === "true") {
        const adminStore = store.map(item => {
            if (item.name == "chair" || item.name == "picture frame")
                return { ...item, price: item.price * 0.5 }
            return item
        })
        res.send(adminStore)
    } else {
        res.send(store)
    }
})



app.listen(PORT, () => {
    console.log("Express App server ... ")
})