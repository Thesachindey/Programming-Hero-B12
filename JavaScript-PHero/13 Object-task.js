//------task1--------
//Access the golden rod color value in output.

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};


console.log(colors["golden rod"]);


//------task2--------
//For this object below add a property named passenger capacity with value 5

// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };

// car["passenger capacity"]=5;

// console.log(car);


//------task3--------

// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };

// let physicsMarks=student.physics.marks;
// console.log(physicsMarks);


//------task4--------
// Count the number of properties.

// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };

// console.log(Object.keys(student).length);


//------task5--------

//Loop through an object and print the key-value pairs with their types
// let myObject = {

//     name: 'John Doe',
//     age: 25,
//     city: 'Example City',
//     isStudent: true
//     };

//     console.log(myObject);

//     //or for..in loop
//     for (const key of Object.keys(myObject)) {
//         if (myObject.hasOwnProperty(key)) { 
            
//             console.log (`key: ${key} | type: ${typeof myObject[key]}`);
//         }
//     }

//     console.log(myObject[Object.keys(myObject)[0]]);