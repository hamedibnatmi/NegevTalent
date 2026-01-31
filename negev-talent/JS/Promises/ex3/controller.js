import Model from "./model.js"

export default class Controller {
    constructor() {
        this.model = new Model();
    }

    checkOut(items) {
        this.model.checkInventory(items).then(res => {
            console.log("checkout Result: ", res)
        }, rej => {
            console.log("checkout Reject:", rej)
        }
        )
        this.model.calculateTotal(items).then(res => {
            console.log("checkout total: ", res)
        })
        this.model.processPayment(99).then(res => {
            console.log("checkout payment: ", res)
        }, rej => {
            console.log("checkout reject: ", rej)
        })
        this.model.updateInventory(items).then(res => {
            console.log("Promises: ", res)
            res.filter(item => item.status === "fulfilled").map(item => item.value).forEach(item => {
                console.log("Inventory updated: ", item)
            })
            res.filter(item => item.status === "rejected").map(item => item.reason).forEach(item => {
                console.log("Inventory not updated: ", item)
            })
        })

    }


}

