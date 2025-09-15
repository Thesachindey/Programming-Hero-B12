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


const newData={
    name:'Walton',
    color:'gray',
    brand:'walton',
    price:7000
}


//now add this new data into the product array and make an new array

const newArray=[...product,newData];
// console.log(newArray);

const remainingData=newArray.filter(p=>p.price<=500);
console.log(remainingData);