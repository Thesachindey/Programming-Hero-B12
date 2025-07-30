
// ______________________for of loop__________
// const number = [21, 24, 425, 5, 67, 7, 88, 5, 432, 3, 4]
// console.log(number);
// for (const num of number) {

//    console.log(`i want to eat ${num}`);

// }

// _________________while loop____________

// > কখন while loop ব্যবহার করা হয়?
//  while loop তখন ব্যবহার করা হয় যখন:

// আপনি জানেন না ঠিক কতবার লুপ চলবে
// (যেমন ইউজার কখন সঠিক ইনপুট দিবে, সেটা আগে থেকে জানা নেই)

// লুপ চালানোর জন্য একটি শর্ত নির্ভর করে
// (যেমন: যতক্ষণ পর্যন্ত ইনপুট ভুল হচ্ছে, ততক্ষণ চালাতে হবে)


// ⚠️ Note
// Infinite loop if condition never becomes false.

// Update loop variable inside the block.



let num = 1;
while (num <= 10) {
   console.log(`${num}`);
   num++;
}

//---------------Task 1---------------
// let count=1;


// while (count<=60) {
//     console.log("I will invest at least 6 hrs every single day for next 60 days!");
//     count++;
// }


//---------------Task 2---------------


// // subtast1

// let oddNum=61;

// while (oddNum<=100) {
//     if (oddNum%2==1) {
//         console.log(oddNum,"is odd number");
//     }else{
//         console.log(oddNum,"is even number");
//     }
//     oddNum++;
// }

// // Subtask-2

// let evenNum=78;

// while (evenNum<=98) {
//     if (evenNum%2==0) {
//         console.log(evenNum,"is even number");
//     }
//     evenNum++;
// }


//---------------Task 3---------------

// let numFrom = 81;
// let numTo = 131;
// let sum = 0;

// while (numFrom <= numTo) {
//     if (numFrom % 2 == 1) {
//         sum += numFrom;
//     }
//     numFrom++;

// }
// console.log("The sum of odd numbers is:", sum);





// let  num=206;
// let sum=0;
// while (num<=311) {
// if (num%2==0) {
//     sum+=num;
// }
// num++;
// }
// console.log("The sum of all the even numbers from 206 to 311 is:",sum);




//______________for loop_______________

// task1

// for (let index = 1; index <= 60; index++) {
//    console.log(" I will study hard every single day for next 60 days!",index);

// }


//task2

//odd
// for (let index = 61; index <= 100; index++) {
//    if (index%2==1) {
//     console.log(index);
//    }else{
//     console.log("The even number is",index);
//    }

// }

// for (let index = 78; index <= 98; index++) {
//     if (index%2==0) {

//         console.log("The even numbers from 78 to 98 is",index);
//     }
// }



// --------------task3----------

// The sum of all the even numbers from 206 to 311 :


// let sum=0;
// for (let index = 206; index <= 311; index++) {
//    if (index%2==0) {
//     sum+=index;
//    }

// }
// console.log("The sum of all the even numbers from 206 to 311 is:",sum);



// let Oddsum=0;
// for (let index = 206; index <= 311; index++) {
//    if (index%2 !==0) {
//     Oddsum+=index;
//    }

// }
// console.log("The sum of all the Odd numbers from 206 to 311 is:",Oddsum);




// --------------task4----------
// Generate a multiplication table for number 9

// let  table=19;
// for (let index = 0; index <= 10; index++) {
// console.log(table,"*",index,"=",table*index);

// }