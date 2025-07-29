let a = 5;
let b = 7;

console.log(`Before swap: a=${a}, b=${b}`);

let temp = a;
a = b;
b = temp;

console.log(`After swap: a=${a}, b=${b}`);


//another way
let x = 5;
let y = 7;
[x, y] = [y, x];
console.log(`After swap: x=${x}, y=${y}`); 