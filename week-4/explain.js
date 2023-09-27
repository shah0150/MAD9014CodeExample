// Array map Method:

// Purpose: The map method is like having a magic wand that transforms every item in an array and creates a new array with the transformed items.

// Visualization Idea: Imagine you have a conveyor belt with different items on it. You use a machine (the map method) to change each item into something else and collect the transformed items in a basket to create a new array.

// const numbers = [1, 2, 3, 4];
// const doubledNumbers = numbers.map(function(number) {
//   return number * 2;
// });

// doubledNumbers will be [2, 4, 6, 8]


// Array filter Method:

// Purpose: The filter method acts like a filter that separates items from a list based on a condition. It keeps the items that meet the condition and creates a new array.

// Visualization Idea: Think of a sieve that separates grains from dirt. The sieve (the filter method) lets through only the grains that meet a specific criteria and collects them in a new container.

// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter(function(number) {
//   return number % 2 === 0;
// });

// evenNumbers will be [2, 4]


// Array reduce Method:

// Purpose: The reduce method is like having a calculator that combines all the values in an array to produce a single result.

// Visualization Idea: Imagine you have a shopping list with prices for items, and you want to calculate the total cost. You start with an initial sum of zero and add the price of each item as you go through the list.

// const prices = [10, 20, 30, 40];
// const totalCost = prices.reduce(function(sum, price) {
//   return sum + price;
// }, 0);

// console.log(totalCost); // Output: 100
