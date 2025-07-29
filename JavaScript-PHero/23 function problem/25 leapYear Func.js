// A leap year is a year that is evenly divisible by 4, except for years that are evenly divisible by 100. However, years divisible by 400 are leap years.

//Algorithm:
// If (year % 4 == 0)
// AND (year % 100 != 0) OR (year % 400 == 0) → Leap Year 
// Otherwise → Not a Leap Year

function isLeapYear(year) {
    if ((year % 2 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return console.log(`${year} is a Leep Year`);
    } else { return console.log(`${year} is Not a Leep Year`); }
}

// Test the function
isLeapYear(2024); // true
isLeapYear(1900); // false
isLeapYear(2000); // true
isLeapYear(2023); // false
