// ___________Problem-01 __________________

// : Help The Zoo Manager

// function calculateMoney(ticketSale) {
//     const ticketPrice = 120;
//     const salarySpend = (500 + (8 * 50));

//     let totalIncome = (ticketPrice * ticketSale) - salarySpend;
//     if (0 <= ticketSale) {
//         return totalIncome;
//     } else {
//         return 'Please enter a valid number!!';
//     }
// }
// console.log(calculateMoney(1055));


// ___________Problem-02 __________________
// Problem-02: Good Name , Bad Name


// function endsWithLetter(str) {
//     // Regular Expression ব্যবহার করে চেক করছি
//     let result = /[ayieouw]$/i.test(str);
//     if (result === true) {
//         return 'Good Name';
//     }
//     else {
//         return 'Bad Name';
//     }
// }
// console.log(endsWithLetter('Tonm'));


// beginner level-1
// function checkName(name) {
//     const x = name.toLowerCase();
//     console.log(x);// number dily problem  hoye jaye;
//     const leaters = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
//     const lastLetter = name[name.length - 1];
//     if (leaters.includes(lastLetter)) {
//         return 'Good Name';
//     }
//     else if (typeof name !== 'string') {
//         return 'invalid!';

//     } else {
//         return 'Bad Name';
//     }

// }
// console.log(checkName(''));




//______________________Problem-03____________________
// Virus in my Array
// let array = [NaN, 1, 12, 0, -1, undefined];
// function deleteInvalids(arr) {
//     if (!Array.isArray(arr)) {
//         throw new Error("Input must be an array."); // Error message
//     }
//     let numArr=[];
// for (const element of arr) {
//     if (!isNaN(element)) {
//         numArr.push(element);
//     }
// }
// return numArr;
// }
// console.log(deleteInvalids(array));


//______________________Problem-04____________________

// //Make A Great Password
let userDetails = {
    name: "kolimuddin",
    birthYear: 1999,
    siteName: "google"
}
function password(obj) {
    if (typeof obj !== 'object') {
        return 'Invalid input';
    } 

    let CapitalizedSiteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.split('').slice(1).join('');
    let CreatedPass=CapitalizedSiteName+ '#' + obj.name + '@' + obj.birthYear;
    return CreatedPass;
}
console.log(password(userDetails));


//______________________Problem-05____________________

let pyments = [900, 2700, 3400];
let leavingCost = 10000;
console.log(monthlySavings(pyments, leavingCost));
function monthlySavings(arr, LCost) {
    if (!Array.isArray(arr) || typeof LCost !== 'number') {
        return 'Invalid input';
    }

    let sum = 0;
    for (let element of arr) {
        if (element >= 3000) {
            element -= element * 0.20;;
        }
        sum += element;
    }
    sum = sum - LCost;
    if (sum >= 0) {
        return sum;

    } else if (sum < 0) {
        return 'earn more'
    }

}

