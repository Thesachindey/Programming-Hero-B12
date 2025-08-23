let murdererListHeading=document.querySelector("h1");
let murdererList=document.getElementById("murderer-list");
let murdererListItem=murdererList.getElementsByTagName("li");
// console.log(murdererListHeading);
// console.log(murdererList);
console.log(murdererListItem);

for (const element of murdererListItem) {
    console.log(element.innerHTML);
}

