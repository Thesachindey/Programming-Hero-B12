const handleAddProducts = () => {
    const productEl = document.getElementById("product");
    const quantityEl = document.getElementById("quantity");
    const product = productEl.value;
    const quantity = parseInt(quantityEl.value);

    displayProduct(product, quantity);
    addProductToCart(product, quantity);

    productEl.value = '';
    quantityEl.value = '';
}

const displayProduct = (product, quantity) => {
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`
    // get ul 
    const ul = document.getElementById('products-container');
    ul.appendChild(li);
}

// adding local storage

// make an store obj 
const getStoreCart = () => {
    let cart = {};

    const cartJson = localStorage.getItem('cart');
    if (cartJson) {
        cart = JSON.parse(cartJson);
    }
    return cart;
}

const addProductToCart = (product, quantity) => {
    const cart = getStoreCart()

    if (cart[product]) {
        cart[product] += quantity; //this is for same product
    } else {
        cart[product] = quantity;
    }
    console.log('cart', cart);
    const cartJson = JSON.stringify(cart);
    localStorage.setItem('cart', cartJson);
}


//display product from local storage
const displayProductFromLs = () => {
    const cart = getStoreCart();
    for (const product in cart) {
       const quantity=cart[product];
       displayProduct(product,quantity);
    }
}
displayProductFromLs();

/**
 * To save Object/array in the Local storage
 * 1. convert the object to JSON string by using JSON.stringify
 * 2. localstorage.setItem()
 * 
*/


/**
 * to get object/array from the local storage
 * 1. get the item from the local storage and it will be in JSON string
 * 2. convert the JSON string to js object by using JSON.parse
 * 
*/