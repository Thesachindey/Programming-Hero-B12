//sum of array numbers

// function sumOfNumbers() {
//     let sum = 0;
//     for (const number of numbers) {
//         sum += number;
//     }
//     return sum;
// }

// let numbers = [1, 2, 6, 7];
// console.log(sumOfNumbers(numbers));


//return even number only

function evenNumOnly(numbers) {
    const evenNumbers = [];
    for (const number of numbers) {
        if (number%2===0) {
            evenNumbers.push(number);
        }
    }
    return evenNumbers;
}

let numbers=[26,34,45,32,45,67,5];
console.log(evenNumOnly(numbers));