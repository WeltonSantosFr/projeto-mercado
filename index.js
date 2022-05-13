// pegar valor dos inputs e retirar o evento padrão de submit
{
    const inputName = document.getElementById("name")
    const inputPrice = document.getElementById("price")
    const inputQtd = document.getElementById("qtd")

    inputName.addEventListener("keydown", (e) => {
        const keyName = e.key;
        if (keyName === "Enter") {
            e.preventDefault()
        }
    })

    inputPrice.addEventListener("keydown", (e) => {
        const keyName = e.key;
        if (keyName === "Enter") {
            e.preventDefault()
        }
    })

    inputQtd.addEventListener("keydown", (e) => {
        const keyName = e.key;
        if (keyName === "Enter") {
            e.preventDefault()
        }
    })

    const inputNameExclude = document.getElementById("nameExclude")
    const inputPriceExclude = document.getElementById("priceExclude")
    const inputQtdExclude = document.getElementById("qtdExclude")
    console.log(inputQtdExclude)

    inputNameExclude.addEventListener("keydown", (e) => {
        const keyName = e.key
        if (keyName === "Enter") {
            e.preventDefault()
        }
    })

    inputQtdExclude.addEventListener("keydown", (e) => {
        const keyName = e.key
        if (keyName === "Enter") {
            e.preventDefault()
        }
    })
}

const excludeButton = document.getElementById("exclude")

excludeButton.addEventListener("click", (e) => {
    e.preventDefault()
    const nameInputExclude = document.getElementById("nameExclude")

    const nameValue = nameInputExclude.value

    itemExcluder(nameValue)
    itemsReader(productsItems)
})


const submitButton = document.getElementById("submit")

submitButton.addEventListener("click", (e) => {
    e.preventDefault()
    const nameInput = document.getElementById("name").value
    const qtdInput = document.getElementById("qtd").value
    const priceInput = document.getElementById("price").value


    itemCreator(nameInput, priceInput, qtdInput)

    itemsReader(productsItems)

})

itemsReader(productsItems)

function itemsReader(productsItems) {
    const ul = document.querySelector(".products-list")
    ul.innerHTML = ""

    for (let i = 0; i < productsItems.length; i++) {
        const newItem = document.createElement("li")
        newItem.className = "products-item"
        const name = document.createElement("p")
        name.innerText = productsItems[i].name
        const qtd = document.createElement("p")
        qtd.innerText = `qtd: ${productsItems[i].qtd}`
        const price = document.createElement("strong")
        price.innerText = `R$${productsItems[i].price}`
        newItem.append(name, qtd, price)

        const ul = document.querySelector(".products-list")
        ul.appendChild(newItem)
    }
}

function itemCreator(nameInput, priceInput, qtdInput) {
    const itemObject = { name, price, qtd }
    itemObject.name = nameInput
    itemObject.price = priceInput
    itemObject.qtd = qtdInput

    let alreadyExist = false
    for (let i = 0; i < productsItems.length; i++) {
        if (productsItems[i].name === nameInput) {
            alreadyExist = true
            break
        }
    }
    if (alreadyExist === false) {
        productsItems.push(itemObject)
    }
    else {
        alert("Produto ja cadastrado")
    }
}

function itemExcluder(nameInput) {
    for (let i = 0; i < productsItems.length; i++) {
        if (nameInput === productsItems[i].name) {
            productsItems.splice(i, 1)
        }
    }
}

console.log(productsItems)