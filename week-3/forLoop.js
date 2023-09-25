// let array = [5,10,15,20,25];

// let myArrayLength = array.length;
// console.log(myArrayLength);

// for (let i = 0; i < myArrayLength; i++){
//     console.log(array[i] + " is multiple of 5");
// }

// Simulate User data

let data = [
    {
        firstName: 'Adesh',
        age: 30
    }, 
    {
        firstName: 'Arianne',
        age: 31
    },
    {
        firstName: 'Paul',
        age: 32
    }
]

// let myLength = data.length;
// console.log(myLength);

// Loop through that data

for (let i = 0; i < data.length; i++){
    console.log(`User ${data[i].firstName}, User Age ${data[i].age}`);
}