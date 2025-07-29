//__________________Task 1_________________
// Find the lowest number in the array below.
const numbers = [167, 190, 120, 165, 137];

function lowestNumber(arr) {
    let lowest=arr[0];
    for (const element of arr) {
        if(element<lowest){
            lowest=element;
        }
    }
    return console.log(lowest);
}
lowestNumber(numbers);

//__________________Task 2_________________

// Find the friend with the smallest name.
const friendsNames = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(arr) {
    let smallest=arr[0];
    for (const element of arr) {
        if (element.length<smallest.length) {
            smallest=element;
        }
    }
    return console.log(smallest);
}
smallestName(friendsNames);


//__________________Task 3_________________
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function calculateElectronicsBudget(laptopQuantity,tabletQuantity,mobileQuantity) {
    const laptopPrice=35000;
    const tabletPrice=15000;
    const mobilePrice=20000;

    const totalLaptopPrice=laptopQuantity*laptopPrice;
    const totalTabletPrice=tabletQuantity*tabletPrice;
    const totalMobilePrice=mobileQuantity*mobilePrice;

    const totalBudget=totalLaptopPrice+totalTabletPrice+totalMobilePrice;

    return console.log(totalBudget);

}
calculateElectronicsBudget(2,3,4);



//__________________Task 4_________________
// Task-4:
// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

// Input


    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];

    function findAveragePhonePrice(arr) {
        let sum=0;
        for (const phone of arr) {
           sum+=phone.price;
        }
        const averagePrice=sum/arr.length;
        return console.log(averagePrice);
    }
    findAveragePhonePrice(phones);


    //__________________Task 5_________________
    // For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];


        function totalSalary(arr){
            let totalSalary=0;
            for (const element of arr) {                
                const currentSalary=element.starting+(element.experience*element.increment);
                totalSalary+=currentSalary;
            }
            return console.log(totalSalary);
        }
        totalSalary(employees);