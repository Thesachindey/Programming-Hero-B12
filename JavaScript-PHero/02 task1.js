// -------------------Task 1---------------
// // input
// let moneyIhave = 1000;
// let priceOfProduct = 700;

// let retrnMoney = moneyIhave - priceOfProduct;

// // output 
// console.log(retrnMoney); //300


//-----------------Task 2--------------
//subjetc gread
let subject = ["Mathematics", "Biology", "Chemistry", "Physics", "Bangla"]
//Input:
subject[0] = 75.25;
subject[1] = 65;
subject[2] = 80;
subject[3] = 35.45;
subject[4] = 99.50;

let sum = 0;
for (let index = 0; index < subject.length; index++) {
   sum += subject[index];
}

//average
//Output
console.log((sum / subject.length).toFixed(2));
// console.log(subject.length);// 5


//----------task 3------------
//remainder === modulus
// input 
let a = 119;
let reminder = a % 5;

//output 
console.log(reminder);//4


//--------task 4----------------
//input 

// NaN(Note a Number)
var k = isNaN('998');
var L = isNaN('HELLO');
//output
console.log(k); //false
console.log(L); //true