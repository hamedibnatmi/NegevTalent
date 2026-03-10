const btn = document.querySelector("button")
const input = document.querySelector("input")
const price = document.querySelector("#price")

btn.addEventListener("click", async () => {
    const name = input.value
    const response = await fetch(`/priceCheck/${name}`)
    const data = await response.json()
    price.textContent = data.price
})


const buyBtn = document.querySelector("#buyButton")
const buyInput = document.querySelector("#buyInput")
const buyInv = document.querySelector("#inv")

buyBtn.addEventListener("click", async () => {
    const item = buyInput.value
    const res = await fetch(`/buy/${item}`)
    const data = await res.json()
    buyInv.innerHTML = `Congratulations, you've just bought ${item} for ${data.price}. There are ${data.inventory} left now in the store.`

})