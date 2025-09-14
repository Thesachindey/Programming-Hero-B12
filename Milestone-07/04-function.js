// normal function 
/*
 function name(params) {
    
 }
**/

// array function 
const sum = (...rest) => {
    console.log(rest);
    /**
     * receive array by using spreed(...)Operator
     */
}
sum(1, 2, 3, 4, 5, 6);

// airokom single line-y likhly return korar proyjon nyi
// const add=(a,b,c)=>a+b+c;
const add = (a, b, c) => {
    const total = a + b + c;
    return total;
}
const addCont = add(1, 2, 3);
console.log(addCont);