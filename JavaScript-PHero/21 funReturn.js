// NOTE: return statement is used to return a value from a function.
// NOTE: A function can only return one value.
// NOTE: return korar por function ta stop hoye jabe.




// let doSum = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(doSum(46,1000));



let str="how many people are here..........!";

function carCount(str){
    let count=str.length;
    console.log(str,count);
    if (count%2===0) {
        return "even";
    }else{
        return "odd";
    }
}

console.log(carCount(str));