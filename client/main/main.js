function loadProducts() {
    console.log("load products");
}

function openProfile() {
    let profile = document.getElementById("profile");
    while (profile.firstChild) {
        profile.removeChild(profile.firstChild);
    }
    let idiv = document.createElement('div');
    idiv.innerText = "profile";
    profile.appendChild(idiv);
    document.getElementById("display-container").innerHTML = profile.innerHTML;
}

function openProducts() {
    let products = document.getElementById("products");
    while (products.firstChild) {
        products.removeChild(products.firstChild);
    }
    let idiv = document.createElement('div');
    idiv.innerText = "products";
    products.appendChild(idiv);
    document.getElementById("display-container").innerHTML = products.innerHTML;
}

function openCart() {
    let cart = document.getElementById("cart");
    while (cart.firstChild) {
        cart.removeChild(cart.firstChild);
    }
    let idiv = document.createElement('div');
    idiv.innerText = "cart";
    cart.appendChild(idiv);
    document.getElementById("display-container").innerHTML = cart.innerHTML;
}