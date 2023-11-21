// Define a Car class
class Car {
  // Constructor method runs when a new object is created
  constructor(make, model, year) {
    // Set the properties of the car
    this.make = make;
    this.model = model;
    this.year = year;
    this.isStarted = false; // Additional property to track if the car is started
  }

  // Method to start the car
  start() {
    this.isStarted = true;
    console.log(`${this.year} ${this.make} ${this.model} is started.`);
  }

  // Method to make the car drive
  drive() {
    if (this.isStarted) {
      console.log(`${this.year} ${this.make} ${this.model} is driving.`);
    } else {
      console.log(`Please start the car first.`);
    }
  }
}

// Create a new car object using the Car class
const myCar = new Car('Toyota', 'Camry', 2022);

// Use methods on the car object
myCar.start(); // Output: 2022 Toyota Camry is started.
myCar.drive(); // Output: 2022 Toyota Camry is driving.

// Create another car object
const anotherCar = new Car('Honda', 'Civic', 2021);
anotherCar.start(); // Output: 2021 Honda Civic is started.
anotherCar.drive(); // Output: 2021 Honda Civic is driving.


