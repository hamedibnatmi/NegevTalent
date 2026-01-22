const coffeeShop = {
    beans: 40,

    drinkRequirements: {
        latte: 10,
        americano: 5,
        doubleShot: 15,
        frenchPress: 12
    },

    makeDrink: function (drinkType) {
        if (this.drinkRequirements[drinkType] > this.beans) {
            console.log("Sorry, we're all out of beans")
            return
        } else if (this.drinkRequirements[drinkType]) {
            this.beans -= this.drinkRequirements[drinkType];
            return
        }
        console.log("Sorry, we don't make", drinkType)

    }
}


coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");