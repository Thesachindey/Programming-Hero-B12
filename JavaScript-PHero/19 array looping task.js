//____________task1______________
// Write a JavaScript code to reverse the array colors without using the reverse method.

// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// let revColors=[];
// for (const element of colors) {
//     revColors.unshift(element);
// }
// console.log(revColors);



// _________task2__________

// Write a JavaScript code to get the even numbers from an array using any looping technique.

// Input: 
// let evenNumbers = [];
// const numbers = [12, 98, 5, 41, 23, 78, 46];
// for (const num of numbers) {
//     if (num%2==0) {
//         evenNumbers.push(num);
//     }
// }
// console.log(evenNumbers);

//____________________task3__________________

// Use a for...of loop to concatenate all the elements of an array into a single string.

// // Input: 
// var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
// let str = '';
// for (const element of numbers) {
//    str+=element;
// }
// console.log(str);
// // Output:
// // 'TomTimTinTik'


// __________________task4_______________________

// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: 
const statement = 'I am a hard working person';

let words = statement.split(' ').reverse().join(' ');
// let revWords = words.reverse();
// let revStr = revWords.join(' ');
// console.log(revStr);

console.log(words);

// Output:

// 'person working hard a am I'


