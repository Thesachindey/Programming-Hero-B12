
// Array destructuring
const friend = ['Mike', 'Ruth', 'Bear-Grrils']
const [elm1, elm2, elm3] = friend;
// console.log(elm1, elm2, elm3);


// Object destructuring 
// key same thaky
const person = {
    name: "Norendro Modi",
    age: 78,
    friends: ["Putin", "Donald Trump", 'Kim Jung Un'],
    liked: 'Mamta Di'
}

const { name, age, liked, friends } = person;
console.log(friends);
// console.log(person.friends) //we don't need to do this 