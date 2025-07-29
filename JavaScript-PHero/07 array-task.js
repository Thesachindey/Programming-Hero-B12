// ------------task1----------------

let fruits=["Banana", "Orange", "Apple", "Jackfruit","Carrot"];
console.log(fruits[3]);
fruits[2]="Jambura";
console.log(fruits);


//--------------task2----------------

let touristDestinations=["Sreemongal","Sajek","Bagerhat"];

touristDestinations.push("Shundorbon");
touristDestinations.push("Cox's Bazar","Rangamati");

touristDestinations.pop();//remove last element

console.log(touristDestinations);


//--------------task3----------------

let books=["Harry Potter","Lord of the rings","The Alchemist","JavaScript"];

let isAbavailable=books.includes("The Alchemist");

if (isAbavailable) {
    console.log("The Book is available");
}else{
    console.log("The Book is not available");
}


// --------------task4----------------

let num=65656;
let game=["Cricket","Football","Hockey","Tennis"];
let zero=console.log("[]");

console.log(Array.isArray(game));
console.log(Array.isArray(num));
console.log(Array.isArray(zero));




//--------------task5----------------

let HollyWood=["Harry Potter","Lord of the rings","how to train your dragon"];
let bollywood=["Bahubali","Dangal","3 Idiots"];

let movies=HollyWood.concat(bollywood);

console.log(movies);