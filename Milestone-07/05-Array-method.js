const product = [
    { name: 'Xiaomi', color: 'black', brand: 'Xiaomi', price: 300 },
    { name: 'iPhone 13', color: 'white', brand: 'Apple', price: 1000 },
    { name: 'Galaxy S21', color: 'gray', brand: 'Samsung', price: 900 },
    { name: 'Pixel 6', color: 'black', brand: 'Google', price: 700 },
    { name: 'OnePlus 9', color: 'blue', brand: 'OnePlus', price: 650 },
    { name: 'Realme 8', color: 'silver', brand: 'Realme', price: 350 }
    ,
    { name: 'iPhone 14', color: 'black', brand: 'Apple', price: 1100 },
    { name: 'iPhone SE', color: 'red', brand: 'Apple', price: 500 },
    { name: 'iPhone 12 Mini', color: 'blue', brand: 'Apple', price: 800 }
];
//rr.map(arrow fun) //prottyk element-yr upor  loop kory
// const priceArr=product.map(item=>item.price);
// console.log(priceArr); //this return new array

//arr.forEach()
// product.forEach((element)=>{
//     console.log(element.price);
// })// forEach don't return any thing, thats why we don't declared any thing


// arr.filter()
const filterArr = product.filter(elm => elm.brand === 'Apple')
// console.log(filterArr);

// const filterArr = product.filter((elm) => {
//     let brand = elm.brand === 'Apple'
//     return brand;
// })
// console.log(filterArr);


//arr.find()
/**
 * The find() method is used on arrays in JavaScript.
It helps you search inside an array and returns the first element that matches your condition.

👉 Syntax:

array.find(callback(element, index, array), thisArg);


callback → a function that tests each element of the array.

element → the current element being checked.

index → (optional) the position of the current element.

array → (optional) the array find() was called on.

thisArg → (optional) value to use as this inside callback.

⚡ Important:

It returns the first matching element, not all.

If no match is found → it returns undefined.
 */

const findArr = product.find(elm => elm.name === 'Pixel 6');
console.log(findArr);