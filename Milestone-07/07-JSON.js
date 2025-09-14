const person = {
    name: "Norendro Modi",
    age: 78,
    friends: ["Putin", "Donald Trump", 'Kim Jung Un'],
    liked: 'Mamta Di'
    ,
    family: {
        spouse: "Jashodaben Narendrabhai Modi",
        children: [],
        parents: ["Damodardas Mulchand Modi", "Heeraben Modi"]
    }
}

// make normal obj into json data by [JSON.stringify()]
const jsonData = JSON.stringify(person);
// console.log(jsonData)
// make json data into normal obj by [JSON.parse()]
const plainData = JSON.parse(jsonData);
// console.log(plainData);


// fetch 
/**
fetch('')
.then(res => res.json())
.then(data => console.log(data))
*/


//  Object.keys()--to get keys
const keys = Object.keys(person);
// console.log(keys)

//Object.value()--to get value
const values=Object.values(person);
// console.log(values);


