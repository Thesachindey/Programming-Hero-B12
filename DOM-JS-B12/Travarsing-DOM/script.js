
// 👉 Use .textContent when you only need raw text.
// 👉 Use .innerText when you want what the user actually sees.
// 👉 Use .innerHTML when you need to get or set HTML structure.

// // getElementById
// let navLogo = document.getElementById("nav-logo");

// console.log(navLogo.innerText);
// navLogo.innerText = "Kuryghor Restaurant";
// console.log(navLogo.innerText);


// // getElementsByClassName
// let menu = document.getElementsByClassName("menu-item");
// console.log(menu);
// for (const element of menu) {
//     console.log(element.innerText);
// }


// document.querySelectorAll
let menuItems = document.querySelectorAll("#menu li span");
console.log(menuItems);
let add = 5 / 100;
for (const element of menuItems) {
    console.log(element.innerText);
    let price = parseFloat(element.innerText.replace(/[^\d.]/g, ""));
    let newPrice = price + (price * add);
    console.log(newPrice); // Only log the new price, do not change the DOM
    element.innerText = `$${newPrice.toFixed(2)}`;
}
