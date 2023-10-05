// console.log("Hey, I am now connected to js/main.js");

document.body.style.backgroundColor = "lightblue";

let fullName = "Adesh Shah";
let newHeading = document.getElementById('heading1');
console.log(newHeading);

newHeading.textContent = fullName;

let myBio = `${fullName} is a professor and research manager and program coordinator at Algonquin College`

let newPara = document.getElementById('para1');
newPara.textContent = myBio;

let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');

let addBtn = document.querySelector('#add');
addBtn.addEventListener('click', () => {
    let value1 = input1.valueAsNumber;
    let value2 = input2.valueAsNumber;
    let sum = value1 + value2;
    document.getElementsByTagName('p')[1].textContent = sum;
});

let subBtn = document.querySelector('#sub');
subBtn.addEventListener('click', () => {
    let value1 = input1.valueAsNumber;
    let value2 = input2.valueAsNumber;
    let sub = value1 - value2;
    document.getElementsByTagName('p')[1].textContent = sub;
});

let mulBtn = document.querySelector('#mul');
mulBtn.addEventListener('click', () => {
    let value1 = input1.valueAsNumber;
    let value2 = input2.valueAsNumber;
    let mul = value1 * value2;
    document.getElementsByTagName('p')[1].textContent = mul;
});

let divBtn = document.querySelector ('#div');
divBtn.addEventListener('click',() => {
    let value1 = input1.valueAsNumber;
    let value2 = input2.valueAsNumber;
    if (value2 == 0) {
        document.getElementsByTagName('p')[1].textContent = 'I cannot divide by this number that is 0';
    }
    else{
    let div = value1 / value2;
    document.getElementsByTagName('p')[1].textContent = div;
    }
});







