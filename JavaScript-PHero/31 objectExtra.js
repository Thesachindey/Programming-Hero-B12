let superHero = {
    name: "Thanos",
    age: 30,
    power: "Infinity",
    isAlive: true,
    sayHello: function () {
        return console.log("Hello, I am Thanos");
    },
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    },
    movies: ['Avengers', 'End Game', 'Infinity War'],
    getAge: function () {
        return this.age;
    }
}
console.log(superHero.getAge());
console.log(superHero.sayHello());
console.log(superHero.address)


// let number=[10,56,5];
let number = {
    '0': 10,
    '1': 56,
    '2': 5
}

console.log(number[0]);
console.log(Array.isArray(number));//false
console.log(typeof number);//object