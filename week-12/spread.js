// The spread operator (...) is used to expand elements of an iterable (like arrays or strings) or properties of an object. It is commonly used for array and object manipulations.

// Spread Array

let array1 = [1, 2, 3]
let array2 = [4, 5, 6]
let combinedArray = [...array1, ...array2]

console.log(combinedArray);

// Spread ObjectS

let object1 = {a: 1, b: 2}
let object2 = {c: 3, d: 4}

let combinedObject = { ...object1, ...object2 }
console.log(combinedObject);

// Spread Operator in Function Arguments:

// Suppose you have a function that takes multiple arguments. You can use the spread operator to pass an array of values as individual arguments.
function addNumbers(a, b, c) {
    return a + b + c;
  }
  
let numbers = [1, 2, 3];
  
let result = addNumbers(...numbers);

  

// Destructuring allows you to extract values from arrays or properties from objects and assign them to variables in a more concise way.

// Destructuring Arrays

let number = [7, 8, 9]
let [first, second, third] = number
console.log(first, second, third);

// Destructuring Objects
let person = {
    firstName: "Adesh",
    age: 30,
    location: "Canada"
}

let {firstName, age} = person
console.log(age);


// Destructuring in Function Parameters:
// When a function returns an object, you can use destructuring to easily extract specific properties.

function getUser() {
    return { username: 'john_doe', myAge: 25, isAdmin: false };
  }
  
  let { username, myAge } = getUser();
  // Variables: username = 'john_doe', age = 25

//   Destructuring in Function Return:
// Functions can return objects, and you can destructure the returned object to get specific values.

function calculateDimensions(width, height) {
    return { width, height, area: width * height };
  }
  
  let { area } = calculateDimensions(5, 10);
  // Result: area = 50

// Enumeration

// Enumeration is just a fancy word for going through a list of things one by one. Enumeration refers to the process of iterating over the elements of an iterable, like an array or an object. There are various ways to enumerate in JavaScript

let enumNumbers = [1, 2, 3]
for (let num of enumNumbers) {
    console.log(num);
}

// For Objects
// If you have a list of your favorite snacks, enumerating them is like looking at each snack and saying what it is.
let enumPerson = {
    firstName: "Adesh",
    age: 30,
    location: "Canada"
}

for (let key of Object.keys(person)) {
    console.log(key, person[key]);
}

let shoppingList = ['Apple', 'Banana', 'Milk'];

for (let item of shoppingList) {
  console.log(`Buy ${item}`);
}
// Output: Buy Apple, Buy Banana, Buy Milk

