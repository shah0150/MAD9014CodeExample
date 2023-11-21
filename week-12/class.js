// Define a class
class Car {
    // Constructor method runs when a new object is created
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
        this.isStarted = false 
    }
    // Method to start and drive car
    start() {
        this.isStarted = true
        console.log(`${this.year} ${this.make} ${this.model} is started`);
    }

    drive() {
        if(this.isStarted) {
            console.log(`${this.year} ${this.make} ${this.model} is driving`);
        } else {
            console.log("please turn on your car");
        }
    }
}

// create a new car object using the Car class

let myCar = new Car('Toyota', 'Camary', 2022)

// Use methods on the car object

myCar.start();
myCar.drive();

// Another car object
let anotherCar = new Car('Honda', 'Civic', 2018)
anotherCar.start()
anotherCar.drive()