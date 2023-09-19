// square root of 16

// let sqrt = Math.sqrt(16);
// console.log(sqrt);

// raised to power
// let raisedToPower = Math.pow(4,4);
// console.log(raisedToPower);
// Math.round(num); returns the next highest or lowest integer depending on its decimal value.
// Math.floor(num); //always rounds down to the next lowest integer
// Math.ceil(num); //always rounds up to the next highest integer

// Roll a dice
// let randomDice = Math.round(Math.random() * 6);
// console.log(randomDice)


// let sideA = 4;
// let sideB = 3;

// let hypotenuse = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));

// console.log(hypotenuse);

let groups = ['group 1', 'group 2', 'group 3', 'group 4', 'group 5'];
let myGroupLength = groups.length;
console.log(myGroupLength);

let randomGroup = groups[Math.floor(Math.random() * myGroupLength)];
console.log(randomGroup);