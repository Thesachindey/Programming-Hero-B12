// false value 
// 0,-0,"",null,undefined,false

// true value 
// 'gjgd', 132412, {},[],true


const test = 0;

// if (test) {
//     console.log("It's truthy.");
// } else {
//     console.log("It's falsy");
// }

// ternary operator 
// test? console.log("It's truthy."):console.log("It's falsy")
const num = 30;
// multiple condition thakly 
const result = (num <= 20 && num >= 50) ? "true" : "false"
// console.log(result);


// logical not !
// const isActive = true;
// console.log(!isActive)


const isUser = false;
const showUser = () => console.log('show user green!');
const hideUser = () => console.log('hide user!');

// isUser ? showUser() : hideUser();

//aykta kaj koraty chily
// isUser && showUser(); //true holy kaj korby

isUser || showUser();//false holy kaj korby