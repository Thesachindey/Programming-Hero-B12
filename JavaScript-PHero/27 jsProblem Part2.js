// let Disa=21;
// let Morni=29;
// if(Disa>Morni){
//     console.log("Disa will get the strawberry!");
// }else{
//     console.log("Morni will get the strawberry!");
// }

// //inside function

// function getMax(num1,num2){
//     if(num1>num2){
//         return num1;
//     }else{
//         return num2;
//     }
// }
// console.log(getMax(12,15));

let Kim = 12;
let Jim = 15;
let Tim = 20;
// if(Kim>Jim && Kim>Tim){
//     console.log("Kim will get the strawberry!");
// }else if(Jim>Kim && Jim>Tim){
//     console.log("Jim will get the strawberry!");
// }else{
//     console.log("Tim will get the strawberry!");
// }

//Math.max() method
// console.log(Math.max(Kim,Jim,Tim)); // returns the maximum value from the given numbers
// let maxNum = Math.max(Kim, Jim, Tim);
// if (maxNum === Kim) {
//     console.log("Kim will get the strawberry!");
// } else if (maxNum === Jim) {
//     console.log("Jim will get the strawberry!");
// }
// else {
//     console.log("Tim will get the strawberry!");
// }

//___________find the largest number from an array__________

const arr = [65, 66, 68, 72, 78, 40, 65, 66, 99, 100];

function getHighestNum(arrWithNum) {
    let maxNum = arrWithNum[0];
    for (const num of arrWithNum) {
        if (num < maxNum) {
            maxNum = num;
        }
    }
    // console.log(maxNum)
    return maxNum;
}
let maxNumOfArr = getHighestNum(arr);
console.log(`The max number of arry is the => ${maxNumOfArr}`);
// ----------------------------------
// find the largest number from an array using Math.max() method
const heights=[65,66,68,72,78,60,65,66];
const maxNum=Math.min(...heights);// spread operator (...) is used to spread the array elements as individual arguments to the Math.max() function.
console.log(`the largest number is ${maxNum}`);

// //___________find the smallest number from an array__________

function getMin(numArr){
    let minNum=numArr[0];
    for (const num of numArr) {
        if (num<minNum) {
            minNum=num;

        }
    }
    return minNum;
}
const minNum=getMin(heights);
console.log('min value is',minNum);

// */ total wood needed for chair,table,bed

// function woodQuantity(chairQuantity,tableQuantity,bedQuantity) {
//     const parChairWood=3;
//     const parTableWood=10;
//     const parBedWood=50;

//     const chairTotalWood=chairQuantity*parChairWood;
//     const tableTotalWood=tableQuantity*parTableWood;
//     const bedTotalWood=bedQuantity*parBedWood;

//     const totalWood=chairTotalWood+tableTotalWood+bedTotalWood;
//     return console.log(totalWood);
// }
// woodQuantity(4,2,3);

// ______minimum phone price search from an array______

// const phonePrices=[10000,15000,20000,25000,30000,35000,40000,45000,50000,55000,60000];

// function getMinPrice(prices) {
//     let minPrice=prices[0];
//     for (const price of prices) {
//         if (price<minPrice) {
//             minPrice=price;
//         }
//     }
//     return minPrice;
// }
// const minPrice=getMinPrice(phonePrices);
// console.log('minimum price is',minPrice);

// __________________if array with object____________________

// let phones = [
//     { name: 'samsung', price: 100000, storage: 32, color: 'black', camera: '12mp' },
//     { name: 'xaomi', price: 30000, storage: 32, color: 'black', camera: '12mp' },
//     { name: 'HTC', price: 50000, storage: 32, color: 'black', camera: '12mp' },
//     { name: 'Nokia', price: 50000, storage: 32, color: 'black', camera: '12mp' },
// ];

// function getCheapestPhone(phone) {
//     let CheapestPhone = phone[0].price;
//     let cheapestPhoneDetails;
//     for (const element of phone) {
//         if (element.price < CheapestPhone) {
//             CheapestPhone = element.price;
//             cheapestPhoneDetails =`Name: ${element.name} Price: ${element.price}`;
//         }
//     }
//     return cheapestPhoneDetails;
// }
// let CheapestPhone = getCheapestPhone(phones);
// console.log(CheapestPhone);

// // __________________if array with object____________________

// let products = [
//     { name: 'shart', price: 1000, quantity: 4 },
//     { name: 'pant', price: 1500, quantity: 4 },
//     { name: 'shoe', price: 2000, quantity: 2 },
//     { name: 'bag', price: 500, quantity: 2 }
// ]

// function getTotalPrice(product) {
//     let totalPrice = 0;
//     for (const element of product) {
//         totalPrice += element.price * element.quantity;
//         console.log(element.name + ': ' + element.price + " - with quantity : " + element.quantity);
//     }
//     return totalPrice;
// }
// let totalPrice = getTotalPrice(products);
// console.log("Total price:", totalPrice, "tk");
