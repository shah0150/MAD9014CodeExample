// Sets:
// A Set is a collection of values where each value must be unique. It's similar to an array, but it doesn't allow duplicate entries.

// Creating a Set
const mySet = new Set();

// Adding values to the Set
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1); // Duplicate values are ignored

console.log(mySet); // Output: Set { 1, 2, 3 }

// In this example, the Set mySet is created, and values are added using the add method. Note that the duplicate value 1 is ignored because Sets only store unique values.

// Maps:
// A Map is a collection of key-value pairs where each key must be unique. Unlike objects, keys in maps can be of any data type.

// Creating a Map
const myMap = new Map();

// Adding key-value pairs to the Map
myMap.set('name', 'John');
myMap.set('age', 25);
myMap.set('isStudent', true);

console.log(myMap); // Output: Map { 'name' => 'John', 'age' => 25, 'isStudent' => true }

// Here, the Map myMap is created, and key-value pairs are added using the set method. Keys can be of any type (string, number, object, etc.), providing more flexibility than objects.

// Using Sets and Maps together:

// You can use Sets and Maps in combination for various purposes. For example, you might use a Set to store a unique list of values and a Map to associate additional information with those values.

const uniqueNumbers = new Set();

// Adding unique numbers
uniqueNumbers.add(1);
uniqueNumbers.add(2);
uniqueNumbers.add(3);

const numberInfo = new Map();

// Associating additional information with numbers
numberInfo.set(1, 'One');
numberInfo.set(2, 'Two');
numberInfo.set(3, 'Three');

// Using the Set to iterate over unique numbers
for (const number of uniqueNumbers) {
  console.log(`${number}: ${numberInfo.get(number)}`);
}

// A Set (uniqueNumbers) is used to store unique numbers, and a Map (numberInfo) associates additional information (strings) with each number. The combination allows for efficient data organization and retrieval.

// Sets and Maps provide powerful ways to manage and organize data in JavaScript, offering unique features compared to arrays and objects. Sets are great for handling collections of unique values, while Maps are useful for key-value pairs with a wide range of key types.