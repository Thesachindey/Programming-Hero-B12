/**
 * 

// const car= ['Toyota', 'Honda', 'Ford'];
// car.push('Chevrolet');
// console.log(car);

const users = [
    { name: "Asha", age: 17 },
    { name: "Rafi", age: 22 },
    { name: "Mina", age: 19 },
    { name: "Kamal", age: 15 }
];

// 1. filter → keep only adults (age >= 18)
const adults = users.filter(user => user.age >= 18);

// 2. map → take only their names
const adultNames = adults.map(user => user.name);

// 3. forEach → log them one by one
adultNames.forEach(name => console.log("Adult user:", name));



let num = [32, 44, 51, 17, 55, 35];
// let filteredEvenNum = num.filter(x => x % 2 === 0);
// let mapEvenNum = num.map(x => x % 2 === 0);

let filtered = num.filter(num=> num>50);
let filteredMap = num.map(num=> num>50);
console.log(filteredMap);//[false, false, true, false, true, false]
console.log(filtered);//[51, 55]


*/


// function min(nums) { return Math.min(nums); }
// console.log(min([1,3,2])); // Output: isNaN


// const xp =x=>x**3;
// console.log(xp(2)); // 8


let numArr=[1, 2, 3, 4, 5];

let Output= numArr.filter(num => num%2);
console.log(Output);


/**explain
 * 
 * 
 * The callback function is n => n % 2. This returns the remainder when n is divided by 2.
 * 
 * For even numbers: n % 2 returns 0 (which is falsy).
 *
 * For odd numbers: n % 2 returns 1 (which is truthy).
 *
 * NOTE:
 * In JavaScript, filter() keeps elements for which the callback returns a truthy value.
 * 
 * Therefore:
 * Odd numbers (1, 3, 5) return 1 (truthy), so they are included.
 * Even numbers (2, 4) return 0 (falsy), so they are filtered out.
 * The output is [1, 3, 5].
 * 
 * Answer: C [1,3,5]


*/


// let friendsArr = ["Ali", "Bob", "Charlie", "Dave", "Eve", "Frank", "Grace"];

// let fFiveCarName=friendsArr.find(friend => friend.length === 5);
// console.log(fFiveCarName);


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    isAdult() {
        return this.age >= 18;
    }
}

// Example usage:
const person1 = new Person("Asha", 17);
const person2 = new Person("Rafi", 22);

person1.greet(); // Hello, my name is Asha and I am 17 years old.
person2.greet(); // Hello, my name is Rafi and I am 22 years old.

console.log(person1.isAdult()); // false
console.log(person2.isAdult()); // true