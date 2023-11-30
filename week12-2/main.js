// Spread 

// Array
let array1 = [1, 2, 3]
let array2 = [4, 5, 6]

// keyword (...)
let combinedArray = [...array1, ...array2]
console.log(combinedArray);

let object1 = {a: 1, b: 2}
let object2 = {c: 3, d: 4}

let combinedObject = {...object1, ...object2}
console.log(combinedObject);

function addNumbers(a, b, c) {
    return a+b+c
}

let numbers = [2, 2, 2]
let result = addNumbers(...numbers) //6
console.log(result);

// Destructing Arrays

let myNumbers = [7, 8, 9]
let [hello, computer, third] = myNumbers
console.log(hello, computer, third);

// Destructing Objects
let person = {
    firstName : 'Adesh',
    age : 21,
    location : 'Canada'
}

let {firstName, age} = person
console.log(age);

function getUser(){
    return {
        username: 'shaha', age1: 41, isAdmin: true
    }
}

let {username, age1} = getUser()
console.log(age1);

function calculateDimensions(width, height){
    return {
        width, height, area: width * height
    }
}

let {area} = calculateDimensions(5, 10)
console.log(area);


// Enumeration

let enumNumbers = [1, 2, 3]
for (let num of enumNumbers){
    console.log(num);
}

let favSnacks = ["Lays", "Kuarkure", "Doritos"]

for (let item of favSnacks){
    console.log((`Buy ${item}`));
}


let enumPerson = {
    firsName: 'Adesh',
    userAge: 21,
    location: 'Canada'
}

for (let key of Object.keys(enumPerson)){
    console.log(key, enumPerson[key]);
}