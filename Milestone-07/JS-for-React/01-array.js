const bollywoodHeroes = [
    "Shah Rukh Khan",
    "Amitabh Bachchan",
    "Salman Khan",
    "Aamir Khan",
    "Hrithik Roshan",
    "Ranbir Kapoor",
    "Akshay Kumar",
    "Ranveer Singh",
    "Ajay Devgn",
    "Varun Dhawan"
];

// Array.length
console.log(bollywoodHeroes.length);
//index
console.log(bollywoodHeroes[0]);
//array-r lastyr dike kicu add korly (arr.push(''))
bollywoodHeroes.push('sachin');
console.log(bollywoodHeroes);
//array-r lastyr dike kicu remove korly (arr.pop())
bollywoodHeroes.pop()
console.log(bollywoodHeroes);

//array-r surur dike kicu add korly (arr.unshift(''))
bollywoodHeroes.unshift('Sachin');
console.log(bollywoodHeroes);
//array-r surur dike kicu remove korly (arr.shift())
bollywoodHeroes.shift();
console.log(bollywoodHeroes);

//array-r aykta nirdisto ongsho ba slice nity chaily
console.log(bollywoodHeroes.slice(2, 6));
/*
arr.slice(start, end) ব্যবহার করা হয় একটা array এর কিছু অংশ কপি করার জন্য।

-> start index থেকে শুরু হয়।

-> end index পর্যন্ত যাবে, কিন্তু ওই index-এর element নিবে না।

-> মূল array change হয় না।

-> Negative index দিলে array এর শেষ দিক থেকে গোনা শুরু করে।
**/

/**
 * ✅ splice() → element মুছে ফেলে/যোগ করে/replace করে, আর মূল array change হয়।
 * Purpose: Add/Remove/Replace elements in the array.
 * Modifies the original array.
 * Returns an array of removed elements.
 */
// 👉 Syntax:
// array.splice(start, deleteCount, item1, item2, ...)

const fruits = ["apple", "banana", "mango", "orange"];

let removed = fruits.splice(0, 3);//it's return removed array element's new array; and modified original array
console.log(`This are all removed elements: [${removed}] 
This is modified original array: [${fruits}]`);

fruits.splice(1, 0, "Coconut");// it's modified original array
console.log(fruits);
