// array.push(items) - add items to the end,
// array.pop() - removes an item from the end,
// array.shift() - removes an item from the beginning,
// array.unshift(items) - add items to the beginning. 

// forEach
let firstNames = ["Adesh", "Tony", "Steve"];

firstNames.forEach(function(name, index){
    console.log(`${index + 1} - ${name}`);
})

// Map

const numbers = [1, 2, 3, 4];
const doubledNumbers = numbers.map(function(number){
    return number * 2;
})
console.log(doubledNumbers);


const dateStrings = [
    "2023-01-15",
    "2023-02-14",
    "2023-03-25",
    "2023-04-09"
]

// January 15, 2023
// February 14, 2023

const dates = dateStrings.map(function(dateString){
    const date = new Date(dateString);
    const options = {
        weekday: "long",
        year: "numeric",
        day: "numeric",
        month: "long",
        timeZone: 'UTC'
    }
    return date.toLocaleDateString('en-CA', options);
});

console.log(dates);


// filter

let findEvenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = findEvenNumbers.filter(function(evenNumber){
    return evenNumber % 2 == 0;
});

console.log(evenNumbers);

const canadaCities = [
    {
        province: 'QC', population: 500000
    },
    {
        province: 'ON', population: 900000
    },
    {
        province: 'BC', population: 600000
    },
    {
        province: 'AB', population: 200000
    }
]

// let bigCities = [];
// for (let i = 0; i <canadaCities.length; i++){
//     if (canadaCities[i].population > 300000){
//         bigCities.push(canadaCities[i]);
//     }
// }

// console.log(bigCities);

let bigCities = canadaCities.filter(function(city){
    return city.population > 300000;
});
console.log(bigCities);

let users = [
    {
        id: 1,
        firstName: "Adesh",
        age: 21
    },
    {
        id: 2,
        firstName: "Arianne",
        age: 31
    },
    {
        id: 3,
        firstName: "Paul",
        age: 32
    }
]

let filteredAge = users.filter(function(user){
    return user.age >= 30;
})

console.log(filteredAge);

// sort (explain in person on Thursday)

let fruits = ["Pineapple", "Apple", "Orange", "Cherry"]
fruits.sort();
console.log(fruits);

let numbers1 = [4, 13, 3, 22]
// numbers1.sort(); // 3, 4, 13, 22


numbers1.sort(function(a, b){
    return a - b; // asscending order // if b - a // des order
})
console.log(numbers1);

// reduce

// complex operation with map, filter, sort

let complexOperations = [1, 2, 3, 6, 7, 5, 4];

const result = complexOperations.sort(function(a, b){
    return a - b; // [1, 2, 3, 4, 5, 6, 7]
}).filter(function(number){
    return number % 2 == 0; // [2, 4, 6]
}).map(function(number){
    return number * 2; // [4, 8, 12]
});

console.log(result);


