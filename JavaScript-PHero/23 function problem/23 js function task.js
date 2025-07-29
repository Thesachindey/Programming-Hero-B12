//----------------task1----------------

// function multiply(a, b, c, d) {
//     return a * b * c * d;
// }
// console.log(multiply(1, 2, 3, 4));



//--------------task2----------------
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

// function oddOrEven(num) {
//     if (num % 2 === 0) { //even number  
//         console.log('Even number',num);      
//         return num / 2;
//     } else { //odd number  
//         console.log('Odd number',num);      
//         return num * 2;
//     }
// }
// console.log(oddOrEven(10));




//--------------task3----------------
// Write a function called make_avg() which will take an arr of integers and the size of that arr and return the average of those values.

// let arr=[10,20,30,40,50];

// function make_Avg(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         sum += element;
//     }
//     return sum / arr.length;
// }
// console.log(make_Avg(arr));




// let makeAvg=(arr)=>{
// let sum=0;
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     sum+=element;   
// }
// return console.log(sum/arr.length);
// }
// makeAvg(arr);

//-------------task4------------
function count_zero(str){
    let count=0;
    for (const element of str) {
        if(element=="0"){
            count++;
        }
    }
    return count;
}
let str="100101";
console.log(count_zero(str));


//___________task5____________

function odd_even(x){
    if(x%2===0){
        console.log(x);
        return "Even";
    }else{
        console.log(x);
        return "Odd";
    }
}
console.log(odd_even(6));

//NOTE:task summery

// 1.
function multyply4(a, b, c, d) {
    return console.log(a * b * c * d);
}
multyply4(2, 2, 2, 2);//16

// 2.
function oddOrEven(num) {
    if (num % 2 === 1) {
        return console.log(`The number ${num} is odd if we  multiply it by 2 the result is`, num * 2);
    } else { return console.log(`The number ${num} is even if we divide it by two the result is`, num / 2); }
}
oddOrEven(7);

// 3.
function make_avg(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
         sum = sum + arr[i]; 
        }
        return console.log(sum,arr.length,sum/arr.length);
}

make_avg([2,3,34,44,4]);

// 4.
 function countZero(str){
    let count=0;
    for (const elm of str) {
        if (elm==='0') {
            count++;
        }
    }
    return console.log(`There are "${count}" 0's in that string.`);
 }
 countZero('01010100110');


//  5.
function oddEven(int){
if (int%2===0) {
    return console.log(`The number ${int} is`,"Even");
}else{return console.log(`The number ${int} is`,"Odd");}
}
oddEven(34);