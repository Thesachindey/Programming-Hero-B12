//min
let min = Math.min(9, 10,26,34,45,32,45,67,5);
console.log(min);

//max
let max = Math.max(9, 10,26,34,45,32,45,67,5); 
console.log(max);

//Math.PI
console.log(Math.PI);

//Math.abs
//NOTE: The Math.abs() function returns the absolute value/ GAP of a number, that is, it returns the number without its sign.lIKE:(5-10)=5
console.log(Math.abs(-100+50));

//Math.round
//NOTE: The Math.round() function returns the value of a number rounded to the nearest integer.

console.log(Math.round(4.7)); // returns 5

// Math.floor
//NOTE: The Math.floor() function returns the integer.
console.log(Math.floor(4.7)); // returns 4

//Math.random
//NOTE: The Math.random() function returns a random number between 0 (inclusive), and 1 (exclusive):
console.log(Math.random()); // returns a random number 0-1

console.log(Math.random()*10); // returns a random number 0-10

let ranInt=Math.floor(Math.random()*10); 
console.log(ranInt);// returns a random integer 0-10
// or
let ranInt2=Math.round(Math.random()*10); 
console.log(ranInt2);// returns a random integer 0-10