// Closures in JavaScript can be a bit tricky to grasp at first, but I'll explain them in a beginner-friendly way with an example.

// A closure is like a function bundled together with the environment (the variables and other things) it was created in. It's like a function "remembers" the variables around it even after it has finished running.

// Example:

// Let's say you have a function that creates another function, and the inner function uses a variable from the outer function. This creates a closure.

function outerFunction() {
    let outerVariable = "I am from the outer function";
    
    function innerFunction() {
      console.log(outerVariable); // This inner function still "remembers" outerVariable
    }
    
    return innerFunction; // Return the inner function
  }
  
  const myClosure = outerFunction(); // Call outerFunction and store the result
  
  myClosure(); // Call the inner function
  
//   In this example, outerFunction contains an innerFunction, and the innerFunction uses the outerVariable from the outerFunction. When you call outerFunction, it returns the innerFunction, and you store it in the myClosure variable.

//   Now, even after outerFunction has finished running, when you call myClosure(), it still remembers the outerVariable from the environment where it was created. That's the magic of closures. It's as if innerFunction carries a piece of its birthplace with it.
  
//   So, when you call myClosure(), it prints "I am from the outer function" even though outerFunction has already completed. The inner function has "closed over" the variables from the outer function, forming a closure.
  
//   Closures are essential in JavaScript and are used in various programming patterns, like creating private variables and managing state in functions.  