const today=new Date();
console.log(today);

const date1=new Date('2062-10-1');
console.log(date1);
console.log(date1.getDate());
console.log(date1.getDay());


const specificDate=new Date(2091, 0,26);
// console.log(specificDate);
specificDate.setMonth(3); 
console.log(specificDate);
console.log(specificDate.toLocaleString('en-BG'));