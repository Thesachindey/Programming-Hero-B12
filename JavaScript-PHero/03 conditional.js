// let age = 1008;

// if (age >= 21 && age <= 40) {
//     console.log("You can seen this movie");
// }
// else if (age === 103) {
//     console.log("Hehe you can!");
// } else if (age > 103) {
//     console.log("you are allready death!!")
// }
// else {
//     console.log("Vag");
// }



// --------------Nested if else---------------
// let money = 400;

// if (money > 400) {
//     console.log("Bro you are reach!!")
// }
// else {
//     if (money > 300) {
//         console.log("Brought me some food!!")
//     }
//     else {
//         if (money > 100) {
//             console.log("You are note reach not poor!")
//         }
//         else if (money > 0) {
//             console.log("Chol muri kahi")
//         }
//         else {
//             if (money < 0) {
//                 console.log("You are note my friend ")
//             }
//         }
//     }
// }


//------------ ternary Operator-------------

/**
 * Ternary ---> Three parts;
 * 
 * (condition ? true--holy : false--holy)
 * 
 */

let yourAge = 21;

// normal if-else
// if(yourAge>18){
//     console.log("You can vote!");
// }else{
//     console.log("You can't!");
// }

//---- Ternary ----
// (yourAge > 18) ? console.log("you can vote") : console.log("you can't");

// ---------------------------------
// example 2

let price = 500;
let isLidar = false;

// if(isLidar===true){
//     price=0;
// }else{
//     price+=100;
// }
// console.log(
//     price
// );

// --ternary--
// price = isLidar === true ?  0 : price + 100;

// console.log(
//     price
// );

// ---------------------
// example-3


// if (isLidar === true) {
//     if (price > 1000) {
//         price = price / 2;
//     } else {
//         price = 0;
//     }
// } else {
//     price += 1000;
// }
// console.log(price);

// price = isLidar === true ? 0 : price+=1000

// price > 1000 ? price /= 2 : 0

// final -- nested ternary

price = isLidar === true ? price > 1000 ? price /= 2 : 0 : price += 1000

console.log(price);