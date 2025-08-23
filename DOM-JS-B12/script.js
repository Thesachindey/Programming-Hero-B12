// const element = document.querySelector(".myClass");
// console.log(element.textContent); // Outputs: Item 1

// const elements = document.querySelectorAll(".myClass");
// elements.forEach((el) => console.log(el.textContent)); // Outputs: Item 1, Item 2

// alert("hello sachin!")
let myClass = document.getElementsByClassName("myClass");
myClass[0].style.fontFamily="monospace";
myClass[0].style.fontSize="10rem";
myClass[0].style.fontWeight="bold";
myClass[0].style.color='white';
myClass[0].style.backgroundColor='black';



myClass[0].addEventListener("click", ()=>{
    if (myClass[0].style.backgroundColor === 'black') {
        myClass[0].style.backgroundColor = 'white';
        myClass[0].style.color = 'black';

    }else{
        myClass[0].style.backgroundColor = 'black';
        myClass[0].style.color = 'white';
    }
})
