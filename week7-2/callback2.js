// A function that simulates an asynchronous operation
function doSomethingAsync(callback) {
    setTimeout(function () {
      console.log("Task is done!");
      callback(); // Call the callback function
    }, 2000); // Simulate a 2-second delay
  }
  
  // Callback function to be executed after the asynchronous operation
  function callbackFunction() {
    console.log("Callback function executed!");
  }
  
  // Call the asynchronous function with the callback
  doSomethingAsync(callbackFunction);
  
  console.log("Main program continues...");

//   In this example, doSomethingAsync is a function that simulates an asynchronous operation using setTimeout. It takes a callback function (callback) as an argument. After the simulated task is completed (in this case, a 2-second delay), it calls the callback function.

// The callbackFunction is defined separately and will be executed after the asynchronous operation is finished. When you run this code, you will see that "Callback function executed!" is logged after "Task is done!" and "Main program continues...". This demonstrates the concept of callback functions and how they can be used to manage asynchronous operations in JavaScript.
  