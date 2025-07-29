let products = [
    { name: 'xiaomi note 10 pro phone', price: 50000 },
    { name: 'lenovo laptop', price: 110000 },
    { name: 'samsung note 10 pro phone', price: 50000 },
    { name: 'apple note 10 pro phone', price: 50000 },
    { name: 'acer laptop', price: 140000 },
    { name: 'redmi note 10 pro Phone', price: 50000 },
    { name: 'asus laptop', price: 120000 },
    { name: 'hp Laptop', price: 130000 },
    { name: 'dell laptop', price: 150000 },
    { name: 'sony laptop', price: 160000 },
];
function matchedProduct(products, search) {
    let matchedProducts = [];
    for (const element of products) {
        if (element.name.toLowerCase().includes(search.toLowerCase())) {
            matchedProducts.push(element);
        }
    }
    return matchedProducts;
}

let result = matchedProduct(products, 'Phone');
console.log(result);