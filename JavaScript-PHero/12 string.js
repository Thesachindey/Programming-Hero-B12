let book="The Alchemist kqqqqqdsq qdqdq";

console.log(book.toUpperCase());


//------------------slice------------
let question="What is your name?";
console.log(question.slice(0,5));

// //----------------split----------- string.split(separator, limit)
let words="harry potter,jk rowling,fantastic beats,harry potter and the chamber of secrets";
let spWords=words.split("  ");

console.log(spWords.join(" "));


//____________________ reverse _______________

let sentence = "I am learning web dev.";

// let rev = "";
// for (let index = 0; index < sentence.length; index++) { 
//     rev = sentence[index]+rev;
// }
// console.log(rev);


// shortcut
const reversed=sentence.split("").reverse().join("");
console.log(reversed);