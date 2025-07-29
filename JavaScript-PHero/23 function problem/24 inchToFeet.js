// 12 inch = 1 feet
// 1 kilometer = .621371 miles
// 1 mile = 1.60934 kilometers

// 1. inchToFeet
function inchToFeet(inch) {
    const feet = inch / 12;
    let intNum = parseInt(feet);
    let flotNum = inch % 12
    let result =`${intNum} feet ${flotNum.toFixed(1)} inch.`;
    return console.log(result);
}
inchToFeet(66);

// 2. feetToInch
function feetToInch(feet){
    const inch=feet*12;
    return console.log(inch.toFixed(2));
}
feetToInch(5.5);

// 3. kilometerToMiles

function kilometerToMiles(kilometer){
    const miles=kilometer*0.621371;
    return console.log(kilometer,"km","=",miles,"miles");
}
kilometerToMiles(21);

// 4. milesToKilometer

function milesToKm(mile){
const km=mile*1.60934;
return console.log(`${mile} mile = ${km.toFixed(2)} km`);
}
milesToKm(13.048791);