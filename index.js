const inputName = document.getElementById("name")
const inputPrice = document.getElementById("price")

inputName.addEventListener("keydown", (e) => {
    const keyName = e.key;
    if(keyName === "Enter") {
        e.preventDefault()
    }
})

inputPrice.addEventListener("keydown", (e) => {
    const keyName = e.key;
    if(keyName === "Enter") {
        e.preventDefault()
    }
})




const submitButton = document.getElementById("submit")

submitButton.addEventListener("click", (e) => {
    e.preventDefault()
    const nameInput = document.getElementById("name").value
    const priceInput = document.getElementById("price").value

    const ul = document.querySelector(".products-list").innerHTML = ""
    itemCreator(nameInput, priceInput)

    itemsReader(productsItems)

})

itemsReader(productsItems)

function itemsReader(productsItems) {

    for (let i = 0; i < productsItems.length; i++) {
        const newItem = document.createElement("li")
        newItem.className = "products-item"
        const name = document.createElement("p")
        name.innerText = productsItems[i].name
        const price = document.createElement("strong")
        price.innerText = `R$${productsItems[i].price}`
        newItem.append(name, price)

        const ul = document.querySelector(".products-list")
        ul.appendChild(newItem)
    }
}

function itemCreator(nameInput, priceInput) {
    const itemObject = {name, price}
    itemObject.name = nameInput
    itemObject.price = priceInput
    productsItems.push(itemObject)
}