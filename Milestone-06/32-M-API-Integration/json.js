console.log("Explore API");

const person = {
  name: "selim",
  fruit: "dalim",
  dish: "halim",
  friends: ["alim", "kolim", "lamim"],
  isRich: false,
  money: 34000,
};
console.log(person, typeof person);
// JSON ->  JS object with Notation
// JSON.stringify ->kono aykta object ke [JSON] format e convert kore
// JSON.parse -> JSON format theke [object] e convert kore

const personJSON = JSON.stringify(person);
console.log(personJSON, typeof personJSON);

const parseJSON = JSON.parse(personJSON);
// console.log(parseJSON);
