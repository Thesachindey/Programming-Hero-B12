let books = ["Mathematics", "Biology", "Chemistry", "Physics", "Bangla"];
console.log(books);

// -----------------Array methods-----------------

//pop
books.pop();
//Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(books);

//push
books.push("Sachin1");
//Appends new elements to the end of an array, and returns the new length of the array.
console.log(books);

//shift
books.shift();
//Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log( );

//unshift
books.unshift("Sachin2");
//Adds new elements to the beginning of an array, and returns the new length of the array.
console.log(books);

console.log(typeof books);// object


//NOTE: ------------------array.includs()-----------------

//Determines whether an array includes a certain element, returning true or false as appropriate.

console.log(books.includes("sachin3"));//false
console.log(books.includes("Sachin1"));//true


//-----------------array.IndexOf()------------------

//Returns the index of the first occurrence of a value in an array, or -1 if it is not present
console.log(books.indexOf("Sachin1"));//4


//----------------array.IsArray()------------------

//Determines whether the passed value is an array.
console.log(Array.isArray(books));//true
console.log(Array.isArray("sachin"));//false




// ------------------array.toString()------------------
let fruits2 = ["Banana", "Orange", "Apple", "Jackfruit"];
console.log(fruits2);
let str = fruits2.toString();//Returns a string representation of an array ==>  Banana,Orange,Apple,Jackfruit
console.log(str);



//----------------array.concat()------------------
//Combines two or more arrays. This method returns a new array without modifying any existing arrays.

let array1 = ["a", "b", "c"];
let array2 = ["d", "e", "f"];
let array3 = [1, 2, 3, 4];

console.log(array1.concat(array2, array3));




