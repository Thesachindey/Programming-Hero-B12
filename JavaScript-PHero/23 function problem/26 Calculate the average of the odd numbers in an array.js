// Calculate the average of the odd numbers in an array

function oddAverageNum(numbers) {
    let odds = [];
    for (const elem of numbers) {
        if (elem % 2 === 1) {
            odds.push(elem);
        }
    }
    let sum = 0;
    for (const element of odds) {
        sum += element;
    }
    let average = sum / odds.length;
    return average;

}

let numbers = [26, 34, 45, 32, 45, 67, 5];
console.log(oddAverageNum(numbers));