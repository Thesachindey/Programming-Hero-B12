//______task1_______
// Write a function to convert temperature from Celsius to Fahrenheit.


// let CelsiusToFahrenheit = (celsius) => {
//     let fahrenheit = (celsius * 9 / 5) + 32;
//     return console.log(celsius, '°C is', fahrenheit, '°F');
// }
// CelsiusToFahrenheit(25);

//______task2_______
// You are given an numbers of numbers. Count how many times the a number is repeated in the numbers.

// sample-input: numbers = [5,6,11,12,98, 5]


// function repetedNum(num) {
//     let count=0;
//    for (const element of num) {
//     if(element==25){
//         count++;
//     }
//    }
//     return console.log(count);
// }
// let numbers =  [5,6,11,12,98, 5];
// repetedNum(numbers);



//_______________task3________________
// Write a function to count the number of vowels in a string.


// function countVowels(str) {
//     let count = 0;
//     for (const element of str) {
//         if (element == "a" || element == "e" || element == "i" || element == "o" || element == "u") {
//             count++;
//         }
//     }
//     return console.log(count);
// }

// countVowels("Happy New Year");


//_______________task4________________
// Write a function to find the longest word in a given string.
// sample-input: I am learning Programming to become a programmer
// sample-output: Programming

// function longestWord(str) {
//     let words = str.split(" ");
//     let longest = words[0];
//     for (const element of words) {
//         if (element.length > longest.length) {
//             longest = element;
//         }
//     }
//     console.log(words);
//     return console.log(longest);
// }
// longestWord("I am learning Programming to become a programmer");


//_______________task5________________
// Generate a random number between 10 to 20.

function getRandomInt(min, max) {
    return Math.floor(Math.random() *(max-min+1))+min;
  }
  
console.log(getRandomInt(10,20));
   