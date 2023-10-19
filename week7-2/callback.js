// In JavaScript, a callback function is a function that is passed as an argument to another function and is intended to be executed after the completion of that function. Callback functions are commonly used in asynchronous programming, such as handling events, making HTTP requests, or reading files. They allow you to specify what should happen once a certain operation is finished.

function greet(name, callback) {
    console.log('Hello, ' + name + '!');
    callback(); // Call the callback function
  }
  
  function sayGoodbye() {
    console.log('Goodbye!');
  }
  
  greet('John', sayGoodbye);

//   In this example, the greet function takes two parameters: name and callback. It first logs a greeting message and then calls the callback function. In the sayGoodbye function, we log a "Goodbye!" message.

// When we call greet('John', sayGoodbye), the output will be:


// The sayGoodbye function is passed as a callback to the greet function, and it is executed after the greeting message is displayed.

// Callback functions are essential in many JavaScript libraries and frameworks, especially when dealing with asynchronous tasks like handling user input, making AJAX requests, and handling events. They provide a way to ensure that specific actions are performed once certain tasks are completed.