const person = {
    name:'Kim Jong Un',
    father: 'Kim Jong Il',
    mother: 'Ko Yong-hui',
    sister: 'Kim Yo-jong',
    wife: 'Ri Sol-ju',
    children: ['Kim Ju-ae'],
    404:'Attack others country with Nuclear Weapons'
};

let name = person['name'];//bracket notation
console.log(name);
// why and when we use it 
// here is the reasons
let secretCode=person[404];//if we use . notation this thing is not work
console.log(secretCode);