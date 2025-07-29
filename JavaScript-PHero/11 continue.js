//NOTE:The continue statement breaks one iteration (in the loop) if a specified condition occurs, and continues with the next iteration in the loop.

for (let index = 0; index <= 10; index++) {
   if (index%2===1) {
    continue;
   }
   console.log(index);
    
}//result: 0 2 4 6 8 10