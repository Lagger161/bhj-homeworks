let cart = document.querySelector(".cart__products");
let productDec = document.querySelectorAll(".product__quantity-control_dec");
let productInc = document.querySelectorAll(".product__quantity-control_inc");
let addProduct = document.querySelectorAll(".product__add");

function cartProd(products, productsId) {
    return products.find(element => element.dataset.id === productsId);
}


function addCart(id, img, quantity) {
    let addedProduct = `<div class="cart__product" data-id="${id}">
                            <img class="cart__product-image" src="${img}">
                            <div class="cart__product-count">${quantity}</div>
                            <a href="#" class="task__remove">&times;</a>
                        </div>`;
    cart.insertAdjacentHTML("beforeend", addedProduct);

}

for (let proButton of productDec) {
    proButton.addEventListener("click", function() {
        let currentValue = Number(this.closest(".product__quantity-controls").querySelector(".product__quantity-value").innerText) - 1;
        if (currentValue <= 0) {
            currentValue = 1;
        }
        this.closest(".product__quantity-controls").querySelector(".product__quantity-value").innerText = currentValue;   
    });
}

for (let incButton of productInc) {
    incButton.addEventListener("click", function() {
        let currentValue = Number(this.closest(".product__quantity-controls").querySelector(".product__quantity-value").innerText) + 1;
        this.closest(".product__quantity-controls").querySelector(".product__quantity-value").innerText = currentValue; 
    });
}

for (let addCartButton of addProduct) {
    addCartButton.addEventListener("click", function() {

        if (document.querySelector(".cart").classList.contains("hidden")) {
            document.querySelector(".cart").classList.remove("hidden")
        }

        let productsCart = Array.from(document.querySelectorAll(".cart__product"));
        let ProductID = this.closest(".product").dataset.id;
        let ProductImg = this.closest(".product").querySelector(".product__image").src;
        let ProductQuantity = this.closest(".product__quantity").querySelector(".product__quantity-value").textContent;
        let findProduct = cartProd(productsCart, ProductID);

        if (findProduct) {
            findProduct.querySelector(".cart__product-count").textContent = Number(ProductQuantity) + Number(findProduct.querySelector(".cart__product-count").textContent);
        } else {
            addCart(ProductID, ProductImg, ProductQuantity);
        }
    })
}
        
