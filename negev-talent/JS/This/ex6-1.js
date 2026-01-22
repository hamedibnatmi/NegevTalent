const coffeeShop = {
    beans: 40,
    money: 100,

    drinkRequirements: {
        latte: { beanRequirement: 10, price: 5 },
        americano: { beanRequirement: 5, price: 2.5 },
        doubleShot: { beanRequirement: 15, price: 7.5 },
        frenchPress: { beanRequirement: 12, price: 7 }
    },

    makeDrink: function (drinkType) {
        if (this.drinkRequirements[drinkType] > this.beans) {
            console.log("Sorry, we're all out of beans")
            return
        } else if (this.drinkRequirements[drinkType]) {
            this.beans -= this.drinkRequirements[drinkType];
            this.buyDrink(drinkType);
            console.log("Mony:", this.money)
            return
        }
        console.log("Sorry, we don't make", drinkType)
    },

    buyBeans: function (numBeans) {
        let cost = numBeans * 3.5
        if (this.money > cost) {
            this.beans += numBeans;
            this.money -= cost;
            console.log("Added beans:", numBeans)
            return
        }
        console.log("You don't have money!!")
    },

    buyDrink: function (drinkType) {
        this.money += this.drinkRequirements[drinkType].price;
    }
}


coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");
coffeeShop.buyBeans(20)
coffeeShop.buyBeans(2)
coffeeShop.buyBeans(20)