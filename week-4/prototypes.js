// Object 1
const person1 = {
    name: 'Alice',
    greet: function() {
      console.log(`Hello, my name is ${person1.name}`);
    }
  };
  
// Object 2
const person2 = {
    name: 'Bob'
};
  
  // Make person2 greet using person1's greet method
person2.greet = person1.greet;
console.log(person2.greet()); // Hello, my name is Bob
  