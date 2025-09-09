// // // task-1 let, const
// // function call() {
// //     const num = 10;
// //     // num = 20
// //     return num;
// // }
// // console.log(call());//Error

// // function call2() {
// //     let num = 10;
// //     num = 20
// //     return num;
// // }
// // console.log(call2());

// // task-2 spread operator, diy arr1 + arr2
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const newArray=[...arr1,...arr2];
// console.log(newArray);

// // task-3 filter an array 

// let arrOfNum =[10,20,25,30,35,40];

// const filteredArr=arrOfNum.filter(num=>num>30);
// console.log(filteredArr);

// // task-4 find an element in an array
// const newNumArr=[5,10,15,20,25];
// const findNum=newNumArr.find(num=>num>15);
// console.log(findNum);

// // task-5 arrow function
// const greet =(name)=>{
//     let greeting=`Hello, ${name}!`
//     return greeting;
// }
// console.log(greet("Alice"));


// task-6 unique num array
let uniqueArray =(arr)=>{
let unique = [...new Set(arr)]
return unique;
}
console.log(
    uniqueArray([1,2,1,2,3,4,5,3,4,5]));


