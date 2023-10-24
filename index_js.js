console.log("Gjgsnrf yjvth ldf / Попытка номер два");

let button = document.querySelector("button")
let input = document.querySelector("input")
let category = document.querySelector("#category")
let brand = document.querySelector("#brand")
let price = document.querySelector("#price")
let h1 = document.querySelector("h1")
let img = document.querySelector("#img")
let discountPercentage = document.querySelector("#discountPercentage")
let rating = document.querySelector("#rating")
let stock = document.querySelector("#stock")
let prod = document.querySelector('#prod')
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
            
            img.innerHTML = ''
            for (let i of data.images) {
                img.innerHTML += `<img src="${i}" alt="">`
            }
            discountPercentage.innerHTML = data.discountPercentage
            rating.innerHTML = data.rating
            stock.innerHTML = data.stock
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

let products
let url = "https://dummyjson.com/products/"
let xhr = new XMLHttpRequest()
xhr.open("get", url, true);
xhr.onload = function() {
    if(this.status === 200) {
        products = JSON.parse(this.response)
        
        for (let i of products.products){
          prod.innerHTML += `<li><button data-id="${i.id}">${i.title}</button></li>`
        }

        let buttons = document.querySelectorAll('#prod button')

        buttons.forEach(function(elem) {
            elem.addEventListener("click", function() {
                input.value = elem.dataset.id
                getTovar()
            });
        });
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