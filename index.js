console.log("sssss");


let button = document.querySelector("button")
let input = document.querySelector("input")
let category = document.querySelector("#category")
let brand = document.querySelector("#brand")
let price = document.querySelector("#price")
let h1 = document.querySelector("h1")
let img = document.querySelector("img")

function getTovar() {
    let id = input.value
    let url = "https://dummyjson.com/products/" + id
    let xhr = new XMLHttpRequest()
    xhr.open("get", url, true);
    xhr.onload = function() {
        if(this.status === 200) {
            let data = JSON.parse(this.response)
            console.log(data)
            console.log(data.brand)
            console.log(data.category)
            console.log(data.price)
            h1.innerHTML = data.title
            desc.innerHTML = data.desc
            category.innerHTML = data.category
            brand.innerHTML = data.brand
            price.innerHTML = data.price
            img.src = data.images[0]
        }
        else {
            console.log(this.status)
            console.log("ЫЫЫ всё плохо ^_^")
        }
    };
    xhr.onerror = function() {
        console.log("ИНЕТ ПРОВЕРЬ")
    };
    
    xhr.send()
}

button.addEventListener('click', getTovar)
