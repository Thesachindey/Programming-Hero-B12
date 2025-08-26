let disha = 21;
let promi = 22;

if (disha > promi) {
    console.log("Disha will get the car key.")
} else {
    console.log("Promi will get the car key.")
}

// with arrow function 
let getMax = (Disha, Promi) => {
    if (Disha > Promi) {
        return console.log("Disha will get the car key.");
    }
    else {
        return console.log("Promi will get the car key.");
    }
}
getMax(23, 22);


// problem -2
let jim = 298;
let kim = 448;
let tim = 258;

if (jim > kim && jim > tim) {
    console.log("Jim is the aultimate booss.")
} else if (kim > jim && kim > tim) {
    console.log("Kim is the aultimate booss.")

} else {
    console.log("Tim is the aultimate booss.")

}

// with function 

let maxOfthree = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}
let maxNum = maxOfthree(122, 3, 34);
console.log(`The max of three num is = ${maxNum}`);