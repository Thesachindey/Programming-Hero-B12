let tranList=['Elon', 'Elon', 'Joe', 'Joe','Doland', 'Doland', 'Bibykamundon'];
let num=[2,344,566,775,5,5,67,88,9,9,90,2];

function noDuplicate(arr){
    let unique=[];
    for (const element of arr) {
        if (unique.includes(element) === false) { //true
            unique.push(element);
        }
    }
    return unique;
}
console.log(noDuplicate(tranList));

