import { inventory } from "./data.js";


export default class Model {
    constructor() {
        this.inventory = inventory;
    }

    checkInventory(items) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                for (let item of items) {
                    if (this.inventory[item].stock <= 0) {
                        rej(`${item} is out of stock.`)
                    }
                }
                res("All the items are in stock")
            }, 500);

        })
    }

    calculateTotal(items) {
        return new Promise((res) => {
            setTimeout(() => {
                let total = 0;
                for (let item of items) {
                    let count = items.filter(i => i == item).length;
                    total += this.inventory[item].price * count
                }
                res(`subtotal: ${total}, tax: ${total * 0.08}, total: ${total * 1.08}`)
            }, 200);
        })
    }

    processPayment(amount) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                if (Math.random() < 0.9) {
                    res(`transaction id: ${crypto.randomUUID()}, amount: ${amount},status: success`)
                } else {
                    rej(Error(`Payment failed, amount: ${amount}`))
                }
            }, 1500);
        })
    }

    updateInventory(items) {
        let promises = [];
        for (let item of items) {
            let count = items.filter(i => i == item).length;
            let promise = new Promise((res, rej) => {
                console.log("before update: ", this.inventory)
                setTimeout(() => {
                    if (!this.inventory[item]) {
                        return rej(`${item} is not exist.`)
                    }
                    if (this.inventory[item].stock <= 0) {
                        return rej(`${item} is out of stock.`)
                    }
                    if (this.inventory[item].stock < count) {
                        return rej(`${item} is not enough in stock.`)
                    }
                    this.inventory[item].stock -= count;
                    res(`${item} updated: ${this.inventory[item].stock}`)
                }, 300);
            })
            promises.push(promise)
        }
        return Promise.allSettled(promises)
    }
}