// console.log("I am now connected to main.js");

// document.body.style.backgroundColor = "lightblue";

let myName = "Adesh Shah";
let heading = document.getElementsByTagName('h1')[0];
heading.textContent = myName;

let myBio = `${myName} is a Professor in Ottawa, Ontario. He teaches full-time at Algonquin College in the School of Media and Design.`;

let paragraph = document.getElementsByTagName('p')[0];
paragraph.textContent = myBio;

// let number1 = document.getElementById('number1');

// number1.addEventListener("input", function() {
//     console.log('number1 was changed');
//     var number = number1.value;
//     console.log(number);
// });

let num = document.getElementById('num1');
let num2 = document.getElementById('num2');

document.getElementById('add').addEventListener('click', function() {
    let value1 = num.valueAsNumber;
    let value2 = num2.valueAsNumber;
    let sum = value1 + value2;
    console.log("The sum is: " + sum);
    document.getElementById('result').textContent = sum;
});


document.getElementById('sub').addEventListener('click', function() {
    let value1 = num.valueAsNumber;
    let value2 = num2.valueAsNumber;
    let sub = value1 - value2;
    console.log("The subtraction is: " + sub);
    document.getElementById('result').textContent = sub;
});

document.getElementById('mul').addEventListener('click', function() {
    let value1 = num.valueAsNumber;
    let value2 = num2.valueAsNumber;
    let mul = value1 * value2;
    console.log("The multiply is: " + mul);
    alert(document.getElementById('result').textContent = mul);
});

document.getElementById('div').addEventListener('click', function() {
    let value1 = num.valueAsNumber;
    let value2 = num2.valueAsNumber;
    let div = value1 / value2;
    console.log("The division is: " + div);
    document.getElementById('result').textContent = div;
});